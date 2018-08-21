import { Trade as TradeInterface } from '../module/pb-api';
/**
 * Trade -
 * Entity-Class used to hold
 * order data
 */
export class Trade implements TradeInterface {
  /** Constructor */
  constructor(
    /**
     * Unique trade_id
     */
    public tradeId?: number,
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
    public deliveryArea?: string,
    /**
     * The timestamp when powerbot received the trade (UTC time zone)
     */
    public apiTimestamp?: Date,
    /**
     * The timestamp when the trade was executed (UTC time zone)
     */
    public execTime?: Date,
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
    public buyOrderId?: number,
    /**
     * The delivery area of the buy-side of the trade.
     */
    public buyDeliveryArea?: string,
    /**
     * the client order id of the buy order
     */
    public buyClOrderId?: string,
    /**
     * the custom text of the buy order
     */
    public buyTxt?: string,
    /**
     * the buyer's epex user code
     */
    public buyUserCode?: string,
    /**
     * the buyer's epex member id
     */
    public buyMemberId?: string,
    /**
     * Indicates whether the executed order was a trade aggressor or trade originator.
     * Y - Trade aggressor
     * N - Trade originator
     * U - Unknown, for executed orders of remote products and data before migration
     */
    public buyAggressorIndicator?: TradeInterface.BuyAggressorIndicatorEnum,
    /**
    The seller's order id
     */
    public sellOrderId?: number,
    /**
     * delivery area of the sell order
     */
    public sellDeliveryArea?: string,
    /**
     * The sell order's client id
     */
    public sellClOrderId?: string,
    /**
     * The sell order's custom text
     */
    public sellTxt?: string,
    /**
     * The seller's epex user code
     */
    public sellUserCode?: string,
    /**
     * The seller's epex member id
     */
    public sellMemberId?: string,
    /**
     * Indicates whether the executed order was a trade aggressor or trade originator.
     * Y - Trade aggressor
     * N - Trade originator
     * U - Unknown, for executed orders of remote products and data before migration
     */
    public sellAggressorIndicator?: TradeInterface.SellAggressorIndicatorEnum,
    /**
     * The contract_id against which the trade was executed
     */
    public contractId?: number,
    /**
     * The contract's name against which the trade was executed.
     */
    public contractName?: string,
    /**
     * Time when the delivery of this trade starts (UTC timezone)
     */
    public deliveryStart?: Date,
    /**
     * Time when the delivery of this trade ends (UTC timezone)
     */
    public deliveryEnd?: Date,
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
    public tradeDetails?: any,
    /**
     * Details of the trade provided by EPEX, Please consult the \"DFS180 - M7 - Public Message Interface\" for details.
     */
    public contractDetails?: any,
  ) {}
}
