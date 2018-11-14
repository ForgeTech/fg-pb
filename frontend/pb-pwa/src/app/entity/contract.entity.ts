import { ContractEntityInterface } from '../interface/interface.export';

export class ContractEntity implements ContractEntityInterface {
  constructor(
    /**
         * the contract's product
         */
    public product?: string,
    /**
     * The contract's unique id
     */
    public contract_id?: number,
    /**
     * State of the contract
     */
    public state?: ContractEntityInterface.StateEnum,
    /**
     * The name of the contract
     */
    public name?: string,
    /**
     * A running number starting at 0; Every time the contract changes (i.e. a trade is made), this number increments.
     */
    public revision_no?: number,
    /**
     * The delivery start time (UTC) of the contract
     */
    public delivery_start?: Date,
    /**
     * The delivery end time (UTC) of the contract
     */
    public delivery_end?: Date,
    /**
     * The best bid's price in the orderbook's currency (i.e. EUR)
     */
    public best_bid_price?: number,
    /**
     * The best bid's quantity in the orderbook's quantity unit (i.e. MW)
     */
    public best_bid_quantity?: number,
    /**
     * The best asks's price in the orderbook's currency (i.e. EUR)
     */
    public best_ask_price?: number,
    /**
     * The best asks's quantity in the orderbook's quantity unit (i.e. MW)
     */
    public best_ask_quantity?: number,
    /**
     * The price of the last trade (in the orderbook's currency)
     */
    public last_price?: number,
    /**
     * The quantity of the last trade (in the orderbook's quantity unit)
     */
    public last_quantity?: number,
    /**
     * The total volume of all trades (in the orderbook's quantity unit)
     */
    public total_quantity?: number,
    public auction_price?: number,
    /**
     * Highest traded price since the start of the trading period.
     */
    public high?: number,
    /**
     * Lowest traded price since the start of the trading period
     */
    public low?: number,
    /**
     * All contract details (as delivered from the backend system)
     */
    public contract_details?: any,
    /**
     * All orderbook details (as delivered from the backend system)
     */
    public orderbook_details?: any,
    /**
     * Your relative position in the contract
     */
    public relative_position?: number,
    /**
     * Your absolute position in the contract
     */
    public absolute_position?: number,
    public last_trade_time?: Date,
    /**
     * The signals applicable for the contract
     */
    public signals?: Array<any>,
  ) {}
}
