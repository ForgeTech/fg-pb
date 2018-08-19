import { Inject, Injectable, Optional } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

import {
  Status,
  MarketStatus,
  Category,
  Direction,
  Message,
  OrderBooks,
  ProductInformation,
  OrderBook,
  State,
  Side,
  OwnOrder,
  PublicTrade,
  State,
  Buy_aggressor_indicator,
  Sell_aggressor_indicator,
  Trade,
  ContractHistoryItem,
  ContractItem,
  State,
  Contract,
  Orders,
  OrderBookEntry,
  OrderModType,
  UpdateStatus,
  Action,
  ValidityRes,
  Type,
  OrdrExeRestriction,
  OrderModify,
  Side,
  OrdrExeRestriction,
  Type,
  ValidityRes,
  State,
  OrderEntry,
  Credentials,
  MarketOptions,
  Type,
  Notification,
  Signal,
  Severity,
  LogEntry,
  ApiKeyDescription,
  ApiKey,
  BulkSignal,
  Status,
  BulkSignalResponse,
  ErrorResponse
} from './models';

export enum Severity_at_least {
  LOW = 'LOW',
  MED = 'MED',
  HIG = 'HIG',
  ERR = 'ERR',
  URG = 'URG'
}

export enum Exec_instruction {
  VALID = 'VALID',
  LNKD = 'LNKD'
}

/**
* Created with angular4-swagger-client-generator.
*/
@Injectable()
export class ApiClientService {

  private domain = 'https://playground.powerbot-trading.com:443/api/v0';

  constructor(private http: HttpClient, @Optional() @Inject('domain') domain: string ) {
    if (domain) {
      this.domain = domain;
    }
  }

  /**
  * Use this method to generate a new api_key for your trading algorithm, signal import, etc. 
  * Requires that you are authenticated with your master api_key which you'll get once your private 
  * Method addApiKey
  * @param value # TERMS AND CONDITIONS
The Powerbot Trading REST API provide B2B services for trading with the EPEX intraday market. By using the Powerbot Trading REST API , each user agrees to the terms and conditions of this licence:
1. The user will comply with the [EPEX Spot Market Rules](https://www.epexspot.com/en/extras/download-center/documentation) and will not endanger the EPEX system (M7) at any time with heavy load from trading algorithms.
2. The user is aware of the OTR limits by EPEX

# INTRODUCTION
The Powerbot-Trading Api is a web-based software service enabling algorithmic trading on power exchanges such as EPEX, HUPX or BSP Southpool. 
The service is straightforward to integrate in an existing software environment and provides a variety of programming interfaces for development of 
individual trading algorithms and software tools. Besides enabling a fully automated intraday trading strategy, 
PowerBot can be used to create support tools for traders providing relevant information and trading opportunities.

For further details see http://powerbot-trading.com

In addition to this API guide, there is a [playground](https://playground.powerbot-trading.com) where you can try out the API calls directly from your web browser. 
In order to access the playground, you will need an API key which you can request from Inercomp. Please contact us at helmut.spindler@inercomp.com   
## Endpoints
The Powerbot Trading REST API is available at the following REST endpoints:

| Instance                | Base URL for REST Endpoints                     |
|-------------------------|-------------------------------------------------|
| Test                    | https://playground.powerbot-trading.com/api/v0  |
| Staging, Production     | Provided on request                     |

Access to endpoints is secured via an API Key, which needs to be passed as an  "api_key" header in each request.
  
 Notes on API Keys:
 * API keys are specific to Test, Staging or Production.
 * An API key is associated with a user account and needs to requested. Please contact us by email at helmut.spindler@inercomp.com to request an API key.

## Errors
The API uses standard HTTP status codes to indicate the success or failure of the API call. The body of the response will be in JSON format as follows:

```
{
  "message": "... an error message ..."
}
```

## Paging
The API uses offset and limit parameters for paged operations. An X-Total-Count header is added to responses to indicate the total number of items in a paged response. 
  
## Cross-Origin Resource Sharing
This API features Cross-Origin Resource Sharing (CORS) implemented in compliance with  [W3C spec](https://www.w3.org/TR/cors/).
This allows cross-domain communication from the browser.
All responses have a wildcard same-origin which makes them completely public and accessible to everyone, including any code on any site.

## Additional code samples
Additional information and code samples demonstrating the use of the API can be found at https://github.com/powerbot-trading/python-samples.
  * @return Full HTTP response as Observable
  */
  public addApiKey(value: ): Observable<HttpResponse<any>> {
    const uri = `/authentication`;
    const headers = new HttpHeaders();
    const params = new HttpParams();
    return this.sendRequest<any>('post', uri, headers, params, JSON.stringify(value));
  }

  /**
  * Method getLogs
  * @param offset Offset when loading a list of items
  * @param limit Limits the number of loaded items
  * @param severity_at_least # TERMS AND CONDITIONS
The Powerbot Trading REST API provide B2B services for trading with the EPEX intraday market. By using the Powerbot Trading REST API , each user agrees to the terms and conditions of this licence:
1. The user will comply with the [EPEX Spot Market Rules](https://www.epexspot.com/en/extras/download-center/documentation) and will not endanger the EPEX system (M7) at any time with heavy load from trading algorithms.
2. The user is aware of the OTR limits by EPEX

# INTRODUCTION
The Powerbot-Trading Api is a web-based software service enabling algorithmic trading on power exchanges such as EPEX, HUPX or BSP Southpool. 
The service is straightforward to integrate in an existing software environment and provides a variety of programming interfaces for development of 
individual trading algorithms and software tools. Besides enabling a fully automated intraday trading strategy, 
PowerBot can be used to create support tools for traders providing relevant information and trading opportunities.

For further details see http://powerbot-trading.com

In addition to this API guide, there is a [playground](https://playground.powerbot-trading.com) where you can try out the API calls directly from your web browser. 
In order to access the playground, you will need an API key which you can request from Inercomp. Please contact us at helmut.spindler@inercomp.com   
## Endpoints
The Powerbot Trading REST API is available at the following REST endpoints:

| Instance                | Base URL for REST Endpoints                     |
|-------------------------|-------------------------------------------------|
| Test                    | https://playground.powerbot-trading.com/api/v0  |
| Staging, Production     | Provided on request                     |

Access to endpoints is secured via an API Key, which needs to be passed as an  "api_key" header in each request.
  
 Notes on API Keys:
 * API keys are specific to Test, Staging or Production.
 * An API key is associated with a user account and needs to requested. Please contact us by email at helmut.spindler@inercomp.com to request an API key.

## Errors
The API uses standard HTTP status codes to indicate the success or failure of the API call. The body of the response will be in JSON format as follows:

```
{
  "message": "... an error message ..."
}
```

## Paging
The API uses offset and limit parameters for paged operations. An X-Total-Count header is added to responses to indicate the total number of items in a paged response. 
  
## Cross-Origin Resource Sharing
This API features Cross-Origin Resource Sharing (CORS) implemented in compliance with  [W3C spec](https://www.w3.org/TR/cors/).
This allows cross-domain communication from the browser.
All responses have a wildcard same-origin which makes them completely public and accessible to everyone, including any code on any site.

## Additional code samples
Additional information and code samples demonstrating the use of the API can be found at https://github.com/powerbot-trading/python-samples.
  * @param received_from from timestamp is 'inclusive' (i.e. >=), use UTC time zone
  * @param received_to to timestamp is 'exclusive' (i.e. <), use UTC time zone
  * @return Full HTTP response as Observable
  */
  public getLogs(offset: number, limit: number, severity_at_least: Severity_at_least, received_from: string, received_to: string): Observable<HttpResponse<object[]>> {
    const uri = `/logs`;
    const headers = new HttpHeaders();
    let params = new HttpParams();
    if (offset !== undefined && offset !== null) {
      params = params.set('offset', offset + '');
    }
    if (limit !== undefined && limit !== null) {
      params = params.set('limit', limit + '');
    }
    if (severity_at_least !== undefined && severity_at_least !== null) {
      params = params.set('severity_at_least', severity_at_least + '');
    }
    if (received_from !== undefined && received_from !== null) {
      params = params.set('received_from', received_from + '');
    }
    if (received_to !== undefined && received_to !== null) {
      params = params.set('received_to', received_to + '');
    }
    return this.sendRequest<object[]>('get', uri, headers, params, null);
  }

  /**
  * The Powerbot Trading api helps you to record what your algorithm is doing. You can use this method to log the activity of your trading algorithm. These logs can be retrieved later
  * Method addLogEntry
  * @param value # TERMS AND CONDITIONS
The Powerbot Trading REST API provide B2B services for trading with the EPEX intraday market. By using the Powerbot Trading REST API , each user agrees to the terms and conditions of this licence:
1. The user will comply with the [EPEX Spot Market Rules](https://www.epexspot.com/en/extras/download-center/documentation) and will not endanger the EPEX system (M7) at any time with heavy load from trading algorithms.
2. The user is aware of the OTR limits by EPEX

# INTRODUCTION
The Powerbot-Trading Api is a web-based software service enabling algorithmic trading on power exchanges such as EPEX, HUPX or BSP Southpool. 
The service is straightforward to integrate in an existing software environment and provides a variety of programming interfaces for development of 
individual trading algorithms and software tools. Besides enabling a fully automated intraday trading strategy, 
PowerBot can be used to create support tools for traders providing relevant information and trading opportunities.

For further details see http://powerbot-trading.com

In addition to this API guide, there is a [playground](https://playground.powerbot-trading.com) where you can try out the API calls directly from your web browser. 
In order to access the playground, you will need an API key which you can request from Inercomp. Please contact us at helmut.spindler@inercomp.com   
## Endpoints
The Powerbot Trading REST API is available at the following REST endpoints:

| Instance                | Base URL for REST Endpoints                     |
|-------------------------|-------------------------------------------------|
| Test                    | https://playground.powerbot-trading.com/api/v0  |
| Staging, Production     | Provided on request                     |

Access to endpoints is secured via an API Key, which needs to be passed as an  "api_key" header in each request.
  
 Notes on API Keys:
 * API keys are specific to Test, Staging or Production.
 * An API key is associated with a user account and needs to requested. Please contact us by email at helmut.spindler@inercomp.com to request an API key.

## Errors
The API uses standard HTTP status codes to indicate the success or failure of the API call. The body of the response will be in JSON format as follows:

```
{
  "message": "... an error message ..."
}
```

## Paging
The API uses offset and limit parameters for paged operations. An X-Total-Count header is added to responses to indicate the total number of items in a paged response. 
  
## Cross-Origin Resource Sharing
This API features Cross-Origin Resource Sharing (CORS) implemented in compliance with  [W3C spec](https://www.w3.org/TR/cors/).
This allows cross-domain communication from the browser.
All responses have a wildcard same-origin which makes them completely public and accessible to everyone, including any code on any site.

## Additional code samples
Additional information and code samples demonstrating the use of the API can be found at https://github.com/powerbot-trading/python-samples.
  * @return Full HTTP response as Observable
  */
  public addLogEntry(value: ): Observable<HttpResponse<any>> {
    const uri = `/logs`;
    const headers = new HttpHeaders();
    const params = new HttpParams();
    return this.sendRequest<any>('post', uri, headers, params, JSON.stringify(value));
  }

