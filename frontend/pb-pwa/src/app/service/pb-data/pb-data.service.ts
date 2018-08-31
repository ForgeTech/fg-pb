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

/**
 * DataService -
 * Service providing interface to fetch, access and
 * handle data within application
 */
 @Injectable()
export class PbDataService {
  public $powerbot: PowerBotEntity = new PowerBotEntity();
  public $pollingTimer: TimerObservable<any>;
  /**
   * Constructor
   */
  constructor(
    protected $log: FgLogService,
    protected $auth: AuthenticationService,
    protected $contracts: ContractService,
    protected $logs: LogsService,
    protected $market: MarketService,
    protected $messages: MessagesService,
    protected $orders: OrdersService,
    protected $signals: SignalsService,
    protected $trades: TradesService,
  ) {}

  getPollingTimer( delay: number, tick: number ): TimerObservable<any> {
    if (!this.$pollingTimer) {
      this.$pollingTimer = TimerObservable.create(delay, tick);
    }
    return  this.$pollingTimer;
  }

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
