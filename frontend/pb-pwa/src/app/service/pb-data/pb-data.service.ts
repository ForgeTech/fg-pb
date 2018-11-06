import { Injectable } from '@angular/core';
import { NGXLogger as FgLogService } from 'ngx-logger';
import { environment } from './../../../environments/environment';
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
import { PbAppEntityConst } from '../../app.const';
import { Observable, Subscription, Subject, combineLatest } from 'rxjs';
import { FgGraphqlService } from 'src/app/module/fg-graphql/service/fg-graphql/fg-graphql.service';
import gql from 'graphql-tag';
/**
 * DataService -
 * Service providing interface to fetch, access and
 * handle data within application
 */
 @Injectable()
export class PbDataService {
  protected _config: Configuration;
  public set configuration( config: Configuration) {
    this._config = config;
    this.setServiceConfiguration( this._config );
  }
  // public get configuration( ): Configuration {
  //   return this._config;
  // }

  /**
   * Represents the collected set of application-data
   * and provides access to it within powerbot-application
   */
  public app: PowerBotEntity = new PowerBotEntity();
  /**
   * Provide contents of environment-file
   * for usage in the application
   */
  public $env = environment;
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
     * Provides access to powerbot storage-object service
     */
    public $storage: NgForage,
    /**
     * Provides access to powerbot storage-object service
     */
    public $apollo: FgGraphqlService,
  ) {
    this.$apollo.createClient(this.$env.powerbot);
    let query = this.$apollo.watchQuery(`
      query prodConfig($id: Int!) {
        ProdConfig(id: $id) @client {
          apiKey,
          backupUrl,
          serverUrl,
          cache,
          valid
        }
      }`,
      { id: 0 }
    );
    query.subscribe(result => {
      console.log('RESULT');
      console.log(result);
    });
    // this.$apollo.mutate(`
    //     mutation toggleDarkTheme {
    //       toggleDarkTheme @client
    //     }
    //   `);
    const errorFn = error => {
      // Only perform error-handling if connection-state isn't Offline
      // so validation can use wrapped services
      if ( this.app.state.connectionState !== ConnectionState.Offline
          && this.app.state.connectionState !== ConnectionState.Warning
          && this.app.state.appEnv === AppEnv.Live_Prod
        ) {
          this.$log.warn( 'Switch to Backup-Server' );
          // Disconnect from Production-Server
          this.disconnect();
          // If request fails in production-environment, try connecting
          // to backup-environment
          this.app.state.connectionState = ConnectionState.Warning;
          this.app.state.appEnv = AppEnv.Live_Backup;
          this.setAppEnv(this.app.state.appEnv);
          // Try to connect to backup-server
          this.connect( AppEnv.Live_Backup );
          // TODO: Implement methode that tries to reconnect to production-environment
          // after a random time between 5 and 10 minutes
          const delay = Math.floor(Math.random() * 600000);
          console.log( delay );
          setTimeout(() => {
            this.disconnect();
            this.app.state.appEnv = AppEnv.Live_Prod;
            this.connect( AppEnv.Live_Prod );
          }, delay );
      } else {
        this.app.state.requestState = RequestState.Inactive;
        this.app.state.connectionState = ConnectionState.Error;
        // this.$log.error('ERRROR');
        // console.log(error);
        // Rethrow erros for connection-state offline
        // throw error;
      }
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
    this.setAppEnv( AppEnv.Offline );
  }
  /**
   * Apply passed service configuration to api-services
   */
  protected setServiceConfiguration( config: Configuration ) {
    this.$auth.configuration = config;
    this.$contracts.configuration = config;
    this.$logs.configuration = config;
    this.$market.configuration = config;
    this.$messages.configuration = config;
    this.$orders.configuration = config;
    this.$signals.configuration = config;
    this.$trades.configuration = config;
  }
  /**
   * Set the api environent type to use
   * @param type  ConnectionType Enum
   */
  protected setAppEnv( type: AppEnv ) {
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
      this.$log.warn( 'SET CONFIGURATION' );
      console.log(this.app);
      console.log(configuration);
      // Set api-services configuration
      this.configuration = configuration;
    } catch ( error ) {
      this.$log.warn( 'Api-server environment not available!' );
    }
  }
  protected allow: boolean = false;
  public isConnecting(): boolean {
    return this.allow;
  }
  /**
   * Return observable polling timer-object
   * @param delay The delay before timer dispatches first event
   * @param tick The intervall in which the timer dispatches it's event
   */
  protected getPollingTimer( delay: number = 0, tick: number = 50000 ): TimerObservable<any> {
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
    this.allow = true;
    this.setAppEnv( env );
    this.appSubscrption = this.getPollingTimer().subscribe(() => {
      this.fetchApplicationData();
    });
  }
  /**
   * Disconnect application-data service
   */
  public disconnect(): void {
    this.allow = false;
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
      this.$orders.getOrderBooks( '', false, undefined, undefined, undefined, undefined, undefined, 3 ),
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
          this.app.config.deliverArea = marketState.delivery_area_id;
          this.app.orderbook = orderBook;
          this.app.contracts = orderBook.contracts.sort( ( a: ContractInterface, b: ContractInterface ) => {
            return
          });
          this.app.products = orderBook.products;
          this.app.logs = logs;
          this.app.messages = messages;
          this.app.orders = orders;
          this.app.signals = this.prepareSignalResponse( signals );
          this.app.trades = trades;
          this.app.state.connectionState = ConnectionState.Online;
          this.app.state.requestState = RequestState.Inactive;
          subject.next(this.app);
          console.log('this.app');
          console.log(this.app);
        }
      }
    );
    return subject.toPromise<PowerBotEntity>();
  }
   public prepareSignalResponse( signals: SignalInterface[] ): any[] {
    let keys: string[] = [];
    let signalsObjects: { label: string, values: any[] }[] = [];
    signals.forEach( signal => {
      let index = keys.indexOf( signal.source );
      // If key isn't found in key array, prepare
      // signalObject to hold signal-data
      if ( index === -1) {
        keys.push( signal.source );
        let signalObject = {
          label: signal.source,
          values: []
        }
        // Push signal data to signalObject
        signalObject.values.push( signal );
        // Push signalObjects to signalObjects-array
        signalsObjects.push( signalObject );
      } else {
        // If key was found just push signal to according signalsObject
        signalsObjects[index].values.push( signal );
      }
    });
    return signalsObjects;
  }
}