  /**
  * Method updateSignal
  * @param source A unique identifier of the system which emits signals
  * @param id A unique key of the signal, i.e. the timstamp at which the signal was emitted.
  * @param delivery_start # TERMS AND CONDITIONS
The Powerbot Trading REST API provide B2B services for trading with the EPEX intraday market. By using the Powerbot Trading REST API , each user agrees to the terms and conditions of this licence:
1. The user will comply with the [EPEX Spot Market Rules](https://www.epexspot.com/en/extras/download-center/documentation) and will not endanger the EPEX system (M7) at any time with heavy load from trading algorithms.
2. The user is aware of the OTR limits by EPEX

# INTRODUCTION
The Powerbot-Trading Api is a web-based software service enabling algorithmic trading on power exchanges such as EPEX, HUPX or BSP Southpool. 
The service is straightforward to integrate in an existing software environment and provides a variety of programming interfaces for development of 
individual trading algorithms and software tools. Besides enabling a fully automated intraday trading strategy, 
PowerBot can be used to create support tools for traders providing relevant information and trading opportunities.

For further details see http://powerbot-trading.com

In addition to this API guide, there is a [playground](https://playground.powerbot-trading.com) where you can try out the API calls directly from your web browser. 
In order to access the playground, you will need an API key which you can request from Inercomp. Please contact us at helmut.spindler@inercomp.com   
## Endpoints
The Powerbot Trading REST API is available at the following REST endpoints:

| Instance                | Base URL for REST Endpoints                     |
|-------------------------|-------------------------------------------------|
| Test                    | https://playground.powerbot-trading.com/api/v0  |
| Staging, Production     | Provided on request                     |

Access to endpoints is secured via an API Key, which needs to be passed as an  "api_key" header in each request.
  
 Notes on API Keys:
 * API keys are specific to Test, Staging or Production.
 * An API key is associated with a user account and needs to requested. Please contact us by email at helmut.spindler@inercomp.com to request an API key.

## Errors
The API uses standard HTTP status codes to indicate the success or failure of the API call. The body of the response will be in JSON format as follows:

```
{
  "message": "... an error message ..."
}
```

## Paging
The API uses offset and limit parameters for paged operations. An X-Total-Count header is added to responses to indicate the total number of items in a paged response. 
  
## Cross-Origin Resource Sharing
This API features Cross-Origin Resource Sharing (CORS) implemented in compliance with  [W3C spec](https://www.w3.org/TR/cors/).
This allows cross-domain communication from the browser.
All responses have a wildcard same-origin which makes them completely public and accessible to everyone, including any code on any site.

## Additional code samples
Additional information and code samples demonstrating the use of the API can be found at https://github.com/powerbot-trading/python-samples.
  * @param delivery_end # TERMS AND CONDITIONS
The Powerbot Trading REST API provide B2B services for trading with the EPEX intraday market. By using the Powerbot Trading REST API , each user agrees to the terms and conditions of this licence:
1. The user will comply with the [EPEX Spot Market Rules](https://www.epexspot.com/en/extras/download-center/documentation) and will not endanger the EPEX system (M7) at any time with heavy load from trading algorithms.
2. The user is aware of the OTR limits by EPEX

# INTRODUCTION
The Powerbot-Trading Api is a web-based software service enabling algorithmic trading on power exchanges such as EPEX, HUPX or BSP Southpool. 
The service is straightforward to integrate in an existing software environment and provides a variety of programming interfaces for development of 
individual trading algorithms and software tools. Besides enabling a fully automated intraday trading strategy, 
PowerBot can be used to create support tools for traders providing relevant information and trading opportunities.

For further details see http://powerbot-trading.com

In addition to this API guide, there is a [playground](https://playground.powerbot-trading.com) where you can try out the API calls directly from your web browser. 
In order to access the playground, you will need an API key which you can request from Inercomp. Please contact us at helmut.spindler@inercomp.com   
## Endpoints
The Powerbot Trading REST API is available at the following REST endpoints:

| Instance                | Base URL for REST Endpoints                     |
|-------------------------|-------------------------------------------------|
| Test                    | https://playground.powerbot-trading.com/api/v0  |
| Staging, Production     | Provided on request                     |

Access to endpoints is secured via an API Key, which needs to be passed as an  "api_key" header in each request.
  
 Notes on API Keys:
 * API keys are specific to Test, Staging or Production.
 * An API key is associated with a user account and needs to requested. Please contact us by email at helmut.spindler@inercomp.com to request an API key.

## Errors
The API uses standard HTTP status codes to indicate the success or failure of the API call. The body of the response will be in JSON format as follows:

```
{
  "message": "... an error message ..."
}
```

## Paging
The API uses offset and limit parameters for paged operations. An X-Total-Count header is added to responses to indicate the total number of items in a paged response. 
  
## Cross-Origin Resource Sharing
This API features Cross-Origin Resource Sharing (CORS) implemented in compliance with  [W3C spec](https://www.w3.org/TR/cors/).
This allows cross-domain communication from the browser.
All responses have a wildcard same-origin which makes them completely public and accessible to everyone, including any code on any site.

## Additional code samples
Additional information and code samples demonstrating the use of the API can be found at https://github.com/powerbot-trading/python-samples.
  * @param value Signal payload. Will accept any valid json. Set the "delivery_start" and the "delivery_end" attributes to a valid delivery period for a contract of an order book, 
and the order book will return you your previously submitted signals. This is then typically used by trading algorithms to determine if, for instance, a position should
be closed. You can either submit these attributes as part of signal, or as query parameters.
  * @return Full HTTP response as Observable
  */
  public updateSignal(source: string, id: string, delivery_start: string, delivery_end: string, value: ): Observable<HttpResponse<any>> {
    const uri = `/signals/${source}/${id}`;
    const headers = new HttpHeaders();
    let params = new HttpParams();
    if (delivery_start !== undefined && delivery_start !== null) {
      params = params.set('delivery_start', delivery_start + '');
    }
    if (delivery_end !== undefined && delivery_end !== null) {
      params = params.set('delivery_end', delivery_end + '');
    }
    return this.sendRequest<any>('post', uri, headers, params, JSON.stringify(value));
  }

  /**
  * Method getSignals
  * @param offset Offset when loading a list of items
  * @param limit Limits the number of loaded items
  * @param received_from from timestamp is 'inclusive' (i.e. >=), use UTC timezones
  * @param received_to to timestamp is 'exclusive' (i.e. <), use UTC timezones
  * @return Full HTTP response as Observable
  */
  public getSignals(offset: number, limit: number, received_from: string, received_to: string): Observable<HttpResponse<object[]>> {
    const uri = `/signals`;
    const headers = new HttpHeaders();
    let params = new HttpParams();
    if (offset !== undefined && offset !== null) {
      params = params.set('offset', offset + '');
    }
    if (limit !== undefined && limit !== null) {
      params = params.set('limit', limit + '');
    }
    if (received_from !== undefined && received_from !== null) {
      params = params.set('received_from', received_from + '');
    }
    if (received_to !== undefined && received_to !== null) {
      params = params.set('received_to', received_to + '');
    }
    return this.sendRequest<object[]>('get', uri, headers, params, null);
  }

  /**
  * Method updateSignals
  * @param value Signals payload
  * @return Full HTTP response as Observable
  */
  public updateSignals(value: ): Observable<HttpResponse<object[]>> {
    const uri = `/signals`;
    const headers = new HttpHeaders();
    const params = new HttpParams();
    return this.sendRequest<object[]>('post', uri, headers, params, JSON.stringify(value));
  }

