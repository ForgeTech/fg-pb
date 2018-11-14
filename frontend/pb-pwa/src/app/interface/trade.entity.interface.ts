export interface TradeEntityInterface {
    /**
     * Unique trade_id
     */
    trade_id?: number;
    /**
     * CNCL: Trade was cancelled by market operations.
     * RREJ: Requested Recall was rejected by market operations
     * RGRA: Requested Recall was granted by market operations.
     * RREQ: Recall of this trade was requested.
     * ACTI: Trade is active (this is the default value).
     * CREQ: cancel was requested from local market operations.
     * CREJ: cancel was rejected by global market operations.
     * RSFA: Request sent for approval to SOB (XBID).
     */
    state?: Trade.StateEnum;
    /**
     * If you sold energy with this trade, delivery_area will contain the sell_delivery_area, otherwise the buy_delivery_area
     */
    delivery_area?: string;
    /**
     * The timestamp when powerbot received the trade (UTC time zone)
     */
    api_timestamp?: Date;
    /**
     * The timestamp when the trade was executed (UTC time zone)
     */
    exec_time?: Date;
    /**
     * true if you bought energy
     */
    buy?: boolean;
    /**
     * true if you sold energy
     */
    sell?: boolean;
    /**
     * the order_id of the underlying buy-order
     */
    buy_order_id?: number;
    /**
     * The delivery area of the buy-side of the trade.
     */
    buy_delivery_area?: string;
    /**
     * the client order id of the buy order
     */
    buy_cl_order_id?: string;
    /**
     * the custom text of the buy order
     */
    buy_txt?: string;
    /**
     * the buyer's epex user code
     */
    buy_user_code?: string;
    /**
     * the buyer's epex member id
     */
    buy_member_id?: string;
    /**
     * Indicates whether the executed order was a trade
     * aggressor or trade originator.
     * Y - Trade aggressor
     * N - Trade originator
     * U - Unknown, for executed orders of remote products
     * and data before migration
     */
    buy_aggressor_indicator?: Trade.BuyAggressorIndicatorEnum;
    /**
     * The seller's order id
     */
    sell_order_id?: number;
    /**
     * delivery area of the sell order
     */
    sell_delivery_area?: string;
    /**
     * The sell order's client id
     */
    sell_cl_order_id?: string;
    /**
     * The sell order's custom text
     */
    sell_txt?: string;
    /**
     * The seller's epex user code
     */
    sell_user_code?: string;
    /**
     * The seller's epex member id
     */
    sell_member_id?: string;
    /**
     * Indicates whether the executed order was a trade aggressor or trade originator.
     * Y - Trade aggressor
     * N - Trade originator
     * U - Unknown, for executed orders of remote products
     * and data before migration
     */
    sell_aggressor_indicator?: Trade.SellAggressorIndicatorEnum;
    /**
     * The contract_id against which the trade was executed
     */
    contract_id?: number;
    /**
     * The contract's name against which the trade was executed.
     */
    contract_name?: string;
    /**
     * Time when the delivery of this trade starts (UTC timezone)
     */
    delivery_start?: Date;
    /**
     * Time when the delivery of this trade ends (UTC timezone)
     */
    delivery_end?: Date;
    /**
     * Price of the trade
     */
    price?: number;
    /**
     * Quantity in MW of the trade
     */
    quantity?: number;
    /**
     * Details of the trade provided by EPEX, Please consult the \"DFS180 - M7 - Public Message Interface\" for details.
     */
    trade_details?: any;
    /**
     * Details of the trade provided by EPEX, Please consult the \"DFS180 - M7 - Public Message Interface\" for details.
     */
    contract_details?: any;
}
export namespace Trade {
    export type StateEnum = 'CNCL' | 'RREJ' | 'RGRA' | 'RREQ' | 'ACTI' | 'CREQ' | 'CREJ' | 'RSFA';
    export const StateEnum = {
        CNCL: 'CNCL' as StateEnum,
        RREJ: 'RREJ' as StateEnum,
        RGRA: 'RGRA' as StateEnum,
        RREQ: 'RREQ' as StateEnum,
        ACTI: 'ACTI' as StateEnum,
        CREQ: 'CREQ' as StateEnum,
        CREJ: 'CREJ' as StateEnum,
        RSFA: 'RSFA' as StateEnum
    };
    export type BuyAggressorIndicatorEnum = 'Y' | 'N' | 'U';
    export const BuyAggressorIndicatorEnum = {
        Y: 'Y' as BuyAggressorIndicatorEnum,
        N: 'N' as BuyAggressorIndicatorEnum,
        U: 'U' as BuyAggressorIndicatorEnum
    };
    export type SellAggressorIndicatorEnum = 'Y' | 'N' | 'U';
    export const SellAggressorIndicatorEnum = {
        Y: 'Y' as SellAggressorIndicatorEnum,
        N: 'N' as SellAggressorIndicatorEnum,
        U: 'U' as SellAggressorIndicatorEnum
    };
}
