import { Order as OrderInterface } from '../module/pb-api';
/**
 * Order -
 * Entity-Class used to hold
 * order data
 */
export class Order implements OrderInterface {
  /**
   * Constructor
   */
  constructor(
    /**
     * The quantity of the order in MW.
     */
    public quantity: number,
    /**
     * The price of ther order in the traded currency (usually EUR)
     */
    public price: number,
    /**
     * Defines if the order is entered on own account or as an agent.
     * For the set of valid values please refer to values from attribute public
     * allowedClearingAcctTypes in SystemInfoResp message (e.g. ”A,P” for spot markets)
     */
    public clearingAcctType: string,
    /**
     * The delivery area of the orderbook's product. Mandatory in a multi-delivery-area configuration
     */
    public deliveryArea?: string,
    public side?: OrderInterface.SideEnum,
    /**
     * The product of the order
     */
    public prod?: string,
    /**
     * Used to define display quantity of an Iceberg Order. This field is required only in the case of type=’I’.
     */
    public displayQty?: number,
    /**
     public * The contractId of the order, can be omitted if contractName is specified instead.
     */
    public contractId?: number,
    /**
     public * Set a contract name instead of the contractId, and the attempt is made to
     public * look up the contract via it's name. If contractId is set, the contractName field is ignored.
     */
    public contractName?: string,
    /**
     * the \"client order id\" which can be used to identify the order at a later point (i.e. within a trade)
     */
    public clOrdrId?: string,
    /**
     * Execution restriction of the order.
     * NON: No restriction. This is the default.
     * FOK: (Fill or Kill) - The order is immediately fully executed or deleted.
     * IOC: (Immediate and cancel): The order is executed immediately to its maximum extent.
     public * In case of a partial execution, the remaining volume is removed from the order book.
     * AON: (All or None): The order must be filled completely or not at all. The order stays
     * in the order book until it is executed or removed by the system or user.
     * AU (Auction): The order was entered in auction phase (no restriction is applied)
     */
    public ordrExeRestriction?: OrderInterface.OrdrExeRestrictionEnum,
    /**
     * Flag which indicates if the entered order is a pre-arranged order or not.
     */
    public preArranged?: boolean,
    /**
     * Required in case of a pre-arranged order. Contains the account of the counterpart.
     */
    public preArrangedAcct?: string,
    /**
     *
     *  O: Regular limit order.
     *  B: User defined block order.
     *  I: Iceberg order.
     *  L: Balance order.
     *  C: Indicative order.
     *  S: Stop limit order.
     *  E: On exchange prearranged trade
     *  N: Private and confidential trade
     *  H: Lifting order for products with Hit & Lift matcher
     *  Q: quote order
     *  W: Indicative quote order
     */
    public type?: OrderInterface.TypeEnum,
    /**
     * Validity restriction of the order.
     public * GFS (Good for trading session): The order rests in the order book until it is either executed,
     * removed by the user or the current trading session (trading phase) of the underlying contract ends.
     public * GTD (Good till date, will be introduced with CX 3.5): The order rests in the order book until the date
     * specified in the validityDate field. * NON (No validity restriction): Mandatory for orders with
     * the execution restriction “FOK” or “IOC”.
     */
    public validityRes?: OrderInterface.ValidityResEnum,
    /**
     * ACTI: The order is entered and immediately exposed to the market for execution. This is the default value.
     * HIBE: The order is entered into the backend system but not exposed to the market.
     */
    public state?: OrderInterface.StateEnum,
    /**
     * mandatory in case of validityRes equals “GTD”. It is used to define the date until
     * which the order is valid.  The remaining part of the order will be removed from the
     * order book after this point in time.
     */
    public validityDate?: Date,
    /**
     * Text which can be retrieved at a later point (i.e. via a trade which
     *  was triggered by the order)
     */
    public txt?: string,
    /**
     * Peak price delta for Iceberg orders.
     * The ppd of buy orders must be smaller or equal than zero.
     * The ppd of sell orders must be greater or equal than zero.
     public * If it is omitted the system will assume a value of “0,00”.
     */
    public ppd?: number,
    /**
     * (optional) Start of delivery of the underlying contract.
     */
    public dlvryStart?: Date,
    /**
     * (optional) End of delivery of the underlying contract.
     */
    public dlvryEnd?: Date,
  ) {}
}