  /**
  * Method getTrades
  * @param offset Offset when loading a list of items
  * @param limit Limits the number of loaded items
  * @param ordId Limit the trades to those which are related to a particular order
  * @param active_only Show only those trades which are active (i.e. active or rejected recalls/cancellations)
  * @param clOrdrId Show only those trades related to orders with a specific 'client order id' (something like 'your reference' which you can submit)
together with an order 
  * @param txt Show only those trades related to orders with a specific 'custom text'. Similar to the clOrdrId, you can
submit a string inside the 'txt' attribute of an order which helps you to identify trades originating from a 
specific order at a later point
  * @param contract_id Show only those trades related to a specific contract
  * @param from_api_timestamp from timestamp is 'inclusive' (i.e. >=)
  * @param to_api_timestamp to timestamp is 'exclusive' (i.e. <)
  * @param delivery_within_start # TERMS AND CONDITIONS
The Powerbot Trading REST API provide B2B services for trading with the EPEX intraday market. By using the Powerbot Trading REST API , each user agrees to the terms and conditions of this licence:
1. The user will comply with the [EPEX Spot Market Rules](https://www.epexspot.com/en/extras/download-center/documentation) and will not endanger the EPEX system (M7) at any time with heavy load from trading algorithms.
2. The user is aware of the OTR limits by EPEX

# INTRODUCTION
The Powerbot-Trading Api is a web-based software service enabling algorithmic trading on power exchanges such as EPEX, HUPX or BSP Southpool. 
The service is straightforward to integrate in an existing software environment and provides a variety of programming interfaces for development of 
individual trading algorithms and software tools. Besides enabling a fully automated intraday trading strategy, 
PowerBot can be used to create support tools for traders providing relevant information and trading opportunities.

For further details see http://powerbot-trading.com

In addition to this API guide, there is a [playground](https://playground.powerbot-trading.com) where you can try out the API calls directly from your web browser. 
In order to access the playground, you will need an API key which you can request from Inercomp. Please contact us at helmut.spindler@inercomp.com   
## Endpoints
The Powerbot Trading REST API is available at the following REST endpoints:

| Instance                | Base URL for REST Endpoints                     |
|-------------------------|-------------------------------------------------|
| Test                    | https://playground.powerbot-trading.com/api/v0  |
| Staging, Production     | Provided on request                     |

Access to endpoints is secured via an API Key, which needs to be passed as an  "api_key" header in each request.
  
 Notes on API Keys:
 * API keys are specific to Test, Staging or Production.
 * An API key is associated with a user account and needs to requested. Please contact us by email at helmut.spindler@inercomp.com to request an API key.

## Errors
The API uses standard HTTP status codes to indicate the success or failure of the API call. The body of the response will be in JSON format as follows:

```
{
  "message": "... an error message ..."
}
```

## Paging
The API uses offset and limit parameters for paged operations. An X-Total-Count header is added to responses to indicate the total number of items in a paged response. 
  
## Cross-Origin Resource Sharing
This API features Cross-Origin Resource Sharing (CORS) implemented in compliance with  [W3C spec](https://www.w3.org/TR/cors/).
This allows cross-domain communication from the browser.
All responses have a wildcard same-origin which makes them completely public and accessible to everyone, including any code on any site.

## Additional code samples
Additional information and code samples demonstrating the use of the API can be found at https://github.com/powerbot-trading/python-samples.
  * @param delivery_within_end # TERMS AND CONDITIONS
The Powerbot Trading REST API provide B2B services for trading with the EPEX intraday market. By using the Powerbot Trading REST API , each user agrees to the terms and conditions of this licence:
1. The user will comply with the [EPEX Spot Market Rules](https://www.epexspot.com/en/extras/download-center/documentation) and will not endanger the EPEX system (M7) at any time with heavy load from trading algorithms.
2. The user is aware of the OTR limits by EPEX

# INTRODUCTION
The Powerbot-Trading Api is a web-based software service enabling algorithmic trading on power exchanges such as EPEX, HUPX or BSP Southpool. 
The service is straightforward to integrate in an existing software environment and provides a variety of programming interfaces for development of 
individual trading algorithms and software tools. Besides enabling a fully automated intraday trading strategy, 
PowerBot can be used to create support tools for traders providing relevant information and trading opportunities.

For further details see http://powerbot-trading.com

In addition to this API guide, there is a [playground](https://playground.powerbot-trading.com) where you can try out the API calls directly from your web browser. 
In order to access the playground, you will need an API key which you can request from Inercomp. Please contact us at helmut.spindler@inercomp.com   
## Endpoints
The Powerbot Trading REST API is available at the following REST endpoints:

| Instance                | Base URL for REST Endpoints                     |
|-------------------------|-------------------------------------------------|
| Test                    | https://playground.powerbot-trading.com/api/v0  |
| Staging, Production     | Provided on request                     |

Access to endpoints is secured via an API Key, which needs to be passed as an  "api_key" header in each request.
  
 Notes on API Keys:
 * API keys are specific to Test, Staging or Production.
 * An API key is associated with a user account and needs to requested. Please contact us by email at helmut.spindler@inercomp.com to request an API key.

## Errors
The API uses standard HTTP status codes to indicate the success or failure of the API call. The body of the response will be in JSON format as follows:

```
{
  "message": "... an error message ..."
}
```

## Paging
The API uses offset and limit parameters for paged operations. An X-Total-Count header is added to responses to indicate the total number of items in a paged response. 
  
## Cross-Origin Resource Sharing
This API features Cross-Origin Resource Sharing (CORS) implemented in compliance with  [W3C spec](https://www.w3.org/TR/cors/).
This allows cross-domain communication from the browser.
All responses have a wildcard same-origin which makes them completely public and accessible to everyone, including any code on any site.

## Additional code samples
Additional information and code samples demonstrating the use of the API can be found at https://github.com/powerbot-trading/python-samples.
  * @return Full HTTP response as Observable
  */
  public getTrades(offset: number, limit: number, ordId: number, active_only: boolean, clOrdrId: string, txt: string, contract_id: number, from_api_timestamp: string, to_api_timestamp: string, delivery_within_start: string, delivery_within_end: string): Observable<HttpResponse<object[]>> {
    const uri = `/trades`;
    const headers = new HttpHeaders();
    let params = new HttpParams();
    if (offset !== undefined && offset !== null) {
      params = params.set('offset', offset + '');
    }
    if (limit !== undefined && limit !== null) {
      params = params.set('limit', limit + '');
    }
    if (ordId !== undefined && ordId !== null) {
      params = params.set('ordId', ordId + '');
    }
    if (active_only !== undefined && active_only !== null) {
      params = params.set('active_only', active_only + '');
    }
    if (clOrdrId !== undefined && clOrdrId !== null) {
      params = params.set('clOrdrId', clOrdrId + '');
    }
    if (txt !== undefined && txt !== null) {
      params = params.set('txt', txt + '');
    }
    if (contract_id !== undefined && contract_id !== null) {
      params = params.set('contract_id', contract_id + '');
    }
    if (from_api_timestamp !== undefined && from_api_timestamp !== null) {
      params = params.set('from_api_timestamp', from_api_timestamp + '');
    }
    if (to_api_timestamp !== undefined && to_api_timestamp !== null) {
      params = params.set('to_api_timestamp', to_api_timestamp + '');
    }
    if (delivery_within_start !== undefined && delivery_within_start !== null) {
      params = params.set('delivery_within_start', delivery_within_start + '');
    }
    if (delivery_within_end !== undefined && delivery_within_end !== null) {
      params = params.set('delivery_within_end', delivery_within_end + '');
    }
    return this.sendRequest<object[]>('get', uri, headers, params, null);
  }

  /**
  * Attempts to recall a trade. Note that this may fail depending on the conditions set by Market operations. Check the trade's state after
  * Method recallTrade
  * @param trade_id The unique trade_id
  * @return Full HTTP response as Observable
  */
  public recallTrade(trade_id: number): Observable<HttpResponse<object[]>> {
    const uri = `/trade/${trade_id}`;
    const headers = new HttpHeaders();
    const params = new HttpParams();
    return this.sendRequest<object[]>('delete', uri, headers, params, null);
  }

  /**
  * Method getOwnOrders
  * @param offset Offset when loading a list of items
  * @param limit Limits the number of loaded items
  * @param contract_id Show only those orders related to a specific contract
  * @param active_only Returns only those orders which are active
  * @return Full HTTP response as Observable
  */
  public getOwnOrders(offset: number, limit: number, contract_id: number, active_only: boolean): Observable<HttpResponse<object[]>> {
    const uri = `/orders`;
    const headers = new HttpHeaders();
    let params = new HttpParams();
    if (offset !== undefined && offset !== null) {
      params = params.set('offset', offset + '');
    }
    if (limit !== undefined && limit !== null) {
      params = params.set('limit', limit + '');
    }
    if (contract_id !== undefined && contract_id !== null) {
      params = params.set('contract_id', contract_id + '');
    }
    if (active_only !== undefined && active_only !== null) {
      params = params.set('active_only', active_only + '');
    }
    return this.sendRequest<object[]>('get', uri, headers, params, null);
  }

  /**
  * Method addOrder
  * @param order # TERMS AND CONDITIONS
The Powerbot Trading REST API provide B2B services for trading with the EPEX intraday market. By using the Powerbot Trading REST API , each user agrees to the terms and conditions of this licence:
1. The user will comply with the [EPEX Spot Market Rules](https://www.epexspot.com/en/extras/download-center/documentation) and will not endanger the EPEX system (M7) at any time with heavy load from trading algorithms.
2. The user is aware of the OTR limits by EPEX

# INTRODUCTION
The Powerbot-Trading Api is a web-based software service enabling algorithmic trading on power exchanges such as EPEX, HUPX or BSP Southpool. 
The service is straightforward to integrate in an existing software environment and provides a variety of programming interfaces for development of 
individual trading algorithms and software tools. Besides enabling a fully automated intraday trading strategy, 
PowerBot can be used to create support tools for traders providing relevant information and trading opportunities.

For further details see http://powerbot-trading.com

In addition to this API guide, there is a [playground](https://playground.powerbot-trading.com) where you can try out the API calls directly from your web browser. 
In order to access the playground, you will need an API key which you can request from Inercomp. Please contact us at helmut.spindler@inercomp.com   
## Endpoints
The Powerbot Trading REST API is available at the following REST endpoints:

| Instance                | Base URL for REST Endpoints                     |
|-------------------------|-------------------------------------------------|
| Test                    | https://playground.powerbot-trading.com/api/v0  |
| Staging, Production     | Provided on request                     |

Access to endpoints is secured via an API Key, which needs to be passed as an  "api_key" header in each request.
  
 Notes on API Keys:
 * API keys are specific to Test, Staging or Production.
 * An API key is associated with a user account and needs to requested. Please contact us by email at helmut.spindler@inercomp.com to request an API key.

## Errors
The API uses standard HTTP status codes to indicate the success or failure of the API call. The body of the response will be in JSON format as follows:

```
{
  "message": "... an error message ..."
}
```

## Paging
The API uses offset and limit parameters for paged operations. An X-Total-Count header is added to responses to indicate the total number of items in a paged response. 
  
## Cross-Origin Resource Sharing
This API features Cross-Origin Resource Sharing (CORS) implemented in compliance with  [W3C spec](https://www.w3.org/TR/cors/).
This allows cross-domain communication from the browser.
All responses have a wildcard same-origin which makes them completely public and accessible to everyone, including any code on any site.

## Additional code samples
Additional information and code samples demonstrating the use of the API can be found at https://github.com/powerbot-trading/python-samples.
  * @return Full HTTP response as Observable
  */
  public addOrder(order: ): Observable<HttpResponse<any>> {
    const uri = `/orders`;
    const headers = new HttpHeaders();
    const params = new HttpParams();
    return this.sendRequest<any>('post', uri, headers, params, JSON.stringify(order));
  }

