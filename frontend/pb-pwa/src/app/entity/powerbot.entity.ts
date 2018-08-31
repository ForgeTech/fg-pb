import { ConfigPowerbot } from './config-powerbot.entity';
import { BarStateEntity } from './bar-state.entity';
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
    public state: BarStateEntity = new BarStateEntity(),
    /**
     * Flag indicating dark-theme mode
     */
    public darkTheme: boolean = false,
    /**
     * Holds PowerBot configuration data
     */
    public config?: ConfigPowerbot,
    /**
     * Holds current powerbot contract data
     */
    public market?: MarketInterface,
    /**
     * Holds current powerbot contract data
     */
    public contracts: ContractInterface[] = [],
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
  ) {}
}
