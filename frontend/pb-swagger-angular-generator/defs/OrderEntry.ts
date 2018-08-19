/* tslint:disable:max-line-length */
/**
 * # TERMS AND CONDITIONS\nThe Powerbot Trading REST API provide B2B services for trading with the EPEX intraday market. By using the Powerbot Trading REST API , each user agrees to the terms and conditions of this licence:\n1. The user will comply with the [EPEX Spot Market Rules](https://www.epexspot.com/en/extras/download-center/documentation) and will not endanger the EPEX system (M7) at any time with heavy load from trading algorithms.\n2. The user is aware of the OTR limits by EPEX\n\n# INTRODUCTION\nThe Powerbot-Trading Api is a web-based software service enabling algorithmic trading on power exchanges such as EPEX, HUPX or BSP Southpool. \nThe service is straightforward to integrate in an existing software environment and provides a variety of programming interfaces for development of \nindividual trading algorithms and software tools. Besides enabling a fully automated intraday trading strategy, \nPowerBot can be used to create support tools for traders providing relevant information and trading opportunities.\n\nFor further details see http://powerbot-trading.com\n\nIn addition to this API guide, there is a [playground](https://playground.powerbot-trading.com) where you can try out the API calls directly from your web browser. \nIn order to access the playground, you will need an API key which you can request from Inercomp. Please contact us at helmut.spindler@inercomp.com   \n## Endpoints\nThe Powerbot Trading REST API is available at the following REST endpoints:\n\n| Instance                | Base URL for REST Endpoints                     |\n|-------------------------|-------------------------------------------------|\n| Test                    | https://playground.powerbot-trading.com/api/v0  |\n| Staging, Production     | Provided on request                     |\n\nAccess to endpoints is secured via an API Key, which needs to be passed as an  \"api_key\" header in each request.\n  \n Notes on API Keys:\n * API keys are specific to Test, Staging or Production.\n * An API key is associated with a user account and needs to requested. Please contact us by email at helmut.spindler@inercomp.com to request an API key.\n\n## Errors\nThe API uses standard HTTP status codes to indicate the success or failure of the API call. The body of the response will be in JSON format as follows:\n\n```\n{\n  \"message\": \"... an error message ...\"\n}\n```\n\n## Paging\nThe API uses offset and limit parameters for paged operations. An X-Total-Count header is added to responses to indicate the total number of items in a paged response. \n  \n## Cross-Origin Resource Sharing\nThis API features Cross-Origin Resource Sharing (CORS) implemented in compliance with  [W3C spec](https://www.w3.org/TR/cors/).\nThis allows cross-domain communication from the browser.\nAll responses have a wildcard same-origin which makes them completely public and accessible to everyone, including any code on any site.\n\n## Additional code samples\nAdditional information and code samples demonstrating the use of the API can be found at https://github.com/powerbot-trading/python-samples.
 * 1.1.0
 * Powerbot-Trading Api
 * http://www.powerbot-trading.com/comingsoon/powerbot_logo.png
 * playground.powerbot-trading.com:443/api/v0
 */