  /**
  * Method addOrders
  * @param exec_instruction Defines the execution instruction for the whole list of orders: 
  * **VALID**: default. All orders must be valid, meaning they must past the order validation of the backend system (e.g. the price of the order must be in the price range of the product). If one order does not pass the validation, the full list of submitted orders is rejected.
  * **LNKD**: Linked orders - the provided orders are linked together and should be executed all at once. This option can only be used, if all orders have the same product and the execution restriction FOK (Fill-or-Kill). In case one of the orders cannot be executed, the whole list is not executed. The Linked Orders feature is configurable and might be turned off by EPEX.
  * @param order # TERMS AND CONDITIONS
The Powerbot Trading REST API provide B2B services for trading with the EPEX intraday market. By using the Powerbot Trading REST API , each user agrees to the terms and conditions of this licence:
1. The user will comply with the [EPEX Spot Market Rules](https://www.epexspot.com/en/extras/download-center/documentation) and will not endanger the EPEX system (M7) at any time with heavy load from trading algorithms.
2. The user is aware of the OTR limits by EPEX

# INTRODUCTION
The Powerbot-Trading Api is a web-based software service enabling algorithmic trading on power exchanges such as EPEX, HUPX or BSP Southpool. 
The service is straightforward to integrate in an existing software environment and provides a variety of programming interfaces for development of 
individual trading algorithms and software tools. Besides enabling a fully automated intraday trading strategy, 
PowerBot can be used to create support tools for traders providing relevant information and trading opportunities.

For further details see http://powerbot-trading.com

In addition to this API guide, there is a [playground](https://playground.powerbot-trading.com) where you can try out the API calls directly from your web browser. 
In order to access the playground, you will need an API key which you can request from Inercomp. Please contact us at helmut.spindler@inercomp.com   
## Endpoints
The Powerbot Trading REST API is available at the following REST endpoints:

| Instance                | Base URL for REST Endpoints                     |
|-------------------------|-------------------------------------------------|
| Test                    | https://playground.powerbot-trading.com/api/v0  |
| Staging, Production     | Provided on request                     |

Access to endpoints is secured via an API Key, which needs to be passed as an  "api_key" header in each request.
  
 Notes on API Keys:
 * API keys are specific to Test, Staging or Production.
 * An API key is associated with a user account and needs to requested. Please contact us by email at helmut.spindler@inercomp.com to request an API key.

## Errors
The API uses standard HTTP status codes to indicate the success or failure of the API call. The body of the response will be in JSON format as follows:

```
{
  "message": "... an error message ..."
}
```

## Paging
The API uses offset and limit parameters for paged operations. An X-Total-Count header is added to responses to indicate the total number of items in a paged response. 
  
## Cross-Origin Resource Sharing
This API features Cross-Origin Resource Sharing (CORS) implemented in compliance with  [W3C spec](https://www.w3.org/TR/cors/).
This allows cross-domain communication from the browser.
All responses have a wildcard same-origin which makes them completely public and accessible to everyone, including any code on any site.

## Additional code samples
Additional information and code samples demonstrating the use of the API can be found at https://github.com/powerbot-trading/python-samples.
  * @return Full HTTP response as Observable
  */
  public addOrders(exec_instruction: Exec_instruction, order: ): Observable<HttpResponse<object[]>> {
    const uri = `/orders/list`;
    const headers = new HttpHeaders();
    let params = new HttpParams();
    if (exec_instruction !== undefined && exec_instruction !== null) {
      params = params.set('exec_instruction', exec_instruction + '');
    }
    return this.sendRequest<object[]>('post', uri, headers, params, JSON.stringify(order));
  }

  /**
  * Method updateStatus
  * @param orders # TERMS AND CONDITIONS
The Powerbot Trading REST API provide B2B services for trading with the EPEX intraday market. By using the Powerbot Trading REST API , each user agrees to the terms and conditions of this licence:
1. The user will comply with the [EPEX Spot Market Rules](https://www.epexspot.com/en/extras/download-center/documentation) and will not endanger the EPEX system (M7) at any time with heavy load from trading algorithms.
2. The user is aware of the OTR limits by EPEX

# INTRODUCTION
The Powerbot-Trading Api is a web-based software service enabling algorithmic trading on power exchanges such as EPEX, HUPX or BSP Southpool. 
The service is straightforward to integrate in an existing software environment and provides a variety of programming interfaces for development of 
individual trading algorithms and software tools. Besides enabling a fully automated intraday trading strategy, 
PowerBot can be used to create support tools for traders providing relevant information and trading opportunities.

For further details see http://powerbot-trading.com

In addition to this API guide, there is a [playground](https://playground.powerbot-trading.com) where you can try out the API calls directly from your web browser. 
In order to access the playground, you will need an API key which you can request from Inercomp. Please contact us at helmut.spindler@inercomp.com   
## Endpoints
The Powerbot Trading REST API is available at the following REST endpoints:

| Instance                | Base URL for REST Endpoints                     |
|-------------------------|-------------------------------------------------|
| Test                    | https://playground.powerbot-trading.com/api/v0  |
| Staging, Production     | Provided on request                     |

Access to endpoints is secured via an API Key, which needs to be passed as an  "api_key" header in each request.
  
 Notes on API Keys:
 * API keys are specific to Test, Staging or Production.
 * An API key is associated with a user account and needs to requested. Please contact us by email at helmut.spindler@inercomp.com to request an API key.

## Errors
The API uses standard HTTP status codes to indicate the success or failure of the API call. The body of the response will be in JSON format as follows:

```
{
  "message": "... an error message ..."
}
```

## Paging
The API uses offset and limit parameters for paged operations. An X-Total-Count header is added to responses to indicate the total number of items in a paged response. 
  
## Cross-Origin Resource Sharing
This API features Cross-Origin Resource Sharing (CORS) implemented in compliance with  [W3C spec](https://www.w3.org/TR/cors/).
This allows cross-domain communication from the browser.
All responses have a wildcard same-origin which makes them completely public and accessible to everyone, including any code on any site.

## Additional code samples
Additional information and code samples demonstrating the use of the API can be found at https://github.com/powerbot-trading/python-samples.
  * @return Full HTTP response as Observable
  */
  public updateStatus(orders: ): Observable<HttpResponse<any>> {
    const uri = `/orders/status`;
    const headers = new HttpHeaders();
    const params = new HttpParams();
    return this.sendRequest<any>('put', uri, headers, params, JSON.stringify(orders));
  }

  /**
  * Method getContractHistory
  * @param contract_id The unique id of the contract
  * @param from_revision Revisions start with 0, each change increments it by 1
  * @return Full HTTP response as Observable
  */
  public getContractHistory(contract_id: number, from_revision: number): Observable<HttpResponse<object[]>> {
    const uri = `/contract/${contract_id}/history`;
    const headers = new HttpHeaders();
    let params = new HttpParams();
    if (from_revision !== undefined && from_revision !== null) {
      params = params.set('from_revision', from_revision + '');
    }
    return this.sendRequest<object[]>('get', uri, headers, params, null);
  }

  /**
  * Method getPublicTrades
  * @param offset Offset when loading a list of items
  * @param limit Limits the number of loaded items
  * @param contract_id # TERMS AND CONDITIONS
The Powerbot Trading REST API provide B2B services for trading with the EPEX intraday market. By using the Powerbot Trading REST API , each user agrees to the terms and conditions of this licence:
1. The user will comply with the [EPEX Spot Market Rules](https://www.epexspot.com/en/extras/download-center/documentation) and will not endanger the EPEX system (M7) at any time with heavy load from trading algorithms.
2. The user is aware of the OTR limits by EPEX

# INTRODUCTION
The Powerbot-Trading Api is a web-based software service enabling algorithmic trading on power exchanges such as EPEX, HUPX or BSP Southpool. 
The service is straightforward to integrate in an existing software environment and provides a variety of programming interfaces for development of 
individual trading algorithms and software tools. Besides enabling a fully automated intraday trading strategy, 
PowerBot can be used to create support tools for traders providing relevant information and trading opportunities.

For further details see http://powerbot-trading.com

In addition to this API guide, there is a [playground](https://playground.powerbot-trading.com) where you can try out the API calls directly from your web browser. 
In order to access the playground, you will need an API key which you can request from Inercomp. Please contact us at helmut.spindler@inercomp.com   
## Endpoints
The Powerbot Trading REST API is available at the following REST endpoints:

| Instance                | Base URL for REST Endpoints                     |
|-------------------------|-------------------------------------------------|
| Test                    | https://playground.powerbot-trading.com/api/v0  |
| Staging, Production     | Provided on request                     |

Access to endpoints is secured via an API Key, which needs to be passed as an  "api_key" header in each request.
  
 Notes on API Keys:
 * API keys are specific to Test, Staging or Production.
 * An API key is associated with a user account and needs to requested. Please contact us by email at helmut.spindler@inercomp.com to request an API key.

## Errors
The API uses standard HTTP status codes to indicate the success or failure of the API call. The body of the response will be in JSON format as follows:

```
{
  "message": "... an error message ..."
}
```

## Paging
The API uses offset and limit parameters for paged operations. An X-Total-Count header is added to responses to indicate the total number of items in a paged response. 
  
## Cross-Origin Resource Sharing
This API features Cross-Origin Resource Sharing (CORS) implemented in compliance with  [W3C spec](https://www.w3.org/TR/cors/).
This allows cross-domain communication from the browser.
All responses have a wildcard same-origin which makes them completely public and accessible to everyone, including any code on any site.

## Additional code samples
Additional information and code samples demonstrating the use of the API can be found at https://github.com/powerbot-trading/python-samples.
  * @param from_api_timestamp from timestamp is 'inclusive' (i.e. >=)
  * @param to_api_timestamp to timestamp is 'exclusive' (i.e. <)
  * @return Full HTTP response as Observable
  */
  public getPublicTrades(offset: number, limit: number, contract_id: number, from_api_timestamp: string, to_api_timestamp: string): Observable<HttpResponse<object[]>> {
    const uri = `/contract/${contract_id}/publictrades`;
    const headers = new HttpHeaders();
    let params = new HttpParams();
    if (offset !== undefined && offset !== null) {
      params = params.set('offset', offset + '');
    }
    if (limit !== undefined && limit !== null) {
      params = params.set('limit', limit + '');
    }
    if (from_api_timestamp !== undefined && from_api_timestamp !== null) {
      params = params.set('from_api_timestamp', from_api_timestamp + '');
    }
    if (to_api_timestamp !== undefined && to_api_timestamp !== null) {
      params = params.set('to_api_timestamp', to_api_timestamp + '');
    }
    return this.sendRequest<object[]>('get', uri, headers, params, null);
  }

