import { OrderEntityInterface } from '../interface/interface.export';

/**
 * Order -
 * Entity-Class used to hold
 * order data
 */
export class OrderEntity implements OrderEntityInterface {
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
    public clearing_acct_type: string,
    /**
     * The delivery area of the orderbook's product. Mandatory in a multi-delivery-area configuration
     */
    public delivery_area?: string,
    public side?: OrderEntityInterface.SideEnum,
    /**
     * The product of the order
     */
    public prod?: string,
    /**
     * Used to define display quantity of an Iceberg Order. This field is required only in the case of type=’I’.
     */
    public display_qty?: number,
    /**
     public * The contractId of the order, can be omitted if contractName is specified instead.
     */
    public contract_id?: number,
    /**
     public * Set a contract name instead of the contractId, and the attempt is made to
     public * look up the contract via it's name. If contractId is set, the contractName field is ignored.
     */
    public contract_name?: string,
    /**
     * the \"client order id\" which can be used to identify the order at a later point (i.e. within a trade)
     */
    public cl_ordr_id?: string,
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
    public ordr_exe_restriction?: OrderEntityInterface.OrdrExeRestrictionEnum,
    /**
     * Flag which indicates if the entered order is a pre-arranged order or not.
     */
    public pre_arranged?: boolean,
    /**
     * Required in case of a pre-arranged order. Contains the account of the counterpart.
     */
    public pre_arranged_acct?: string,
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
    public type?: OrderEntityInterface.TypeEnum,
    /**
     * Validity restriction of the order.
     public * GFS (Good for trading session): The order rests in the order book until it is either executed,
     * removed by the user or the current trading session (trading phase) of the underlying contract ends.
     public * GTD (Good till date, will be introduced with CX 3.5): The order rests in the order book until the date
     * specified in the validityDate field. * NON (No validity restriction): Mandatory for orders with
     * the execution restriction “FOK” or “IOC”.
     */
    public validity_res?: OrderEntityInterface.ValidityResEnum,
    /**
     * ACTI: The order is entered and immediately exposed to the market for execution. This is the default value.
     * HIBE: The order is entered into the backend system but not exposed to the market.
     */
    public state?: OrderEntityInterface.StateEnum,
    /**
     * mandatory in case of validityRes equals “GTD”. It is used to define the date until
     * which the order is valid.  The remaining part of the order will be removed from the
     * order book after this point in time.
     */
    public validity_date?: Date,
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
    public dlvry_start?: Date,
    /**
     * (optional) End of delivery of the underlying contract.
     */
    public dlvry_end?: Date,
  ) {}
}
