/* tslint:disable:max-line-length */
/**
 * # TERMS AND CONDITIONS\nThe Powerbot Trading REST API provide B2B services for trading with the EPEX intraday market. By using the Powerbot Trading REST API , each user agrees to the terms and conditions of this licence:\n1. The user will comply with the [EPEX Spot Market Rules](https://www.epexspot.com/en/extras/download-center/documentation) and will not endanger the EPEX system (M7) at any time with heavy load from trading algorithms.\n2. The user is aware of the OTR limits by EPEX\n\n# INTRODUCTION\nThe Powerbot-Trading Api is a web-based software service enabling algorithmic trading on power exchanges such as EPEX, HUPX or BSP Southpool. \nThe service is straightforward to integrate in an existing software environment and provides a variety of programming interfaces for development of \nindividual trading algorithms and software tools. Besides enabling a fully automated intraday trading strategy, \nPowerBot can be used to create support tools for traders providing relevant information and trading opportunities.\n\nFor further details see http://powerbot-trading.com\n\nIn addition to this API guide, there is a [playground](https://playground.powerbot-trading.com) where you can try out the API calls directly from your web browser. \nIn order to access the playground, you will need an API key which you can request from Inercomp. Please contact us at helmut.spindler@inercomp.com   \n## Endpoints\nThe Powerbot Trading REST API is available at the following REST endpoints:\n\n| Instance                | Base URL for REST Endpoints                     |\n|-------------------------|-------------------------------------------------|\n| Test                    | https://playground.powerbot-trading.com/api/v0  |\n| Staging, Production     | Provided on request                     |\n\nAccess to endpoints is secured via an API Key, which needs to be passed as an  \"api_key\" header in each request.\n  \n Notes on API Keys:\n * API keys are specific to Test, Staging or Production.\n * An API key is associated with a user account and needs to requested. Please contact us by email at helmut.spindler@inercomp.com to request an API key.\n\n## Errors\nThe API uses standard HTTP status codes to indicate the success or failure of the API call. The body of the response will be in JSON format as follows:\n\n```\n{\n  \"message\": \"... an error message ...\"\n}\n```\n\n## Paging\nThe API uses offset and limit parameters for paged operations. An X-Total-Count header is added to responses to indicate the total number of items in a paged response. \n  \n## Cross-Origin Resource Sharing\nThis API features Cross-Origin Resource Sharing (CORS) implemented in compliance with  [W3C spec](https://www.w3.org/TR/cors/).\nThis allows cross-domain communication from the browser.\nAll responses have a wildcard same-origin which makes them completely public and accessible to everyone, including any code on any site.\n\n## Additional code samples\nAdditional information and code samples demonstrating the use of the API can be found at https://github.com/powerbot-trading/python-samples.
 * 1.1.0
 * Powerbot-Trading Api
 * http://www.powerbot-trading.com/comingsoon/powerbot_logo.png
 * playground.powerbot-trading.com:443/api/v0
 */

export interface Trade {
  /**
   * Unique trade_id
   * example: 383234324234
   * format: int64
   */
  trade_id?: number;
  /**
   * * CNCL: Trade was cancelled by market operations.
   * * RREJ: Requested Recall was rejected by market operations.
   * * RGRA: Requested Recall was granted by market operations.
   * * RREQ: Recall of this trade was requested.
   * * ACTI: Trade is active (this is the default value).
   * * CREQ: cancel was requested from local market operations. 
   * * CREJ: cancel was rejected by global market operations.
   * * RSFA: Request sent for approval to SOB (XBID).
   * example: ACTI
   */
  state?: StateTradeEnum;
  /**
   * If you sold energy with this trade, delivery_area will contain the sell_delivery_area, otherwise the buy_delivery_area
   * example: 10YAT-APG------L
   */
  delivery_area?: string;
  /**
   * The timestamp when powerbot received the trade (UTC time zone)
   * format: date-time
   */
  api_timestamp?: string;
  /**
   * The timestamp when the trade was executed (UTC time zone)
   * format: date-time
   */
  exec_time?: string;
  /** true if you bought energy */
  buy?: boolean;
  /** true if you sold energy */
  sell?: boolean;
  /**
   * the order_id of the underlying buy-order
   * example: 6123942030
   * format: int64
   */
  buy_order_id?: number;
  /** The delivery area of the buy-side of the trade. */
  buy_delivery_area?: string;
  /** the client order id of the buy order */
  buy_clOrderId?: string;
  /** the custom text of the buy order */
  buy_txt?: string;
  /** the buyer's epex user code */
  buy_user_code?: string;
  /** the buyer's epex member id */
  buy_member_id?: string;
  /**
   * Indicates whether the executed order was a trade aggressor or trade originator.  
   * * Y - Trade aggressor
   * * N - Trade originator
   * * U - Unknown, for executed orders of remote products and data before migration    
   */
  buy_aggressor_indicator?: Buy_aggressor_indicatorTradeEnum;
  /**
   * The seller's order id
   * example: 28492342354
   * format: int64
   */
  sell_order_id?: number;
  /**
   * delivery area of the sell order
   * example: 10YAT-APG------L
   */
  sell_delivery_area?: string;
  /** The sell order's client id */
  sell_clOrderId?: string;
  /** The sell order's custom text */
  sell_txt?: string;
  /** The seller's epex user code */
  sell_user_code?: string;
  /** The seller's epex member id */
  sell_member_id?: string;
  /**
   * Indicates whether the executed order was a trade aggressor or trade originator.  
   * * Y - Trade aggressor
   * * N - Trade originator
   * * U - Unknown, for executed orders of remote products and data before migration    
   */
  sell_aggressor_indicator?: Sell_aggressor_indicatorTradeEnum;
  /**
   * The contract_id against which the trade was executed
   * example: 2342353242
   * format: int64
   */
  contract_id?: number;
  /**
   * The contract's name against which the trade was executed.
   * example: 17-18
   */
  contract_name?: string;
  /**
   * Time when the delivery of this trade starts (UTC timezone)
   * format: date-time
   */
  delivery_start?: string;
  /**
   * Time when the delivery of this trade ends (UTC timezone)
   * format: date-time
   */
  delivery_end?: string;
  /**
   * Price of the trade
   * example: 35
   * format: double
   */
  price?: number;
  /**
   * Quantity in MW of the trade
   * example: 5
   * format: double
   */
  quantity?: number;
  /** Details of the trade provided by EPEX, Please consult the "DFS180 - M7 - Public Message Interface" for details. */
  trade_details?: object;
  /** Details of the trade provided by EPEX, Please consult the "DFS180 - M7 - Public Message Interface" for details. */
  contract_details?: object;
}

export type StateTradeEnum =
  'CNCL' |
  'RREJ' |
  'RGRA' |
  'RREQ' |
  'ACTI' |
  'CREQ' |
  'CREJ' |
  'RSFA';

export type Buy_aggressor_indicatorTradeEnum =
  'Y' |
  'N' |
  'U';

export type Sell_aggressor_indicatorTradeEnum =
  'Y' |
  'N' |
  'U';
