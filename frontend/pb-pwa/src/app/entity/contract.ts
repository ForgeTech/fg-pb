import { ContractInterface, InlineResponse2002 } from '../module/pb-api/model/interfaces.export';

export class Contract implements ContractInterface {
  constructor(
    /**
         * the contract's product
         */
    public product?: string,
    /**
     * The contract's unique id
     */
    public contractId?: number,
    /**
     * State of the contract
     */
    public state?: ContractInterface.StateEnum,
    /**
     * The name of the contract
     */
    public name?: string,
    /**
     * A running number starting at 0; Every time the contract changes (i.e. a trade is made), this number increments.
     */
    public revisionNo?: number,
    /**
     * The delivery start time (UTC) of the contract
     */
    public deliveryStart?: Date,
    /**
     * The delivery end time (UTC) of the contract
     */
    public deliveryEnd?: Date,
    /**
     * The best bid's price in the orderbook's currency (i.e. EUR)
     */
    public bestBidPrice?: number,
    /**
     * The best bid's quantity in the orderbook's quantity unit (i.e. MW)
     */
    public bestBidQuantity?: number,
    /**
     * The best asks's price in the orderbook's currency (i.e. EUR)
     */
    public bestAskPrice?: number,
    /**
     * The best asks's quantity in the orderbook's quantity unit (i.e. MW)
     */
    public bestAskQuantity?: number,
    /**
     * The price of the last trade (in the orderbook's currency)
     */
    public lastPrice?: number,
    /**
     * The quantity of the last trade (in the orderbook's quantity unit)
     */
    public lastQuantity?: number,
    /**
     * The total volume of all trades (in the orderbook's quantity unit)
     */
    public totalQuantity?: number,
    public auctionPrice?: number,
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
    public contractDetails?: any,
    /**
     * All orderbook details (as delivered from the backend system)
     */
    public orderbookDetails?: any,
    /**
     * Your relative position in the contract
     */
    public relativePosition?: number,
    /**
     * Your absolute position in the contract
     */
    public absolutePosition?: number,
    public lastTradeTime?: Date,
    /**
     * The signals applicable for the contract
     */
    public signals?: Array<InlineResponse2002>,
  ) {}
}