  /**
  * Method getOrders
  * @param contract_id # TERMS AND CONDITIONS
The Powerbot Trading REST API provide B2B services for trading with the EPEX intraday market. By using the Powerbot Trading REST API , each user agrees to the terms and conditions of this licence:
1. The user will comply with the [EPEX Spot Market Rules](https://www.epexspot.com/en/extras/download-center/documentation) and will not endanger the EPEX system (M7) at any time with heavy load from trading algorithms.
2. The user is aware of the OTR limits by EPEX

# INTRODUCTION
The Powerbot-Trading Api is a web-based software service enabling algorithmic trading on power exchanges such as EPEX, HUPX or BSP Southpool. 
The service is straightforward to integrate in an existing software environment and provides a variety of programming interfaces for development of 
individual trading algorithms and software tools. Besides enabling a fully automated intraday trading strategy, 
PowerBot can be used to create support tools for traders providing relevant information and trading opportunities.

For further details see http://powerbot-trading.com

In addition to this API guide, there is a [playground](https://playground.powerbot-trading.com) where you can try out the API calls directly from your web browser. 
In order to access the playground, you will need an API key which you can request from Inercomp. Please contact us at helmut.spindler@inercomp.com   
## Endpoints
The Powerbot Trading REST API is available at the following REST endpoints:

| Instance                | Base URL for REST Endpoints                     |
|-------------------------|-------------------------------------------------|
| Test                    | https://playground.powerbot-trading.com/api/v0  |
| Staging, Production     | Provided on request                     |

Access to endpoints is secured via an API Key, which needs to be passed as an  "api_key" header in each request.
  
 Notes on API Keys:
 * API keys are specific to Test, Staging or Production.
 * An API key is associated with a user account and needs to requested. Please contact us by email at helmut.spindler@inercomp.com to request an API key.

## Errors
The API uses standard HTTP status codes to indicate the success or failure of the API call. The body of the response will be in JSON format as follows:

```
{
  "message": "... an error message ..."
}
```

## Paging
The API uses offset and limit parameters for paged operations. An X-Total-Count header is added to responses to indicate the total number of items in a paged response. 
  
## Cross-Origin Resource Sharing
This API features Cross-Origin Resource Sharing (CORS) implemented in compliance with  [W3C spec](https://www.w3.org/TR/cors/).
This allows cross-domain communication from the browser.
All responses have a wildcard same-origin which makes them completely public and accessible to everyone, including any code on any site.

## Additional code samples
Additional information and code samples demonstrating the use of the API can be found at https://github.com/powerbot-trading/python-samples.
  * @return Full HTTP response as Observable
  */
  public getOrders(contract_id: number): Observable<HttpResponse<any>> {
    const uri = `/contract/${contract_id}/orders`;
    const headers = new HttpHeaders();
    const params = new HttpParams();
    return this.sendRequest<any>('get', uri, headers, params, null);
  }

  /**
  * Method findContracts
  * @param contract_id # TERMS AND CONDITIONS
The Powerbot Trading REST API provide B2B services for trading with the EPEX intraday market. By using the Powerbot Trading REST API , each user agrees to the terms and conditions of this licence:
1. The user will comply with the [EPEX Spot Market Rules](https://www.epexspot.com/en/extras/download-center/documentation) and will not endanger the EPEX system (M7) at any time with heavy load from trading algorithms.
2. The user is aware of the OTR limits by EPEX

# INTRODUCTION
The Powerbot-Trading Api is a web-based software service enabling algorithmic trading on power exchanges such as EPEX, HUPX or BSP Southpool. 
The service is straightforward to integrate in an existing software environment and provides a variety of programming interfaces for development of 
individual trading algorithms and software tools. Besides enabling a fully automated intraday trading strategy, 
PowerBot can be used to create support tools for traders providing relevant information and trading opportunities.

For further details see http://powerbot-trading.com

In addition to this API guide, there is a [playground](https://playground.powerbot-trading.com) where you can try out the API calls directly from your web browser. 
In order to access the playground, you will need an API key which you can request from Inercomp. Please contact us at helmut.spindler@inercomp.com   
## Endpoints
The Powerbot Trading REST API is available at the following REST endpoints:

| Instance                | Base URL for REST Endpoints                     |
|-------------------------|-------------------------------------------------|
| Test                    | https://playground.powerbot-trading.com/api/v0  |
| Staging, Production     | Provided on request                     |

Access to endpoints is secured via an API Key, which needs to be passed as an  "api_key" header in each request.
  
 Notes on API Keys:
 * API keys are specific to Test, Staging or Production.
 * An API key is associated with a user account and needs to requested. Please contact us by email at helmut.spindler@inercomp.com to request an API key.

## Errors
The API uses standard HTTP status codes to indicate the success or failure of the API call. The body of the response will be in JSON format as follows:

```
{
  "message": "... an error message ..."
}
```

## Paging
The API uses offset and limit parameters for paged operations. An X-Total-Count header is added to responses to indicate the total number of items in a paged response. 
  
## Cross-Origin Resource Sharing
This API features Cross-Origin Resource Sharing (CORS) implemented in compliance with  [W3C spec](https://www.w3.org/TR/cors/).
This allows cross-domain communication from the browser.
All responses have a wildcard same-origin which makes them completely public and accessible to everyone, including any code on any site.

## Additional code samples
Additional information and code samples demonstrating the use of the API can be found at https://github.com/powerbot-trading/python-samples.
  * @param delivery_start # TERMS AND CONDITIONS
The Powerbot Trading REST API provide B2B services for trading with the EPEX intraday market. By using the Powerbot Trading REST API , each user agrees to the terms and conditions of this licence:
1. The user will comply with the [EPEX Spot Market Rules](https://www.epexspot.com/en/extras/download-center/documentation) and will not endanger the EPEX system (M7) at any time with heavy load from trading algorithms.
2. The user is aware of the OTR limits by EPEX

# INTRODUCTION
The Powerbot-Trading Api is a web-based software service enabling algorithmic trading on power exchanges such as EPEX, HUPX or BSP Southpool. 
The service is straightforward to integrate in an existing software environment and provides a variety of programming interfaces for development of 
individual trading algorithms and software tools. Besides enabling a fully automated intraday trading strategy, 
PowerBot can be used to create support tools for traders providing relevant information and trading opportunities.

For further details see http://powerbot-trading.com

In addition to this API guide, there is a [playground](https://playground.powerbot-trading.com) where you can try out the API calls directly from your web browser. 
In order to access the playground, you will need an API key which you can request from Inercomp. Please contact us at helmut.spindler@inercomp.com   
## Endpoints
The Powerbot Trading REST API is available at the following REST endpoints:

| Instance                | Base URL for REST Endpoints                     |
|-------------------------|-------------------------------------------------|
| Test                    | https://playground.powerbot-trading.com/api/v0  |
| Staging, Production     | Provided on request                     |

Access to endpoints is secured via an API Key, which needs to be passed as an  "api_key" header in each request.
  
 Notes on API Keys:
 * API keys are specific to Test, Staging or Production.
 * An API key is associated with a user account and needs to requested. Please contact us by email at helmut.spindler@inercomp.com to request an API key.

## Errors
The API uses standard HTTP status codes to indicate the success or failure of the API call. The body of the response will be in JSON format as follows:

```
{
  "message": "... an error message ..."
}
```

## Paging
The API uses offset and limit parameters for paged operations. An X-Total-Count header is added to responses to indicate the total number of items in a paged response. 
  
## Cross-Origin Resource Sharing
This API features Cross-Origin Resource Sharing (CORS) implemented in compliance with  [W3C spec](https://www.w3.org/TR/cors/).
This allows cross-domain communication from the browser.
All responses have a wildcard same-origin which makes them completely public and accessible to everyone, including any code on any site.

## Additional code samples
Additional information and code samples demonstrating the use of the API can be found at https://github.com/powerbot-trading/python-samples.
  * @param delivery_end # TERMS AND CONDITIONS
The Powerbot Trading REST API provide B2B services for trading with the EPEX intraday market. By using the Powerbot Trading REST API , each user agrees to the terms and conditions of this licence:
1. The user will comply with the [EPEX Spot Market Rules](https://www.epexspot.com/en/extras/download-center/documentation) and will not endanger the EPEX system (M7) at any time with heavy load from trading algorithms.
2. The user is aware of the OTR limits by EPEX

# INTRODUCTION
The Powerbot-Trading Api is a web-based software service enabling algorithmic trading on power exchanges such as EPEX, HUPX or BSP Southpool. 
The service is straightforward to integrate in an existing software environment and provides a variety of programming interfaces for development of 
individual trading algorithms and software tools. Besides enabling a fully automated intraday trading strategy, 
PowerBot can be used to create support tools for traders providing relevant information and trading opportunities.

For further details see http://powerbot-trading.com

In addition to this API guide, there is a [playground](https://playground.powerbot-trading.com) where you can try out the API calls directly from your web browser. 
In order to access the playground, you will need an API key which you can request from Inercomp. Please contact us at helmut.spindler@inercomp.com   
## Endpoints
The Powerbot Trading REST API is available at the following REST endpoints:

| Instance                | Base URL for REST Endpoints                     |
|-------------------------|-------------------------------------------------|
| Test                    | https://playground.powerbot-trading.com/api/v0  |
| Staging, Production     | Provided on request                     |

Access to endpoints is secured via an API Key, which needs to be passed as an  "api_key" header in each request.
  
 Notes on API Keys:
 * API keys are specific to Test, Staging or Production.
 * An API key is associated with a user account and needs to requested. Please contact us by email at helmut.spindler@inercomp.com to request an API key.

## Errors
The API uses standard HTTP status codes to indicate the success or failure of the API call. The body of the response will be in JSON format as follows:

```
{
  "message": "... an error message ..."
}
```

## Paging
The API uses offset and limit parameters for paged operations. An X-Total-Count header is added to responses to indicate the total number of items in a paged response. 
  
## Cross-Origin Resource Sharing
This API features Cross-Origin Resource Sharing (CORS) implemented in compliance with  [W3C spec](https://www.w3.org/TR/cors/).
This allows cross-domain communication from the browser.
All responses have a wildcard same-origin which makes them completely public and accessible to everyone, including any code on any site.

## Additional code samples
Additional information and code samples demonstrating the use of the API can be found at https://github.com/powerbot-trading/python-samples.
  * @return Full HTTP response as Observable
  */
  public findContracts(contract_id: number, delivery_start: string, delivery_end: string): Observable<HttpResponse<object[]>> {
    const uri = `/contracts`;
    const headers = new HttpHeaders();
    let params = new HttpParams();
    if (contract_id !== undefined && contract_id !== null) {
      params = params.set('contract_id', contract_id + '');
    }
    if (delivery_start !== undefined && delivery_start !== null) {
      params = params.set('delivery_start', delivery_start + '');
    }
    if (delivery_end !== undefined && delivery_end !== null) {
      params = params.set('delivery_end', delivery_end + '');
    }
    return this.sendRequest<object[]>('get', uri, headers, params, null);
  }

