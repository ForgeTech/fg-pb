/* tslint:disable:max-line-length */
/**
 * # TERMS AND CONDITIONS\nThe Powerbot Trading REST API provide B2B services for trading with the EPEX intraday market. By using the Powerbot Trading REST API , each user agrees to the terms and conditions of this licence:\n1. The user will comply with the [EPEX Spot Market Rules](https://www.epexspot.com/en/extras/download-center/documentation) and will not endanger the EPEX system (M7) at any time with heavy load from trading algorithms.\n2. The user is aware of the OTR limits by EPEX\n\n# INTRODUCTION\nThe Powerbot-Trading Api is a web-based software service enabling algorithmic trading on power exchanges such as EPEX, HUPX or BSP Southpool. \nThe service is straightforward to integrate in an existing software environment and provides a variety of programming interfaces for development of \nindividual trading algorithms and software tools. Besides enabling a fully automated intraday trading strategy, \nPowerBot can be used to create support tools for traders providing relevant information and trading opportunities.\n\nFor further details see http://powerbot-trading.com\n\nIn addition to this API guide, there is a [playground](https://playground.powerbot-trading.com) where you can try out the API calls directly from your web browser. \nIn order to access the playground, you will need an API key which you can request from Inercomp. Please contact us at helmut.spindler@inercomp.com   \n## Endpoints\nThe Powerbot Trading REST API is available at the following REST endpoints:\n\n| Instance                | Base URL for REST Endpoints                     |\n|-------------------------|-------------------------------------------------|\n| Test                    | https://playground.powerbot-trading.com/api/v0  |\n| Staging, Production     | Provided on request                     |\n\nAccess to endpoints is secured via an API Key, which needs to be passed as an  \"api_key\" header in each request.\n  \n Notes on API Keys:\n * API keys are specific to Test, Staging or Production.\n * An API key is associated with a user account and needs to requested. Please contact us by email at helmut.spindler@inercomp.com to request an API key.\n\n## Errors\nThe API uses standard HTTP status codes to indicate the success or failure of the API call. The body of the response will be in JSON format as follows:\n\n```\n{\n  \"message\": \"... an error message ...\"\n}\n```\n\n## Paging\nThe API uses offset and limit parameters for paged operations. An X-Total-Count header is added to responses to indicate the total number of items in a paged response. \n  \n## Cross-Origin Resource Sharing\nThis API features Cross-Origin Resource Sharing (CORS) implemented in compliance with  [W3C spec](https://www.w3.org/TR/cors/).\nThis allows cross-domain communication from the browser.\nAll responses have a wildcard same-origin which makes them completely public and accessible to everyone, including any code on any site.\n\n## Additional code samples\nAdditional information and code samples demonstrating the use of the API can be found at https://github.com/powerbot-trading/python-samples.
 * 1.1.0
 * Powerbot-Trading Api
 * http://www.powerbot-trading.com/comingsoon/powerbot_logo.png
 * playground.powerbot-trading.com:443/api/v0
 */

export interface OwnOrder {
  /**
   * the unique id of the order. **Note** if you modify an order, the id will change!
   * format: int64
   */
  order_id?: number;
  /**
   * the time (UTC) when Powerbot received the last update of the order
   * format: date-time
   */
  api_timestamp?: string;
  /**
   * The current state of the order in the system. 
   * * HIBE: The order is entered into the backend system but not exposed to the market.
   * * ACTI: The order is entered and immediately exposed to the market for execution.
   * * IACT: The order is deleted.
   */
  state?: StateOwnOrderEnum;
  /** Defines the delivery area of the order. */
  delivery_area?: string;
  /** format: date-time */
  last_change_timestamp?: string;
  /** Set to true if the order is a BUY order, false otherwise */
  buy?: boolean;
  /** set to true if the order is a SELL order, false otherwise */
  sell?: boolean;
  side?: SideOwnOrderEnum;
  /**
   * The contract_id of the order's underlying contract
   * format: int64
   */
  contract_id?: number;
  /**
   * The contract name of the order's underlying contract
   * example: 07-008
   */
  contract_name?: string;
  /**
   * the delivery start of the underlying contract.
   * format: date-time
   */
  delivery_start?: string;
  /**
   * the delivery end of the underlying contract.
   * format: date-time
   */
  delivery_end?: string;
  /** The client's order number (if set during the placement of the order) */
  clOrdrId?: string;
  /** The client's custom text (if set during the placement of the order) */
  txt?: string;
  /**
   * The price of the order in the contract's currency (usually EUR)
   * example: EUR
   * format: double
   */
  price?: number;
  /**
   * The quantity of the order (in the contract's quantity unit - usually MW)
   * example: 5
   * format: double
   */
  quantity?: number;
  /**
   * The action which has been carried out for the order
   * * UADD: Order added by user.
   * * UHIB: Order deactivated by user.
   * * UMOD: Order modified by user.
   * * UDEL: Order deleted by user.
   * * UREJ: Pre-arranged order rejected by user.
   * * AADD: Order added by market operations on behalf.
   * * AHIB: Order deactivated by market operations on behalf. “AMOD”: Order modified by market operations on behalf.
   * * ADEL: Order deleted by market operations on behalf.
   * * AREJ: Pre-arranged order rejected by market operations on behalf.
   * * SADD: Order added by the system.
   * * SHIB: Order deactivated by the system. “SMOD”: Order modified by the system. “SDEL”: Order deleted by the system.
   * * SREJ: Pre-arranged order rejected by system.
   * * FEXE: Order is fully executed.
   * * PEXE: Partial execution of order.
   * * IADD: A new slice of an Iceberg order was added to the service.
   * * QADD: Quote was added
   * * QFEX: Quote was fully executed
   */
  action?: string;
  /** All details of the order (as received from the underlying backend system) */
  details?: object;
}

export type StateOwnOrderEnum =
  'ACTI' |
  'HIBE' |
  'IACT';

export type SideOwnOrderEnum =
  'SELL' |
  'BUY';
