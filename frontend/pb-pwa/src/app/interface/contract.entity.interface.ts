
export interface ContractEntityInterface {
    /**
     * the contract's product
     */
    product?: string;
    /**
     * The contract's unique id
     */
    contract_id?: number;
    /**
     * State of the contract
     */
    state?: Contract.StateEnum;
    /**
     * The name of the contract
     */
    name?: string;
    /**
     * Delivery unit of the respective product. In case of
     * product with type User-Defined Delivery Period this
     * attribute is stored only with contract.
     */
    del_units?: number;
    /**
     * A running number starting at 0; Every time the contract changes (i.e. a trade is made), this number increments.
     */
    revision_no?: number;
    /**
     * The delivery start time (UTC) of the contract
     */
    delivery_start?: Date;
    /**
     * The delivery end time (UTC) of the contract
     */
    delivery_end?: Date;
    /**
     * The best bid's price in the orderbook's currency (i.e. EUR)
     */
    best_bid_price?: number;
    /**
     * The best bid's quantity in the orderbook's quantity unit (i.e. MW)
     */
    best_bid_quantity?: number;
    /**
     * The best asks's price in the orderbook's currency (i.e. EUR)
     */
    best_ask_price?: number;
    /**
     * The best asks's quantity in the orderbook's quantity unit (i.e. MW)
     */
    best_ask_quantity?: number;
    /**
     * The price of the last trade (in the orderbook's currency)
     */
    last_price?: number;
    /**
     * The quantity of the last trade (in the orderbook's quantity unit)
     */
    last_quantity?: number;
    /**
     * The total volume of all trades (in the orderbook's quantity unit)
     */
    total_quantity?: number;
    auction_price?: number;
    /**
     * Highest traded price since the start of the trading period.
     */
    high?: number;
    /**
     * Lowest traded price since the start of the trading period
     */
    low?: number;
    /**
     * All contract details (as delivered from the backend system)
     */
    contract_details?: any;
    /**
     * All orderbook details (as delivered from the backend system)
     */
    orderbook_details?: any;
    /**
     * Your relative position in the contract
     */
    relative_position?: number;
    /**
     * Your absolute position in the contract
     */
    absolute_position?: number;
    last_trade_time?: Date;
    /**
     * The signals applicable for the contract
     */
    signals?: any;
}
export namespace Contract {
    export type StateEnum = 'ACTI' | 'IACT';
    export const StateEnum = {
        ACTI: 'ACTI' as StateEnum,
        IACT: 'IACT' as StateEnum
    };
}
