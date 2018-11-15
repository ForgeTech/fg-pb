import { ConfigPowerbot } from './config-powerbot.entity';
import {
  ContractEntityInterface,
  LogEntityInterface,
  MarketEntityInterface,
  MessageEntityInterface,
  OrderEntityInterface,
  SignalEntityInterface,
  TradeEntityInterface,
} from './../interface/interface.export';
import { PowerbotStateEntity } from './entity.export';

/**
 * PowerBot -
 * Entity to collect data-states
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
    public state: PowerbotStateEntity = new PowerbotStateEntity(),
    /**
     * Holds PowerBot configuration data
     */
    public config: ConfigPowerbot = new ConfigPowerbot(),
    /**
     * Holds current powerbot contract data
     */
    public contracts: ContractEntityInterface[] = [],
    /**
     * Holds historical contract-data for currently selected contract
     */
    public contractHistory: ContractEntityInterface[] = [],
    /**
     * Holds current powerbot contract data
     */
    public logs: LogEntityInterface[] = [],
    /**
     * Holds current powerbot contract data
     */
    public messages: MessageEntityInterface[] = [],
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
    public trades: TradeEntityInterface[] = [],
    /**
     * Holds current powerbot contract data
     */
    public market?: MarketEntityInterface,
  ) {}
}
