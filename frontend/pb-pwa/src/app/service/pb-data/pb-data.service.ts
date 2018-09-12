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
import { BarStateEnum } from '../../entity/bar-state.entity';
import { NgForage, NgForageCache, NgForageConfig, CachedItem, NgForageModule } from 'ngforage';
import { PbAppStorageConst } from '../../app.storage.const';
import { Observable, Subscription } from 'rxjs';

/**
 * Enum for defining the available API environments
 */
export enum ConnectionType {
  'Production',
  'Test'
}
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
  public $powerbot: PowerBotEntity;
  /**
   * Flag indicating the api-environment to use
   */
  protected environement: boolean | ConnectionType = false;
  /**
   * TODO: Should keep track of the number of called api
   * requests used to display loading state for parallel
   * sets of requests
   */
  protected openCalls: number = 0;
  /** Member-variable to hold instance of
   * polling-timer observable
   */
  protected pollingTimer$: TimerObservable<any>;
  /**
   *
   */
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
    this.setServiceConfiguration( new Configuration() );
  }
  /**
   * Set the api environent type to use
   * @param type  ConnectionType Enum
   */
  setApiConfiguration( type: ConnectionType ) {
    let configuration: Configuration = new Configuration();
    try {
      this.environement = type;
      switch ( this.environement ) {
        case ConnectionType.Production:
          configuration.apiKeys = { 'api_key': this.$powerbot.config.prodConfig.apiKey };
          configuration.basePath = this.$powerbot.config.prodConfig.serverUrl;
        break;
        case ConnectionType.Test:
          configuration.apiKeys = { 'api_key': this.$powerbot.config.testConfig.apiKey };
          configuration.basePath = this.$powerbot.config.testConfig.serverUrl;
        break;
        default:
          this.environement = false;
        break;
      }
      // Set api-services configuration
      this.setServiceConfiguration( configuration );
    } catch ( error ) {
      this.$log.warn( 'Api-server environment not available!' );
    }
  }
  /**
   * Set the configutation property of api-services
   * @param config Api Configuration object
   */
  setServiceConfiguration( config: Configuration ) {
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
   * Return observable polling timer-object
   * @param delay The delay before timer dispatches first event
   * @param tick The intervall in which the timer dispatches it's event
   */
  getPollingTimer( delay: number = 0, tick: number = 10000 ): TimerObservable<any> {
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
              errorFn(err);
            },
            () => {
              console.log('UNSUBSCRIBE');
              subscribtion.unsubscribe();
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
        $service[fnKey] = this.wrapMethode($service[fnKey], errorFn);
      }
    } );
    return $service;
  }
  /**
   * Fetch full set of application-data from backend
   */
  async fetchApplicationData(): Promise<PowerBotEntity> {
    // Set app loading-State when starting fetching data
    this.$powerbot.state.appState = BarStateEnum.Loading;
    try {
      // If connection-state wasn't initialized set to loading, oterwise keep previous state
      if (this.$powerbot.state.connectionState === BarStateEnum.Disabled ) {
        this.$powerbot.state.connectionState = BarStateEnum.Loading;
      }
      // Get PowerBot Market-State
      this.$powerbot.market = await this.$market.getStatus().toPromise();
      // Set PowerBot Market-State
      this.setMarketState( this.$powerbot.market );
      // Get Orderbook data
      this.$powerbot.orderbook = await this.$orders.getOrderBooks().toPromise();
      // Set Contracts data
      this.$powerbot.contracts = this.$powerbot.orderbook.contracts;
      // Set Products data
      this.$powerbot.products = this.$powerbot.orderbook.products;
      // console.log(await this.$orders.getOrderBook(this.$powerbot.products[0]).toPromise());
      // this.$orders.getOrderBooks()
      // Get Log data
      this.$powerbot.logs = await this.$logs.getLogs().toPromise();
      // Get Message data
      this.$powerbot.messages = await this.$messages.getMessages().toPromise();
      // Get Order data
      this.$powerbot.orders = await this.$orders.getOwnOrders().toPromise();
      // Get Signals data
      this.$powerbot.signals = await this.$signals.getSignals().toPromise();
      // Get Trades data
      this.$powerbot.trades = await this.$trades.getTrades().toPromise();
      // Set connection-state to online if no error appeared requesting data
      this.$powerbot.state.connectionState = BarStateEnum.Online;
    } catch (error) {
      // Set connection-state to offline error appeared requesting data
      this.$powerbot.state.connectionState = BarStateEnum.Error;
      // If environment is production try fetching data from backup-server
      if ( this.environement === ConnectionType.Production ) {
        let configuration = new Configuration();
        configuration.apiKeys = {'api_key': this.$powerbot.config.prodConfig.apiKey };
        configuration.basePath = this.$powerbot.config.prodConfig.backupUrl;
        this.setServiceConfiguration( configuration );
      }
    }
    // Disable app loading-state when data-fetching is finished
    this.$powerbot.state.appState = BarStateEnum.Disabled;
    // this.$log.warn( this.$powerbot );
    console.log( this.$powerbot );
    return this.$powerbot;
  }
  /**
   * Initialize Powerbot from browser-storage
   */
  async initConfigFromStorage(): Promise<PowerBotEntity> {
    this.$powerbot = new PowerBotEntity();
    let config;
    config = await this.$storage.getItem( PbAppStorageConst.CONFIG_PRODUCTION );
    if ( config ) {
      Object.assign( this.$powerbot.config.prodConfig, config );
    }
    config = await this.$storage.getItem( PbAppStorageConst.CONFIG_TEST );
    if ( config ) {
      Object.assign( this.$powerbot.config.testConfig, config );
    }
    config = await this.$storage.getItem( PbAppStorageConst.CONFIG_LOGGING );
    if ( config ) {
      Object.assign( this.$powerbot.config.logConfig, config );
    }
    config = await this.$storage.getItem( PbAppStorageConst.CONFIG_MARKET );
    if ( config ) {
      Object.assign( this.$powerbot.config.marketConfig, config );
    }
    return this.$powerbot;
  }
  /**
   * TODO: Add market-connection settings
   * Validate PowerBot Market-Connection state based on received
   * market-object and current market-connection settings
   * @param state The BarStateEnum to help validate
   */
  protected setMarketState( market: MarketInterface ): void {
    switch (this.$powerbot.market.status) {
      case 'OK':
        this.$powerbot.state.marketState = BarStateEnum.Online;
        break;
      case 'WARNING':
        this.$powerbot.state.marketState = BarStateEnum.Warning;
        break;
      case 'FAILURE':
        this.$powerbot.state.marketState = BarStateEnum.Error;
        break;
      default:
        this.$powerbot.state.marketState = BarStateEnum.Offline;
        break;
    }
  }
}