  /**
  * Method modifyOrder
  * @param order_id the unique order_id. **Heads up!** After an order has been modified, it will change its's order_id!
  * @param modifications # TERMS AND CONDITIONS
The Powerbot Trading REST API provide B2B services for trading with the EPEX intraday market. By using the Powerbot Trading REST API , each user agrees to the terms and conditions of this licence:
1. The user will comply with the [EPEX Spot Market Rules](https://www.epexspot.com/en/extras/download-center/documentation) and will not endanger the EPEX system (M7) at any time with heavy load from trading algorithms.
2. The user is aware of the OTR limits by EPEX

# INTRODUCTION
The Powerbot-Trading Api is a web-based software service enabling algorithmic trading on power exchanges such as EPEX, HUPX or BSP Southpool. 
The service is straightforward to integrate in an existing software environment and provides a variety of programming interfaces for development of 
individual trading algorithms and software tools. Besides enabling a fully automated intraday trading strategy, 
PowerBot can be used to create support tools for traders providing relevant information and trading opportunities.

For further details see http://powerbot-trading.com

In addition to this API guide, there is a [playground](https://playground.powerbot-trading.com) where you can try out the API calls directly from your web browser. 
In order to access the playground, you will need an API key which you can request from Inercomp. Please contact us at helmut.spindler@inercomp.com   
## Endpoints
The Powerbot Trading REST API is available at the following REST endpoints:

| Instance                | Base URL for REST Endpoints                     |
|-------------------------|-------------------------------------------------|
| Test                    | https://playground.powerbot-trading.com/api/v0  |
| Staging, Production     | Provided on request                     |

Access to endpoints is secured via an API Key, which needs to be passed as an  "api_key" header in each request.
  
 Notes on API Keys:
 * API keys are specific to Test, Staging or Production.
 * An API key is associated with a user account and needs to requested. Please contact us by email at helmut.spindler@inercomp.com to request an API key.

## Errors
The API uses standard HTTP status codes to indicate the success or failure of the API call. The body of the response will be in JSON format as follows:

```
{
  "message": "... an error message ..."
}
```

## Paging
The API uses offset and limit parameters for paged operations. An X-Total-Count header is added to responses to indicate the total number of items in a paged response. 
  
## Cross-Origin Resource Sharing
This API features Cross-Origin Resource Sharing (CORS) implemented in compliance with  [W3C spec](https://www.w3.org/TR/cors/).
This allows cross-domain communication from the browser.
All responses have a wildcard same-origin which makes them completely public and accessible to everyone, including any code on any site.

## Additional code samples
Additional information and code samples demonstrating the use of the API can be found at https://github.com/powerbot-trading/python-samples.
  * @return Full HTTP response as Observable
  */
  public modifyOrder(order_id: number, modifications: ): Observable<HttpResponse<object[]>> {
    const uri = `/order/${order_id}`;
    const headers = new HttpHeaders();
    const params = new HttpParams();
    return this.sendRequest<object[]>('put', uri, headers, params, JSON.stringify(modifications));
  }

  /**
  * Method getOrderBooks
  * @param product The list of products (e.g. Intraday_Power_D or Intraday_Power_D,XBID_Hour_Power) for which the orderbook(s) should be retrieved; leave blank if you want all available orderbooks
  * @param with_bid_or_ask_only If set to true, the returned orderbook will contain only contracts which contain at least one active bid or ask
  * @param contractId limit the orderbook to a certain contract only
  * @param contractName limit the orderbook to a certain contract name only
  * @param delivery_start limit the orderbook to those contracts with the given delivery start date
  * @param delivery_end limit the orderbook to those contracts with the given delivery end date
  * @param delivery_within limit the orderbook to those contracts having a delivery start/end date which starts before and ends after the given parameter
  * @param past_hours The number of hours to look behind in the orderbook. If this parameter is set, also historic closed contacts are contained in the orderbook
  * @param limit Limits the number of returned order books
  * @return Full HTTP response as Observable
  */
  public getOrderBooks(product: string, with_bid_or_ask_only: boolean, contractId: number, contractName: string, delivery_start: string, delivery_end: string, delivery_within: string, past_hours: number, limit: number): Observable<HttpResponse<any>> {
    const uri = `/orderbooks`;
    const headers = new HttpHeaders();
    let params = new HttpParams();
    if (product !== undefined && product !== null) {
      params = params.set('product', product + '');
    }
    if (with_bid_or_ask_only !== undefined && with_bid_or_ask_only !== null) {
      params = params.set('with_bid_or_ask_only', with_bid_or_ask_only + '');
    }
    if (contractId !== undefined && contractId !== null) {
      params = params.set('contractId', contractId + '');
    }
    if (contractName !== undefined && contractName !== null) {
      params = params.set('contractName', contractName + '');
    }
    if (delivery_start !== undefined && delivery_start !== null) {
      params = params.set('delivery_start', delivery_start + '');
    }
    if (delivery_end !== undefined && delivery_end !== null) {
      params = params.set('delivery_end', delivery_end + '');
    }
    if (delivery_within !== undefined && delivery_within !== null) {
      params = params.set('delivery_within', delivery_within + '');
    }
    if (past_hours !== undefined && past_hours !== null) {
      params = params.set('past_hours', past_hours + '');
    }
    if (limit !== undefined && limit !== null) {
      params = params.set('limit', limit + '');
    }
    return this.sendRequest<any>('get', uri, headers, params, null);
  }

  /**
  * Method getOrderBook
  * @param product The product (e.g. Intraday_Power_D) for which the orderbook should be retrieved
  * @param with_bid_or_ask_only If set to true, the returned orderbook will contain only contracts which contain at least one active bid or ask
  * @param contractId limit the orderbook to a certain contract only
  * @param contractName limit the orderbook to a certain contract name only
  * @param delivery_start limit the orderbook to those contracts with the given delivery start date
  * @param delivery_end limit the orderbook to those contracts with the given delivery end date
  * @param delivery_within limit the orderbook to those contracts having a delivery start/end date which starts before and ends after the given parameter
  * @param past_hours The number of hours to look behind in the orderbook. If this parameter is set, also historic closed contacts are contained in the orderbook
  * @param limit Limits the number of returned order books
  * @return Full HTTP response as Observable
  */
  public getOrderBook(product: string, with_bid_or_ask_only: boolean, contractId: number, contractName: string, delivery_start: string, delivery_end: string, delivery_within: string, past_hours: number, limit: number): Observable<HttpResponse<any>> {
    const uri = `/orderbook/${product}`;
    const headers = new HttpHeaders();
    let params = new HttpParams();
    if (with_bid_or_ask_only !== undefined && with_bid_or_ask_only !== null) {
      params = params.set('with_bid_or_ask_only', with_bid_or_ask_only + '');
    }
    if (contractId !== undefined && contractId !== null) {
      params = params.set('contractId', contractId + '');
    }
    if (contractName !== undefined && contractName !== null) {
      params = params.set('contractName', contractName + '');
    }
    if (delivery_start !== undefined && delivery_start !== null) {
      params = params.set('delivery_start', delivery_start + '');
    }
    if (delivery_end !== undefined && delivery_end !== null) {
      params = params.set('delivery_end', delivery_end + '');
    }
    if (delivery_within !== undefined && delivery_within !== null) {
      params = params.set('delivery_within', delivery_within + '');
    }
    if (past_hours !== undefined && past_hours !== null) {
      params = params.set('past_hours', past_hours + '');
    }
    if (limit !== undefined && limit !== null) {
      params = params.set('limit', limit + '');
    }
    return this.sendRequest<any>('get', uri, headers, params, null);
  }

  /**
  * Method getStatus
  * @return Full HTTP response as Observable
  */
  public getStatus(): Observable<HttpResponse<any>> {
    const uri = `/market`;
    const headers = new HttpHeaders();
    const params = new HttpParams();
    return this.sendRequest<any>('get', uri, headers, params, null);
  }

