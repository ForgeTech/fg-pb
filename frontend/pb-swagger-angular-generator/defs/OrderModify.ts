/* tslint:disable:max-line-length */
/**
 * # TERMS AND CONDITIONS\nThe Powerbot Trading REST API provide B2B services for trading with the EPEX intraday market. By using the Powerbot Trading REST API , each user agrees to the terms and conditions of this licence:\n1. The user will comply with the [EPEX Spot Market Rules](https://www.epexspot.com/en/extras/download-center/documentation) and will not endanger the EPEX system (M7) at any time with heavy load from trading algorithms.\n2. The user is aware of the OTR limits by EPEX\n\n# INTRODUCTION\nThe Powerbot-Trading Api is a web-based software service enabling algorithmic trading on power exchanges such as EPEX, HUPX or BSP Southpool. \nThe service is straightforward to integrate in an existing software environment and provides a variety of programming interfaces for development of \nindividual trading algorithms and software tools. Besides enabling a fully automated intraday trading strategy, \nPowerBot can be used to create support tools for traders providing relevant information and trading opportunities.\n\nFor further details see http://powerbot-trading.com\n\nIn addition to this API guide, there is a [playground](https://playground.powerbot-trading.com) where you can try out the API calls directly from your web browser. \nIn order to access the playground, you will need an API key which you can request from Inercomp. Please contact us at helmut.spindler@inercomp.com   \n## Endpoints\nThe Powerbot Trading REST API is available at the following REST endpoints:\n\n| Instance                | Base URL for REST Endpoints                     |\n|-------------------------|-------------------------------------------------|\n| Test                    | https://playground.powerbot-trading.com/api/v0  |\n| Staging, Production     | Provided on request                     |\n\nAccess to endpoints is secured via an API Key, which needs to be passed as an  \"api_key\" header in each request.\n  \n Notes on API Keys:\n * API keys are specific to Test, Staging or Production.\n * An API key is associated with a user account and needs to requested. Please contact us by email at helmut.spindler@inercomp.com to request an API key.\n\n## Errors\nThe API uses standard HTTP status codes to indicate the success or failure of the API call. The body of the response will be in JSON format as follows:\n\n```\n{\n  \"message\": \"... an error message ...\"\n}\n```\n\n## Paging\nThe API uses offset and limit parameters for paged operations. An X-Total-Count header is added to responses to indicate the total number of items in a paged response. \n  \n## Cross-Origin Resource Sharing\nThis API features Cross-Origin Resource Sharing (CORS) implemented in compliance with  [W3C spec](https://www.w3.org/TR/cors/).\nThis allows cross-domain communication from the browser.\nAll responses have a wildcard same-origin which makes them completely public and accessible to everyone, including any code on any site.\n\n## Additional code samples\nAdditional information and code samples demonstrating the use of the API can be found at https://github.com/powerbot-trading/python-samples.
 * 1.1.0
 * Powerbot-Trading Api
 * http://www.powerbot-trading.com/comingsoon/powerbot_logo.png
 * playground.powerbot-trading.com:443/api/v0
 */

export interface OrderModify {
  /**
   * * ACTI: Activates the order. Ignored if already active.
   * * DEAC: Deactivates (hibernates) the order. Hibernated orders are removed from the order book but are still available for modification or activation in the own orders list.
   * * MODI: Modify the order
   * * DELE: Delete the order
   */
  action: ActionOrderModifyEnum;
  /**
   * Set this field, if you want to update the validity restriction of the order
   * * GFS (Good for trading session): The order stays in the order book until it is either executed, removed by the user or the current trading session (trading phase) of the underlying contract ends.
   * * GTD (Good till date, will be introduced with CX 3.5): The order stays in the order book until the date specified in the validityDate field.
   * * NON (No validity restriction): Mandatory for orders with the execution restriction “FOK” or “IOC”.
   */
  validityRes?: ValidityResOrderModifyEnum;
  /**
   * Set this field, if you want to update the validity date of the order. Only mandatory in case of validityRes equals “GTD”. It is used to define the date until which the order is valid. 
   * The remaining part of the order will be removed from the order book after this point in time.
   * format: date-time
   */
  validityDate?: string;
  /**
   * Set this field, if you want to update the order's type.
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
   */
  type?: TypeOrderModifyEnum;
  /** Set this field if you want to update the order's 'custom text' */
  txt?: string;
  /**
   * Set this field if you want to update the order's execution restriction
   * * NON: No restriction. This is the default.
   * * FOK: (Fill or Kill) - The order is immediately fully executed or deleted.
   * * IOC: (Immediate and cancel): The order is executed immediately to its maximum extend. In case of a partial execution, the remaining volume is removed from the order book.
   * * AON: (All or None): The order must be filled completely or not at all. The order stays in the order book until it is executed or removed by the system or user. 
   * * AU (Auction): The order was entered in auction phase (no restriction is applied)
   */
  ordrExeRestriction?: OrdrExeRestrictionOrderModifyEnum;
  /**
   * Set this field if you want to update the order's quantity.
   * format: double
   */
  quantity?: number;
  /**
   * Set this field if you want to update the display quantity of an Iceberg Order. This field is required only in the case of type=’I’.
   * format: int32
   */
  displayQty?: number;
  /**
   * Set this field if you want to update the order's description.
   * format: double
   */
  price?: number;
  /** Set this field if you want to update the order's client order id. */
  clOrdrId?: string;
  /**
   * Set this field if you want to update the Peak price delta for Iceberg orders.
   * * The ppd of buy orders must be smaller or equal than zero.
   * * The ppd of sell orders must be greater or equal than zero.
   * If it is omitted the system will assume a value of “0,00”.
   *  
   * format: int32
   */
  ppd?: number;
}

export type ActionOrderModifyEnum =
  'ACTI' |
  'DEAC' |
  'MODI' |
  'DELE';

export type ValidityResOrderModifyEnum =
  'GFS' |
  'GTD' |
  'NON';

export type TypeOrderModifyEnum =
  'B' |
  'O' |
  'I' |
  'L' |
  'S' |
  'H' |
  'C' |
  'N' |
  'E';

export type OrdrExeRestrictionOrderModifyEnum =
  'FOK' |
  'IOC' |
  'NON' |
  'AON' |
  'AU';
