/* tslint:disable:max-line-length */
/**
 * # TERMS AND CONDITIONS\nThe Powerbot Trading REST API provide B2B services for trading with the EPEX intraday market. By using the Powerbot Trading REST API , each user agrees to the terms and conditions of this licence:\n1. The user will comply with the [EPEX Spot Market Rules](https://www.epexspot.com/en/extras/download-center/documentation) and will not endanger the EPEX system (M7) at any time with heavy load from trading algorithms.\n2. The user is aware of the OTR limits by EPEX\n\n# INTRODUCTION\nThe Powerbot-Trading Api is a web-based software service enabling algorithmic trading on power exchanges such as EPEX, HUPX or BSP Southpool. \nThe service is straightforward to integrate in an existing software environment and provides a variety of programming interfaces for development of \nindividual trading algorithms and software tools. Besides enabling a fully automated intraday trading strategy, \nPowerBot can be used to create support tools for traders providing relevant information and trading opportunities.\n\nFor further details see http://powerbot-trading.com\n\nIn addition to this API guide, there is a [playground](https://playground.powerbot-trading.com) where you can try out the API calls directly from your web browser. \nIn order to access the playground, you will need an API key which you can request from Inercomp. Please contact us at helmut.spindler@inercomp.com   \n## Endpoints\nThe Powerbot Trading REST API is available at the following REST endpoints:\n\n| Instance                | Base URL for REST Endpoints                     |\n|-------------------------|-------------------------------------------------|\n| Test                    | https://playground.powerbot-trading.com/api/v0  |\n| Staging, Production     | Provided on request                     |\n\nAccess to endpoints is secured via an API Key, which needs to be passed as an  \"api_key\" header in each request.\n  \n Notes on API Keys:\n * API keys are specific to Test, Staging or Production.\n * An API key is associated with a user account and needs to requested. Please contact us by email at helmut.spindler@inercomp.com to request an API key.\n\n## Errors\nThe API uses standard HTTP status codes to indicate the success or failure of the API call. The body of the response will be in JSON format as follows:\n\n```\n{\n  \"message\": \"... an error message ...\"\n}\n```\n\n## Paging\nThe API uses offset and limit parameters for paged operations. An X-Total-Count header is added to responses to indicate the total number of items in a paged response. \n  \n## Cross-Origin Resource Sharing\nThis API features Cross-Origin Resource Sharing (CORS) implemented in compliance with  [W3C spec](https://www.w3.org/TR/cors/).\nThis allows cross-domain communication from the browser.\nAll responses have a wildcard same-origin which makes them completely public and accessible to everyone, including any code on any site.\n\n## Additional code samples\nAdditional information and code samples demonstrating the use of the API can be found at https://github.com/powerbot-trading/python-samples.
 * 1.1.0
 * Powerbot-Trading Api
 * http://www.powerbot-trading.com/comingsoon/powerbot_logo.png
 * playground.powerbot-trading.com:443/api/v0
 */

export interface ApiKeyDescription {
  /**
   * A name for the API key, i.e. "TRADING_API_KEY"
   * example: MY_TRADING_API_KEY
   */
  name: string;
  /**
   * Your EPEX password which you have received from the POWERSPOT market operation team.
   * example: __password__
   */
  epex_password?: string;
  /** Set to true, if the api_key should be able to trade. */
  can_trade?: boolean;
  /** Set to true, if the api_key should be allowed to submit signals */
  can_signal?: boolean;
}
