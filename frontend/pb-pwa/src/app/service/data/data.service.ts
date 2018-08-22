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
  Order,
  Market,
  PowerBot
 } from '../../entity/entity.export';
import { Subscription } from 'rxjs';
import { TimerObservable } from 'rxjs/observable/TimerObservable';

/**
 * DataService -
 * Service providing interface to fetch, access and
 * handle data within application
 */
 @Injectable({
  providedIn: 'root'
})
export class DataService {
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

  getPollingTimer(delay: number, tick: number ): TimerObservable<any> {
    if(!this.$pollingTimer) {
      this.$pollingTimer = TimerObservable.create(delay, tick);
    }
    return  this.$pollingTimer;
  }

  async fetchApplicationData(): Promise<PowerBot> { // Promise<PowerBot> {
    let powerbot: PowerBot = new PowerBot();
    try {
      // powerbot.contracts = await this.fetchContracts();
      powerbot.logs = await this.fetchLogs();
      powerbot.markets = [ await this.fetchMarkets()];
      powerbot.messages = await this.fetchMessages();
      // powerbot.orders = await this.fetchOrders();
      powerbot.signals = await this.fetchSignals();
      powerbot.trades = await this.fetchTrades();
      } catch (error) {
        console.log('ERROR FETCHING APP DATA');
        console.log(error);
      }
    return powerbot;
  }
  async fetchContracts(): Promise<any> { // Promise<ContractInterface[]> {
    try {
      return await this.$contracts.findContracts().toPromise();
    } catch (error) {
      console.log('CONTRACTS ERROR');
      console.log(error);
    }
    // return;
  }
  async fetchLogs(): Promise<any> { //  Promise<LogsInterface[]> {
    try {
      return await this.$logs.getLogs().toPromise();
    } catch (error) {
      console.log('LOGS ERROR');
      console.log(error);
    }
    return;
  }
  async fetchMarkets(): Promise<any> { //  Promise<any> { // Promise<MarketInterface> {
    try {
      return await this.$market.getStatus().toPromise();
    } catch (error) {
      console.log('MARKET ERROR');
      console.log(error);
    }
    // return;
  }
  async fetchMessages(): Promise<any> { //  Promise<MessageInterface[]> {
    try {
      return await this.$messages.getMessages().toPromise();
    } catch (error) {
      console.log('MESSAGES ERROR');
      console.log(error);
    }
  }
  async fetchOrders(): Promise<any> { //  Promise<OrderInterface[]> {
    try {
      const test_order: Order = new Order(40, 344, 'sdfsdf');
      test_order.quantity = 1;
      return await this.$orders.addOrder(test_order).toPromise();
    } catch (error) {
      console.log('ORDERS ERROR');
      console.log(error);
    }
  }
  async fetchTrades(): Promise<any> { //  Promise<TradeInterface[]> {
    try {
      return await this.$trades.getTrades().toPromise();
    } catch (error) {
      console.log('TRADES ERROR');
      console.log(error);
    }
  }
  async fetchSignals(): Promise<any> { //  Promise<SignalInterface[]> {
    try {
      return await this.$signals.getSignals().toPromise();
    } catch (error) {
      console.log('SIGNALS ERROR');
      console.log(error);
    }
  }

}
