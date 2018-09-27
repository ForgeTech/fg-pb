import { ConfigPowerbot } from './config-powerbot.entity';
import { AppStateEntity } from './app-state.entity';
import {
  ContractInterface,
  LogInterface,
  MarketInterface,
  MessageInterface,
  OrderInterface,
  SignalInterface,
  TradeInterface,
} from '../module/pb-api/model/interfaces.export';
import { MarketEntity } from './entity.export';

/**
 * PowerBor -
 * Entity to
 */
export class PowerBotEntity {
  /**
   * Constructor
   */
  constructor(
    /**
     * BarStatusEntity contains the information needed to reflect
     * the applications connection/loading state via the bar-state
     * component
     */
    public state: AppStateEntity = new AppStateEntity(),
    /**
     * Holds PowerBot configuration data
     */
    public config: ConfigPowerbot = new ConfigPowerbot(),
    /**
     * Holds current powerbot contract data
     */
    public contracts: ContractInterface[] = [],
    /**
     * Holds historical contract-data for currently selected contract
     */
    public contractHistory: ContractInterface[] = [],
    /**
     * Holds current powerbot contract data
     */
    public logs: LogInterface[] = [],
    /**
     * Holds current powerbot contract data
     */
    public messages: MessageInterface[] = [],
    /**
     * Holds current powerbot orderbook data
     */
    public orderbook: any = {},
    /**
     * Holds current powerbot products data
     */
    public products: any[] = [],
    /**
     * Holds current powerbot asks data
     */
    public asks: any[] = [],
    /**
     * Holds current powerbot asks data
     */
    public bids: any[] = [],
    /**
     * Holds current powerbot contract data
     */
    public orders: any[] = [],
    /**
     * Holds current powerbot contract data
     */
    public signals: any[] = [],
    /**
     * Holds current powerbot contract data
     */
    public trades: TradeInterface[] = [],
    /**
     * Holds current powerbot contract data
     */
    public market?: MarketInterface,
    /**
     * Contains the currently selected contract-entity
     */
    public selectedContract?: ContractInterface,
    /**
    * Contains identifier of the currently selected market
    */
    public selectedMarket?: string,
  ) {}
}
