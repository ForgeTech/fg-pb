
import { TradeInterface } from '../module/pb-api/model/interfaces.export';
/**
 * Trade -
 * Entity-Class used to hold
 * order data
 */
export class TradeEntity implements TradeInterface {
  /** Constructor */
  constructor(
    /**
     * Unique trade_id
     */
    public trade_id?: number,
    /**
     * CNCL: Trade was cancelled by market operations.
     * RREJ: Requested Recall was rejected by market operations.
     * RGRA: Requested Recall was granted by market operations.
     * RREQ: Recall of this trade was requested.
     * ACTI: Trade is active (this is the default value).
     * CREQ: cancel was requested from local market operations.
     * CREJ: cancel was rejected by global market operations.
     * RSFA: Request sent for approval to SOB (XBID).
     */
    public state?: TradeInterface.StateEnum,
    /**
     * If you sold energy with this trade, delivery_area will contain the sell_delivery_area,
     *  otherwise the buy_delivery_area
     */
    public delivery_area?: string,
    /**
     * The timestamp when powerbot received the trade (UTC time zone)
     */
    public api_timestamp?: Date,
    /**
     * The timestamp when the trade was executed (UTC time zone)
     */
    public exec_time?: Date,
    /**
     * true if you bought energy
     */
    public buy?: boolean,
    /**
     * true if you sold energy
     */
    public sell?: boolean,
    /**
     * the order_id of the underlying buy-order
     */
    public buy_order_id?: number,
    /**
     * The delivery area of the buy-side of the trade.
     */
    public buy_delivery_area?: string,
    /**
     * the client order id of the buy order
     */
    public buy_cl_order_id?: string,
    /**
     * the custom text of the buy order
     */
    public buy_txt?: string,
    /**
     * the buyer's epex user code
     */
    public buy_user_code?: string,
    /**
     * the buyer's epex member id
     */
    public buy_member_id?: string,
    /**
     * Indicates whether the executed order was a trade aggressor or trade originator.
     * Y - Trade aggressor
     * N - Trade originator
     * U - Unknown, for executed orders of remote products and data before migration
     */
    public buy_aggressor_indicator?: TradeInterface.BuyAggressorIndicatorEnum,
    /**
    The seller's order id
     */
    public sell_order_id?: number,
    /**
     * delivery area of the sell order
     */
    public sell_delivery_area?: string,
    /**
     * The sell order's client id
     */
    public sell_cl_order_id?: string,
    /**
     * The sell order's custom text
     */
    public sell_txt?: string,
    /**
     * The seller's epex user code
     */
    public sell_user_code?: string,
    /**
     * The seller's epex member id
     */
    public sell_member_id?: string,
    /**
     * Indicates whether the executed order was a trade aggressor or trade originator.
     * Y - Trade aggressor
     * N - Trade originator
     * U - Unknown, for executed orders of remote products and data before migration
     */
    public sell_aggressor_indicator?: TradeInterface.SellAggressorIndicatorEnum,
    /**
     * The contract_id against which the trade was executed
     */
    public contract_id?: number,
    /**
     * The contract's name against which the trade was executed.
     */
    public contract_name?: string,
    /**
     * Time when the delivery of this trade starts (UTC timezone)
     */
    public delivery_start?: Date,
    /**
     * Time when the delivery of this trade ends (UTC timezone)
     */
    public delivery_end?: Date,
    /**
     * Price of the trade
     */
    public price?: number,
    /**
     * Quantity in MW of the trade
     */
    public quantity?: number,
    /**
     * Details of the trade provided by EPEX, Please consult the \"DFS180 - M7 - Public Message Interface\" for details.
     */
    public trade_details?: any,
    /**
     * Details of the trade provided by EPEX, Please consult the \"DFS180 - M7 - Public Message Interface\" for details.
     */
    public contract_details?: any,
  ) {}
}
