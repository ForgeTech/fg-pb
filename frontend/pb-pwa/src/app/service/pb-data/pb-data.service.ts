import { Injectable } from '@angular/core';
import { NGXLogger as FgLogService } from 'ngx-logger';
import {
  AuthenticationService,
  SignalsService,
  ContractService,
  LogsService,
  MarketService,
  MessagesService,
  OrdersService,
  TradesService,
  Configuration
} from '../../module/pb-api';
import {
  SignalInterface,
  ContractInterface,
  LogInterface,
  MarketInterface,
  MessageInterface,
  OrderInterface,
  TradeInterface
} from '../../module/pb-api/model/interfaces.export';
import {
  OrderEntity,
  PowerBotEntity
 } from '../../entity/entity.export';
import { TimerObservable } from 'rxjs/observable/TimerObservable';
import { ConnectionState, AppEnv, RequestState } from '../../entity/app-state.entity';
import { NgForage } from 'ngforage';
import { PbAppStorageConst, PbAppEntityConst } from '../../app.const';
import { Observable, Subscription, Subject, combineLatest } from 'rxjs';

/**
 * DataService -
 * Service providing interface to fetch, access and
 * handle data within application
 */
 @Injectable()
export class PbDataService {
  /**
   * Represents the collected set of application-data
   * and provides access to it within powerbot-application
   */
  public app: PowerBotEntity;
  /** Member-variable to hold instance of
   * polling-timer observable
   */
  protected pollingTimer$: TimerObservable<any>;
  /**
   *
   */
  protected appSubscrption: Subscription;
  /**
   * Constructor
   */
  constructor(
    /**
     * Provides client-application log-service
     */
    protected $log: FgLogService,
    /**
     * Provides access to powerbot auth-service
     * ( used to generate api keys )
     */
    public $auth: AuthenticationService,
    /**
     * Provides access to powerbot contracts-objects service
     */
    public $contracts: ContractService,
    /**
     * Provides access to powerbot logs-objects service
     */
    public $logs: LogsService,
    /**
     * Provides access to powerbot market-objects service
     */
    public $market: MarketService,
    /**
     * Provides access to powerbot message-objects service
     */
    public $messages: MessagesService,
    /**
     * Provides access to powerbot order-object service
     */
    public $orders: OrdersService,
    /**
     * Provides access to powerbot signal-objects service
     */
    public $signals: SignalsService,
    /**
     * Provides access to powerbot trade-object service
     */
    public $trades: TradesService,
    /**
     * Provides access to powerbot trade-object service
     */
    public $storage: NgForage,
  ) {
    const errorFn = error => {
      this.$log.error('HANDLE ALL THE ERRORS');
      // If request fails in production-environment, try connecting
      // to backup-environment
      if ( this.app.state.appEnv === AppEnv.Live_Prod ) {
        this.app.state.connectionState = ConnectionState.Warning;
        this.app.state.appEnv = AppEnv.Live_Backup;
        this.setAppEnvConfiguration(this.app.state.appEnv);
        // TODO: Implement methode that tries to reconnect to production-environment
        // after a random time between 5 and 10 minutes
      } else {
        this.app.state.connectionState = ConnectionState.Error;
        this.app.state.marketState = ConnectionState.Error;
      }
      this.app.state.requestState = RequestState.Inactive;
      this.$log.error(error.message);
    };
    // Decorate services to call errorFn on error
    this.$auth = this.wrapApiServiceMethodes( $auth, errorFn );
    this.$contracts = this.wrapApiServiceMethodes( $contracts, errorFn );
    this.$market = this.wrapApiServiceMethodes( $market, errorFn );
    this.$messages = this.wrapApiServiceMethodes( $messages, errorFn );
    this.$orders = this.wrapApiServiceMethodes( $orders, errorFn );
    this.$signals = this.wrapApiServiceMethodes( $signals, errorFn );
    this.$trades = this.wrapApiServiceMethodes( $trades, errorFn );
    // Override api-service configuration with empty config
    // to prevent services to use hard-coded test-environment
    // before ConnectionType is explicitly set
    this.setAppEnvConfiguration( AppEnv.Offline );
  }
  /**
   * Set the api environent type to use
   * @param type  ConnectionType Enum
   */
  protected setAppEnvConfiguration( type: AppEnv ) {
    let configuration: Configuration = new Configuration();
    try {
      switch ( type ) {
        case AppEnv.Live_Prod:
          this.app.state.appEnv = AppEnv.Live_Prod;
          configuration.apiKeys = { 'api_key': this.app.config.prodConfig.apiKey };
          configuration.basePath = this.app.config.prodConfig.serverUrl;
          break;
        case AppEnv.Live_Backup:
          this.app.state.appEnv = AppEnv.Live_Backup;
          configuration.apiKeys = { 'api_key': this.app.config.prodConfig.apiKey };
          configuration.basePath = this.app.config.prodConfig.backupUrl;
          break;
        case AppEnv.Live_Test:
          this.app.state.appEnv = AppEnv.Live_Test;
          configuration.apiKeys = { 'api_key': this.app.config.testConfig.apiKey };
          configuration.basePath = this.app.config.testConfig.serverUrl;
          break;
        default:
          this.app.state.appEnv = AppEnv.Offline;
          configuration.apiKeys = { 'api_key': PbAppEntityConst.NOT_SET };
          configuration.basePath = PbAppEntityConst.NOT_SET;
        break;
      }
      // Set api-services configuration
      this.$auth.configuration = configuration;
      this.$contracts.configuration = configuration;
      this.$logs.configuration = configuration;
      this.$market.configuration = configuration;
      this.$messages.configuration = configuration;
      this.$orders.configuration = configuration;
      this.$signals.configuration = configuration;
      this.$trades.configuration = configuration;
    } catch ( error ) {
      this.$log.warn( 'Api-server environment not available!' );
    }
  }
  public isConnecting(): boolean {
    return false;
  }
  /**
   * Return observable polling timer-object
   * @param delay The delay before timer dispatches first event
   * @param tick The intervall in which the timer dispatches it's event
   */
  protected getPollingTimer( delay: number = 0, tick: number = 5000 ): TimerObservable<any> {
    if (!this.pollingTimer$) {
      this.pollingTimer$ = TimerObservable.create(delay, tick);
    }
    return  this.pollingTimer$;
  }
  /**
   * TODO: Wrap a api-service methode into a try-catch block
   * to switch to backup-server if request fails. This can be
   * used on any methode, the wrapper-function keeps arguments and
   * return types intact.
   * ----------------------
   * Refer to https://stackoverflow.com/questions/38598280/is-it-possible-to-wrap-a-function-and-retain-its-types
   * @param fn The function to wrap
   */
   protected wrapMethode<T extends Function>(fn: T, errorFn: (error: Error) => void): T {
    return <any>function (args) {
      try {
        const returnType = fn(args);
        if ( returnType instanceof Observable ) {
          // Return type is Observable
          const subscribtion: Subscription = returnType.subscribe(
            value => {
              // do nothing
            },
            err => {
              subscribtion.unsubscribe();
              errorFn(err);
            });
          } else if ( returnType instanceof Promise ) {
            // Returntype is Promise
            returnType.catch( err => {
              errorFn(err);
          });
        }
        return returnType;
      } catch ( error  ) {
        errorFn(error);
      }
    };
  }
  /**
   * Wrap the methodes of an api-service, to catch errors
   * @param $service The api service for which the methods should be wrapped
   * ----------------------
   * Refer to https://stackoverflow.com/questions/30881632/es6-iterate-over-class-methods
   * and https://stackoverflow.com/questions/41452179/check-if-object-is-an-rxjs5-observable
   * and https://stackoverflow.com/questions/15094127/how-do-you-iterate-over-all-methods-in-a-javascript-pseudoclass-regardless-of-w
   */
   protected wrapApiServiceMethodes($service: any, errorFn: (error: Error) => void ): any {
    Object.getOwnPropertyNames( Object.getPrototypeOf( $service ) ).forEach( fnKey => {
      if ( fnKey !== 'constructor' ) {
        $service[fnKey] = this.wrapMethode($service[fnKey].bind($service), errorFn);
      }
    } );
    return $service;
  }
  /**
   * Connect application-data service
   */
  public connect( env: AppEnv ): void {
    this.setAppEnvConfiguration( env );
    this.appSubscrption = this.getPollingTimer().subscribe(() => {
      this.fetchApplicationData();
    });

  }
  /**
   * Disconnect application-data service
   */
  public disconnect(): void {
    this.appSubscrption.unsubscribe();
    this.app.state.appEnv = AppEnv.Offline;
    this.app.state.connectionState = ConnectionState.Offline;
    this.app.state.requestState = RequestState.Inactive;
  }
  /**
   * Fetch full set of application-data from backend
   */
  protected async fetchApplicationData(): Promise<PowerBotEntity> {
    // If connection-state wasn't initialized set to loading, oterwise keep previous state
    if (this.app.state.connectionState === ConnectionState.Offline ) {
      this.app.state.connectionState = ConnectionState.Connecting;
    }
    this.app.state.requestState = RequestState.Active;
    const subject: Subject<PowerBotEntity> = new Subject();
    const data$ = combineLatest([
      this.$market.getStatus(),
      this.$orders.getOrderBooks(),
      this.$logs.getLogs(),
      this.$messages.getMessages(),
      this.$orders.getOwnOrders(),
      this.$signals.getSignals(),
      this.$trades.getTrades(),
    ]);
    data$.subscribe(
      ([
        marketState,
        orderBook,
        logs,
        messages,
        orders,
        signals,
        trades
      ]) => {
          if ( this.app.state.connectionState !== ConnectionState.Offline ) {
          // Set values and loading state
          this.app.market = marketState;
          this.app.orderbook = orderBook;
          this.app.contracts = orderBook.contracts;
          this.app.products = orderBook.products;
          this.app.logs = logs;
          this.app.messages = messages;
          this.app.orders = orders;
          this.app.signals = signals;
          this.app.trades = trades;
          this.setMarketState(marketState.status);
          this.app.state.connectionState = ConnectionState.Online;
          this.app.state.requestState = RequestState.Inactive;
          subject.next(this.app);
        }
      }
    );
    return subject.toPromise<PowerBotEntity>();
  }
  /**
   * Initialize Powerbot from browser-storage
   */
  public async recoverFromStorage(): Promise<PowerBotEntity> {
    this.app = new PowerBotEntity();
    let config;
    config = await this.$storage.getItem( PbAppStorageConst.CONFIG_PRODUCTION );
    if ( config ) {
      Object.assign( this.app.config.prodConfig, config );
    }
    config = await this.$storage.getItem( PbAppStorageConst.CONFIG_TEST );
    if ( config ) {
      Object.assign( this.app.config.testConfig, config );
    }
    config = await this.$storage.getItem( PbAppStorageConst.CONFIG_LOGGING );
    if ( config ) {
      Object.assign( this.app.config.logConfig, config );
    }
    config = await this.$storage.getItem( PbAppStorageConst.CONFIG_MARKET );
    if ( config ) {
      Object.assign( this.app.config.marketConfig, config );
    }
    return this.app;
  }
  /**
   * TODO: Add market-connection settings
   * Validate PowerBot Market-Connection state based on received
   * market-object and current market-connection settings
   * @param state The BarStateEnum to help validate
   */
  protected setMarketState( marketState: any ): void {
    switch ( marketState ) {
      case 'OK':
        this.app.state.marketState = ConnectionState.Online;
        break;
      case 'WARNING':
        this.app.state.marketState = ConnectionState.Warning;
        break;
      case 'FAILURE':
        this.app.state.marketState = ConnectionState.Error;
        break;
      default:
        this.app.state.marketState = ConnectionState.Offline;
        break;
    }
  }
  /**
  * Returns if there is a valid configuration for
  * test-environment available
  */
  getProductionValid(): boolean {
     let disabled: boolean = true;
     if (
       this.app.config.prodConfig.apiKey
       && this.app.config.prodConfig.serverUrl
       && this.app.config.prodConfig.backupUrl
     ) {
       disabled = false;
     }
     return disabled;
   }
   /**
    * Returns if there is a valid configuration for
    * test-environment available
    */
   getTestValid(): boolean {
     let disabled: boolean = true;
     if (
       this.app.config.testConfig.apiKey
       && this.app.config.testConfig.serverUrl
     ) {
       disabled = false;
     }
     return disabled;
   }
   /**
    * Returns if disconnecting should be allowed
    */
   getDisconnectDisabled(): boolean {
     let disabled: boolean = true;
     if (
       this.app.state.connectionState !== ConnectionState.Offline
       && this.app.state.appEnv !== AppEnv.Offline
     ) {
       disabled = false;
     }
     return disabled;
   }
}