  /**
  * Method login
  * @param Credentials # TERMS AND CONDITIONS
The Powerbot Trading REST API provide B2B services for trading with the EPEX intraday market. By using the Powerbot Trading REST API , each user agrees to the terms and conditions of this licence:
1. The user will comply with the [EPEX Spot Market Rules](https://www.epexspot.com/en/extras/download-center/documentation) and will not endanger the EPEX system (M7) at any time with heavy load from trading algorithms.
2. The user is aware of the OTR limits by EPEX

# INTRODUCTION
The Powerbot-Trading Api is a web-based software service enabling algorithmic trading on power exchanges such as EPEX, HUPX or BSP Southpool. 
The service is straightforward to integrate in an existing software environment and provides a variety of programming interfaces for development of 
individual trading algorithms and software tools. Besides enabling a fully automated intraday trading strategy, 
PowerBot can be used to create support tools for traders providing relevant information and trading opportunities.

For further details see http://powerbot-trading.com

In addition to this API guide, there is a [playground](https://playground.powerbot-trading.com) where you can try out the API calls directly from your web browser. 
In order to access the playground, you will need an API key which you can request from Inercomp. Please contact us at helmut.spindler@inercomp.com   
## Endpoints
The Powerbot Trading REST API is available at the following REST endpoints:

| Instance                | Base URL for REST Endpoints                     |
|-------------------------|-------------------------------------------------|
| Test                    | https://playground.powerbot-trading.com/api/v0  |
| Staging, Production     | Provided on request                     |

Access to endpoints is secured via an API Key, which needs to be passed as an  "api_key" header in each request.
  
 Notes on API Keys:
 * API keys are specific to Test, Staging or Production.
 * An API key is associated with a user account and needs to requested. Please contact us by email at helmut.spindler@inercomp.com to request an API key.

## Errors
The API uses standard HTTP status codes to indicate the success or failure of the API call. The body of the response will be in JSON format as follows:

```
{
  "message": "... an error message ..."
}
```

## Paging
The API uses offset and limit parameters for paged operations. An X-Total-Count header is added to responses to indicate the total number of items in a paged response. 
  
## Cross-Origin Resource Sharing
This API features Cross-Origin Resource Sharing (CORS) implemented in compliance with  [W3C spec](https://www.w3.org/TR/cors/).
This allows cross-domain communication from the browser.
All responses have a wildcard same-origin which makes them completely public and accessible to everyone, including any code on any site.

## Additional code samples
Additional information and code samples demonstrating the use of the API can be found at https://github.com/powerbot-trading/python-samples.
  * @return Full HTTP response as Observable
  */
  public login(Credentials: ): Observable<HttpResponse<any>> {
    const uri = `/market`;
    const headers = new HttpHeaders();
    const params = new HttpParams();
    return this.sendRequest<any>('post', uri, headers, params, JSON.stringify(Credentials));
  }

  /**
  * Method logout
  * @return Full HTTP response as Observable
  */
  public logout(): Observable<HttpResponse<any>> {
    const uri = `/market`;
    const headers = new HttpHeaders();
    const params = new HttpParams();
    return this.sendRequest<any>('delete', uri, headers, params, null);
  }

  /**
  * Method setMarketOptions
  * @param Credentials # TERMS AND CONDITIONS
The Powerbot Trading REST API provide B2B services for trading with the EPEX intraday market. By using the Powerbot Trading REST API , each user agrees to the terms and conditions of this licence:
1. The user will comply with the [EPEX Spot Market Rules](https://www.epexspot.com/en/extras/download-center/documentation) and will not endanger the EPEX system (M7) at any time with heavy load from trading algorithms.
2. The user is aware of the OTR limits by EPEX

# INTRODUCTION
The Powerbot-Trading Api is a web-based software service enabling algorithmic trading on power exchanges such as EPEX, HUPX or BSP Southpool. 
The service is straightforward to integrate in an existing software environment and provides a variety of programming interfaces for development of 
individual trading algorithms and software tools. Besides enabling a fully automated intraday trading strategy, 
PowerBot can be used to create support tools for traders providing relevant information and trading opportunities.

For further details see http://powerbot-trading.com

In addition to this API guide, there is a [playground](https://playground.powerbot-trading.com) where you can try out the API calls directly from your web browser. 
In order to access the playground, you will need an API key which you can request from Inercomp. Please contact us at helmut.spindler@inercomp.com   
## Endpoints
The Powerbot Trading REST API is available at the following REST endpoints:

| Instance                | Base URL for REST Endpoints                     |
|-------------------------|-------------------------------------------------|
| Test                    | https://playground.powerbot-trading.com/api/v0  |
| Staging, Production     | Provided on request                     |

Access to endpoints is secured via an API Key, which needs to be passed as an  "api_key" header in each request.
  
 Notes on API Keys:
 * API keys are specific to Test, Staging or Production.
 * An API key is associated with a user account and needs to requested. Please contact us by email at helmut.spindler@inercomp.com to request an API key.

## Errors
The API uses standard HTTP status codes to indicate the success or failure of the API call. The body of the response will be in JSON format as follows:

```
{
  "message": "... an error message ..."
}
```

## Paging
The API uses offset and limit parameters for paged operations. An X-Total-Count header is added to responses to indicate the total number of items in a paged response. 
  
## Cross-Origin Resource Sharing
This API features Cross-Origin Resource Sharing (CORS) implemented in compliance with  [W3C spec](https://www.w3.org/TR/cors/).
This allows cross-domain communication from the browser.
All responses have a wildcard same-origin which makes them completely public and accessible to everyone, including any code on any site.

## Additional code samples
Additional information and code samples demonstrating the use of the API can be found at https://github.com/powerbot-trading/python-samples.
  * @return Full HTTP response as Observable
  */
  public setMarketOptions(Credentials: ): Observable<HttpResponse<any>> {
    const uri = `/market/options`;
    const headers = new HttpHeaders();
    const params = new HttpParams();
    return this.sendRequest<any>('post', uri, headers, params, JSON.stringify(Credentials));
  }

  /**
  * Method getNotifications
  * @param offset Offset when loading a list of items
  * @param limit Limits the number of loaded items
  * @param severity_at_least # TERMS AND CONDITIONS
The Powerbot Trading REST API provide B2B services for trading with the EPEX intraday market. By using the Powerbot Trading REST API , each user agrees to the terms and conditions of this licence:
1. The user will comply with the [EPEX Spot Market Rules](https://www.epexspot.com/en/extras/download-center/documentation) and will not endanger the EPEX system (M7) at any time with heavy load from trading algorithms.
2. The user is aware of the OTR limits by EPEX

# INTRODUCTION
The Powerbot-Trading Api is a web-based software service enabling algorithmic trading on power exchanges such as EPEX, HUPX or BSP Southpool. 
The service is straightforward to integrate in an existing software environment and provides a variety of programming interfaces for development of 
individual trading algorithms and software tools. Besides enabling a fully automated intraday trading strategy, 
PowerBot can be used to create support tools for traders providing relevant information and trading opportunities.

For further details see http://powerbot-trading.com

In addition to this API guide, there is a [playground](https://playground.powerbot-trading.com) where you can try out the API calls directly from your web browser. 
In order to access the playground, you will need an API key which you can request from Inercomp. Please contact us at helmut.spindler@inercomp.com   
## Endpoints
The Powerbot Trading REST API is available at the following REST endpoints:

| Instance                | Base URL for REST Endpoints                     |
|-------------------------|-------------------------------------------------|
| Test                    | https://playground.powerbot-trading.com/api/v0  |
| Staging, Production     | Provided on request                     |

Access to endpoints is secured via an API Key, which needs to be passed as an  "api_key" header in each request.
  
 Notes on API Keys:
 * API keys are specific to Test, Staging or Production.
 * An API key is associated with a user account and needs to requested. Please contact us by email at helmut.spindler@inercomp.com to request an API key.

## Errors
The API uses standard HTTP status codes to indicate the success or failure of the API call. The body of the response will be in JSON format as follows:

```
{
  "message": "... an error message ..."
}
```

## Paging
The API uses offset and limit parameters for paged operations. An X-Total-Count header is added to responses to indicate the total number of items in a paged response. 
  
## Cross-Origin Resource Sharing
This API features Cross-Origin Resource Sharing (CORS) implemented in compliance with  [W3C spec](https://www.w3.org/TR/cors/).
This allows cross-domain communication from the browser.
All responses have a wildcard same-origin which makes them completely public and accessible to everyone, including any code on any site.

## Additional code samples
Additional information and code samples demonstrating the use of the API can be found at https://github.com/powerbot-trading/python-samples.
  * @param from_api_timestamp from timestamp is 'inclusive' (i.e. >=)
  * @param to_api_timestamp to timestamp is 'exclusive' (i.e. <)
  * @return Full HTTP response as Observable
  */
  public getNotifications(offset: number, limit: number, severity_at_least: Severity_at_least, from_api_timestamp: string, to_api_timestamp: string): Observable<HttpResponse<object[]>> {
    const uri = `/market/notifications`;
    const headers = new HttpHeaders();
    let params = new HttpParams();
    if (offset !== undefined && offset !== null) {
      params = params.set('offset', offset + '');
    }
    if (limit !== undefined && limit !== null) {
      params = params.set('limit', limit + '');
    }
    if (severity_at_least !== undefined && severity_at_least !== null) {
      params = params.set('severity_at_least', severity_at_least + '');
    }
    if (from_api_timestamp !== undefined && from_api_timestamp !== null) {
      params = params.set('from_api_timestamp', from_api_timestamp + '');
    }
    if (to_api_timestamp !== undefined && to_api_timestamp !== null) {
      params = params.set('to_api_timestamp', to_api_timestamp + '');
    }
    return this.sendRequest<object[]>('get', uri, headers, params, null);
  }

