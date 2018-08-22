import { ConfigPowerbot } from './config-powerbot';
import {
  ContractInterface,
  LogInterface,
  MarketInterface,
  MessageInterface,
  OrderInterface,
  SignalInterface,
  TradeInterface,
} from '../module/pb-api/model/interfaces.export';

/**
 * PowerBor -
 * Entity to
 */
export class PowerBot {
  /**
   * Constructor
   */
  constructor(
    /**
     * Holds PowerBot configuration data
     */
    public config?: ConfigPowerbot,
    /**
     * Holds current powerbot contract data
     */
    public contracts?: ContractInterface[],
    /**
     * Holds current powerbot contract data
     */
    public logs?: LogInterface[],
    /**
     * Holds current powerbot contract data
     */
    public markets?: MarketInterface[],
    /**
     * Holds current powerbot contract data
     */
    public messages?: MessageInterface[],
    /**
     * Holds current powerbot contract data
     */
    public orders?: OrderInterface[],
    /**
     * Holds current powerbot contract data
     */
    public signals?: SignalInterface[],
    /**
     * Holds current powerbot contract data
     */
    public trades?: TradeInterface[],
  ) {}
}