export interface OrderEntry {
  /** The delivery area of the orderbook's product. Mandatory in a multi-delivery-area configuration */
  delivery_area?: string;
  side?: SideOrderEntryEnum;
  /**
   * The product of the order
   * example: Intraday_Power_D
   */
  prod?: string;
  /**
   * The quantity of the order in MW.
   * example: 5
   * format: double
   */
  quantity: number;
  /**
   * The price of ther order in the traded currency (usually EUR)
   * example: 35.3
   * format: double
   */
  price: number;
  /**
   * Used to define display quantity of an Iceberg Order. This field is required only in the case of type=’I’.
   * format: int32
   */
  displayQty?: number;
  /**
   * The contractId of the order, can be omitted if contractName is specified instead.
   * format: int64
   */
  contractId?: number;
  /** Set a contract name instead of the contractId, and the attempt is made to look up the contract via it's name. If contractId is set, the contractName field is ignored. */
  contractName?: string;
  /** the "client order id" which can be used to identify the order at a later point (i.e. within a trade) */
  clOrdrId?: string;
  /**
   * Defines if the order is entered on own account or as an agent. 
   * For the set of valid values please refer to values from attribute allowedClearingAcctTypes in SystemInfoResp message (e.g. ”A,P” for spot markets)
   */
  clearingAcctType: string;
  /**
   * Execution restriction of the order.
   *
   * * NON: No restriction. This is the default.
   * * FOK: (Fill or Kill) - The order is immediately fully executed or deleted.
   * * IOC: (Immediate and cancel): The order is executed immediately to its maximum extent. In case of a partial execution, the remaining volume is removed from the order book.
   * * AON: (All or None): The order must be filled completely or not at all. The order stays in the order book until it is executed or removed by the system or user. 
   * * AU (Auction): The order was entered in auction phase (no restriction is applied)
   * default: NON
   */
  ordrExeRestriction?: OrdrExeRestrictionOrderEntryEnum;
  /** Flag which indicates if the entered order is a pre-arranged order or not. */
  preArranged?: boolean;
  /** Required in case of a pre-arranged order. Contains the account of the counterpart. */
  preArrangedAcct?: string;
  /**
   * * O: Regular limit order.
   * * B: User defined block order.
   * * I: Iceberg order.
   * * L: Balance order.
   * * C: Indicative order.
   * * S: Stop limit order.
   * * E: On exchange prearranged trade
   * * N: Private and confidential trade
   * * H: Lifting order for products with Hit & Lift matcher 
   * * Q: quote order
   * * W: Indicative quote order
   * default: O
   */
  type?: TypeOrderEntryEnum;
  /**
   * Validity restriction of the order. 
   * * GFS (Good for trading session): The order rests in the order book until it is either executed, removed by the user or the current trading session (trading phase) of the underlying contract ends.
   * * GTD (Good till date, will be introduced with CX 3.5): The order rests in the order book until the date specified in the validityDate field.
   * * NON (No validity restriction): Mandatory for orders with the execution restriction “FOK” or “IOC”.
   * default: GFS
   */
  validityRes?: ValidityResOrderEntryEnum;
  /**
   * * ACTI: The order is entered and immediately exposed to the market for execution. This is the default value.
   * * HIBE: The order is entered into the backend system but not exposed to the market.
   */
  state?: StateOrderEntryEnum;
  /**
   * mandatory in case of validityRes equals “GTD”. It is used to define the date until which the order is valid. 
   * The remaining part of the order will be removed from the order book after this point in time.
   * format: date-time
   */
  validityDate?: string;
  /** Text which can be retrieved at a later point (i.e. via a trade which was triggered by the order) */
  txt?: string;
  /**
   * Peak price delta for Iceberg orders.
   * * The ppd of buy orders must be smaller or equal than zero.
   * * The ppd of sell orders must be greater or equal than zero.
   * If it is omitted the system will assume a value of “0,00”.
   * format: int32
   */
  ppd?: number;
  /**
   * (optional) Start of delivery of the underlying contract.
   * format: date-time
   */
  dlvryStart?: string;
  /**
   * (optional) End of delivery of the underlying contract.
   * format: date-time
   */
  dlvryEnd?: string;
}

export type SideOrderEntryEnum =
  'SELL' |
  'BUY';

export type OrdrExeRestrictionOrderEntryEnum =
  'FOK' |
  'IOC' |
  'NON' |
  'AON' |
  'AU';

export type TypeOrderEntryEnum =
  'B' |
  'O' |
  'I' |
  'L' |
  'S' |
  'H' |
  'C' |
  'N' |
  'E';

export type ValidityResOrderEntryEnum =
  'GFS' |
  'GTD' |
  'NON';

export type StateOrderEntryEnum =
  'ACTI' |
  'HIBE';