  /**
  * Method getMessages
  * @param offset Offset when loading a list of items
  * @param limit Limits the number of loaded items
  * @param from_api_timestamp from timestamp is 'inclusive' (i.e. >=)
  * @param to_api_timestamp to timestamp is 'exclusive' (i.e. <)
  * @param message_class_is A comma separated list of message classes. You can either use the fully qualified name (e.g. com.deutscheboerse.m7.trading.api.v6.PblcOrdrBooksDeltaRprt) or parts of it (e.g. PblcOrdrBooksDeltaRprt)
  * @param message_class_is_not # TERMS AND CONDITIONS
The Powerbot Trading REST API provide B2B services for trading with the EPEX intraday market. By using the Powerbot Trading REST API , each user agrees to the terms and conditions of this licence:
1. The user will comply with the [EPEX Spot Market Rules](https://www.epexspot.com/en/extras/download-center/documentation) and will not endanger the EPEX system (M7) at any time with heavy load from trading algorithms.
2. The user is aware of the OTR limits by EPEX

# INTRODUCTION
The Powerbot-Trading Api is a web-based software service enabling algorithmic trading on power exchanges such as EPEX, HUPX or BSP Southpool. 
The service is straightforward to integrate in an existing software environment and provides a variety of programming interfaces for development of 
individual trading algorithms and software tools. Besides enabling a fully automated intraday trading strategy, 
PowerBot can be used to create support tools for traders providing relevant information and trading opportunities.

For further details see http://powerbot-trading.com

In addition to this API guide, there is a [playground](https://playground.powerbot-trading.com) where you can try out the API calls directly from your web browser. 
In order to access the playground, you will need an API key which you can request from Inercomp. Please contact us at helmut.spindler@inercomp.com   
## Endpoints
The Powerbot Trading REST API is available at the following REST endpoints:

| Instance                | Base URL for REST Endpoints                     |
|-------------------------|-------------------------------------------------|
| Test                    | https://playground.powerbot-trading.com/api/v0  |
| Staging, Production     | Provided on request                     |

Access to endpoints is secured via an API Key, which needs to be passed as an  "api_key" header in each request.
  
 Notes on API Keys:
 * API keys are specific to Test, Staging or Production.
 * An API key is associated with a user account and needs to requested. Please contact us by email at helmut.spindler@inercomp.com to request an API key.

## Errors
The API uses standard HTTP status codes to indicate the success or failure of the API call. The body of the response will be in JSON format as follows:

```
{
  "message": "... an error message ..."
}
```

## Paging
The API uses offset and limit parameters for paged operations. An X-Total-Count header is added to responses to indicate the total number of items in a paged response. 
  
## Cross-Origin Resource Sharing
This API features Cross-Origin Resource Sharing (CORS) implemented in compliance with  [W3C spec](https://www.w3.org/TR/cors/).
This allows cross-domain communication from the browser.
All responses have a wildcard same-origin which makes them completely public and accessible to everyone, including any code on any site.

## Additional code samples
Additional information and code samples demonstrating the use of the API can be found at https://github.com/powerbot-trading/python-samples.
  * @param correlation_id # TERMS AND CONDITIONS
The Powerbot Trading REST API provide B2B services for trading with the EPEX intraday market. By using the Powerbot Trading REST API , each user agrees to the terms and conditions of this licence:
1. The user will comply with the [EPEX Spot Market Rules](https://www.epexspot.com/en/extras/download-center/documentation) and will not endanger the EPEX system (M7) at any time with heavy load from trading algorithms.
2. The user is aware of the OTR limits by EPEX

# INTRODUCTION
The Powerbot-Trading Api is a web-based software service enabling algorithmic trading on power exchanges such as EPEX, HUPX or BSP Southpool. 
The service is straightforward to integrate in an existing software environment and provides a variety of programming interfaces for development of 
individual trading algorithms and software tools. Besides enabling a fully automated intraday trading strategy, 
PowerBot can be used to create support tools for traders providing relevant information and trading opportunities.

For further details see http://powerbot-trading.com

In addition to this API guide, there is a [playground](https://playground.powerbot-trading.com) where you can try out the API calls directly from your web browser. 
In order to access the playground, you will need an API key which you can request from Inercomp. Please contact us at helmut.spindler@inercomp.com   
## Endpoints
The Powerbot Trading REST API is available at the following REST endpoints:

| Instance                | Base URL for REST Endpoints                     |
|-------------------------|-------------------------------------------------|
| Test                    | https://playground.powerbot-trading.com/api/v0  |
| Staging, Production     | Provided on request                     |

Access to endpoints is secured via an API Key, which needs to be passed as an  "api_key" header in each request.
  
 Notes on API Keys:
 * API keys are specific to Test, Staging or Production.
 * An API key is associated with a user account and needs to requested. Please contact us by email at helmut.spindler@inercomp.com to request an API key.

## Errors
The API uses standard HTTP status codes to indicate the success or failure of the API call. The body of the response will be in JSON format as follows:

```
{
  "message": "... an error message ..."
}
```

## Paging
The API uses offset and limit parameters for paged operations. An X-Total-Count header is added to responses to indicate the total number of items in a paged response. 
  
## Cross-Origin Resource Sharing
This API features Cross-Origin Resource Sharing (CORS) implemented in compliance with  [W3C spec](https://www.w3.org/TR/cors/).
This allows cross-domain communication from the browser.
All responses have a wildcard same-origin which makes them completely public and accessible to everyone, including any code on any site.

## Additional code samples
Additional information and code samples demonstrating the use of the API can be found at https://github.com/powerbot-trading/python-samples.
  * @param sort_by # TERMS AND CONDITIONS
The Powerbot Trading REST API provide B2B services for trading with the EPEX intraday market. By using the Powerbot Trading REST API , each user agrees to the terms and conditions of this licence:
1. The user will comply with the [EPEX Spot Market Rules](https://www.epexspot.com/en/extras/download-center/documentation) and will not endanger the EPEX system (M7) at any time with heavy load from trading algorithms.
2. The user is aware of the OTR limits by EPEX

# INTRODUCTION
The Powerbot-Trading Api is a web-based software service enabling algorithmic trading on power exchanges such as EPEX, HUPX or BSP Southpool. 
The service is straightforward to integrate in an existing software environment and provides a variety of programming interfaces for development of 
individual trading algorithms and software tools. Besides enabling a fully automated intraday trading strategy, 
PowerBot can be used to create support tools for traders providing relevant information and trading opportunities.

For further details see http://powerbot-trading.com

In addition to this API guide, there is a [playground](https://playground.powerbot-trading.com) where you can try out the API calls directly from your web browser. 
In order to access the playground, you will need an API key which you can request from Inercomp. Please contact us at helmut.spindler@inercomp.com   
## Endpoints
The Powerbot Trading REST API is available at the following REST endpoints:

| Instance                | Base URL for REST Endpoints                     |
|-------------------------|-------------------------------------------------|
| Test                    | https://playground.powerbot-trading.com/api/v0  |
| Staging, Production     | Provided on request                     |

Access to endpoints is secured via an API Key, which needs to be passed as an  "api_key" header in each request.
  
 Notes on API Keys:
 * API keys are specific to Test, Staging or Production.
 * An API key is associated with a user account and needs to requested. Please contact us by email at helmut.spindler@inercomp.com to request an API key.

## Errors
The API uses standard HTTP status codes to indicate the success or failure of the API call. The body of the response will be in JSON format as follows:

```
{
  "message": "... an error message ..."
}
```

## Paging
The API uses offset and limit parameters for paged operations. An X-Total-Count header is added to responses to indicate the total number of items in a paged response. 
  
## Cross-Origin Resource Sharing
This API features Cross-Origin Resource Sharing (CORS) implemented in compliance with  [W3C spec](https://www.w3.org/TR/cors/).
This allows cross-domain communication from the browser.
All responses have a wildcard same-origin which makes them completely public and accessible to everyone, including any code on any site.

## Additional code samples
Additional information and code samples demonstrating the use of the API can be found at https://github.com/powerbot-trading/python-samples.
  * @return Full HTTP response as Observable
  */
  public getMessages(offset: number, limit: number, from_api_timestamp: string, to_api_timestamp: string, message_class_is: string, message_class_is_not: string, correlation_id: string, sort_by: string): Observable<HttpResponse<object[]>> {
    const uri = `/messages`;
    const headers = new HttpHeaders();
    let params = new HttpParams();
    if (offset !== undefined && offset !== null) {
      params = params.set('offset', offset + '');
    }
    if (limit !== undefined && limit !== null) {
      params = params.set('limit', limit + '');
    }
    if (from_api_timestamp !== undefined && from_api_timestamp !== null) {
      params = params.set('from_api_timestamp', from_api_timestamp + '');
    }
    if (to_api_timestamp !== undefined && to_api_timestamp !== null) {
      params = params.set('to_api_timestamp', to_api_timestamp + '');
    }
    if (message_class_is !== undefined && message_class_is !== null) {
      params = params.set('message_class_is', message_class_is + '');
    }
    if (message_class_is_not !== undefined && message_class_is_not !== null) {
      params = params.set('message_class_is_not', message_class_is_not + '');
    }
    if (correlation_id !== undefined && correlation_id !== null) {
      params = params.set('correlation_id', correlation_id + '');
    }
    if (sort_by !== undefined && sort_by !== null) {
      params = params.set('sort_by', sort_by + '');
    }
    return this.sendRequest<object[]>('get', uri, headers, params, null);
  }

  private sendRequest<T>(method: string, uri: string, headers: HttpHeaders, params: HttpParams, body: any): Observable<HttpResponse<T>> {
    if (method === 'get') {
      return this.http.get<T>(this.domain + uri, { headers: headers.set('Accept', 'application/json'), params: params, observe: 'response' });
    } else if (method === 'put') {
      return this.http.put<T>(this.domain + uri, body, { headers: headers.set('Content-Type', 'application/json'), params: params, observe: 'response' });
    } else if (method === 'post') {
      return this.http.post<T>(this.domain + uri, body, { headers: headers.set('Content-Type', 'application/json'), params: params, observe: 'response' });
    } else if (method === 'delete') {
      return this.http.delete<T>(this.domain + uri, { headers: headers, params: params, observe: 'response' });
    } else {
      console.error('Unsupported request: ' + method);
      return Observable.throw('Unsupported request: ' + method);
    }
  }
}
