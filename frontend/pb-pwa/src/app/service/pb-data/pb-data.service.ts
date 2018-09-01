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
  TradesService
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
import { NgForage, NgForageCache, NgForageConfig, CachedItem } from 'ngforage';

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
  public $powerbot: PowerBotEntity = new PowerBotEntity();
  /**
   * TODO: Should keep track of the number of called api
   * requests used to display loading state for parallel
   * sets of requests
   */
  public openCalls: number = 0;
  /** Member-variable to hold instance of
   * polling-timer observable
   */
  protected $pollingTimer: TimerObservable<any>;
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
    protected $auth: AuthenticationService,
    /**
     * Provides access to powerbot contracts-objects service
     */
    protected $contracts: ContractService,
    /**
     * Provides access to powerbot logs-objects service
     */
    protected $logs: LogsService,
    /**
     * Provides access to powerbot market-objects service
     */
    protected $market: MarketService,
    /**
     * Provides access to powerbot message-objects service
     */
    protected $messages: MessagesService,
    /**
     * Provides access to powerbot order-object service
     */
    protected $orders: OrdersService,
    /**
     * Provides access to powerbot signal-objects service
     */
    protected $signals: SignalsService,
    /**
     * Provides access to powerbot trade-object service
     */
    protected $trades: TradesService,
    /**
     * Provides access to powerbot trade-object service
     */
    protected $storage: NgForage,
  ) {
    this.$storage.setItem( 'mauzi', {
      value: 'Liebstest flausch'
    });
  }
  /**
   * Return observable polling timer-object
   * @param delay The delay before timer dispatches first event
   * @param tick The intervall in which the timer dispatches it's event
   */
  getPollingTimer( delay: number = 0, tick: number = 1000 ): TimerObservable<any> {
    if (!this.$pollingTimer) {
      this.$pollingTimer = TimerObservable.create(delay, tick);
    }
    return  this.$pollingTimer;
  }
  /**
   * TODO: Wrap a api-request function to automatically keep track
   * of parallel requests loading state
   * @param fn
   */
  async fetch<T extends Function>(fn: T): Promise<T> {
    return <any>function (...args) {
      this.openCalls++;
      console.log(this.openCalls);
      return fn(...args);
    };
  }
  /**
   * Fetch full set of application-data from backend
   */
  async fetchApplicationData(): Promise<PowerBotEntity> { // Promise<PowerBot> {
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
      console.log(await this.$orders.getOrderBook(this.$powerbot.products[0]).toPromise());
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
    }
    // Disable app loading-state when data-fetching is finished
    this.$powerbot.state.appState = BarStateEnum.Disabled;
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
