import { Injectable } from '@angular/core';
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
/**
 * DataService -
 * Service providing interface to fetch, access and
 * handle data within application
 */
@Injectable({
  providedIn: 'root'
})
export class DataService {
  /**
   * Constructor
   */
  constructor(
    public $auth: AuthenticationService,
    public $signals: SignalsService,
    public $contracts: ContractService,
    public $logs: LogsService,
    public $market: MarketService,
    public $messages: MessagesService,
    public $orders: OrdersService,
    public $trades: TradesService,
  ) { }
}
