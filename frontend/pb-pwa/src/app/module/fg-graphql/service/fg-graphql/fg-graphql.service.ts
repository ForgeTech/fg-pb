import { Injectable } from '@angular/core';
// Angular optimized version of apollo graphql-client
import { Apollo, QueryRef } from 'apollo-angular';
import { InMemoryCache as ApolloInMemoryCache } from 'apollo-cache-inmemory';
import { withClientState } from 'apollo-link-state';
import {
  persistCache as apollo_persistCache,
  CachePersistor as ApolloCachePersistor
} from 'apollo-cache-persist';
// CacheProviders who are compatible with apollo persist-cache and should be choosen
// based on the target-enviroment the apollo-client is run in, like in a browser, react-native
// build
import * as LocalForage from 'localforage';
import { ApolloPersistOptions } from 'apollo-cache-persist/types';
import gql from 'graphql-tag';
import { HttpHeaders } from '@angular/common/http';
import { PowerBotEntity } from 'src/app/entity/entity.export';
import ApolloClient, { ApolloClientOptions } from 'apollo-client';
/**
* FgGraphqlClientService -
* This service provides methodes to
* create instances of forge graphql
* client, based on apollo-graphql
* ( https://www.apollographql.com/ )
*/
@Injectable()
export class FgGraphqlService {

  protected apollo: ApolloClient<{}>;

  constructor( ) {}

  public query(query) {
    let queryRef = this.apollo.watchQuery({
      query: gql(query)
    });
    return queryRef;
  }
  /**
   * Creates and returns an instance of
   * fg-graphql-client
   */
  public createClient( data: any ): void {
    if ( this.apollo ) {
      return;
    }
    let clientOptions: any = {}
    let persistOptions: any = {};
    // Recieve auth-token from localstorage to set up Authorization http-header
    // const token = window.localStorage.getItem(AUTH_USER_TOKEN);
    // const authorization = token ? `Bearer ${token}` : null;
    const headers = new HttpHeaders();
    // headers.append('Authorization', authorization);
    // Initialize apollo InMemoryCache
    const cache = new ApolloInMemoryCache();
    // Setup persist-storage options and initialize it for apollo-client cache
    persistOptions.cache = cache;
    persistOptions.storage = LocalForage.createInstance(persistOptions);
    apollo_persistCache(persistOptions);

    const localStateLink = withClientState({
      cache: cache,
      defaults: data,
      resolvers: null
    });
    // Setup Websocket for apollo-graphql subscriptions
    // const webSocketLinkConfig = clientOptions.subscriptionWebSocketLink;
    // webSocketLinkConfig.connectionParams.authToken = window.localStorage.getItem(AUTH_USER_TOKEN);
    // const wsLink = new WebSocketLink(webSocketLinkConfig);
    // Create Instace of apollo-http-link
    // const httpLink = createHttpLink({
    //   uri: clientOptions.uri,
    //   headers: headers,
    // });
    console.log( 'DATA' );
    console.log( data );
    // Initialize apollo-client instance
    clientOptions.link = localStateLink;
    clientOptions.cache = cache;
    clientOptions.connectToDevTools = true;
    clientOptions.clientState = {};
    clientOptions.clientState.defaults = data;

    const client = new ApolloClient(clientOptions);
    // const client = new ApolloBoostClient({
    //   link: ApolloLink.split(
    //     operation => {
    //       const operationAST = getOperationAST(operation.query, operation.operationName);
    //       return !!operationAST && operationAST.operation === 'subscription';
    //     },
    //     wsLink,
    //     httpLink,
    //   ),
    //   cache: cache
    // });
    this.apollo = client;
  }
  /**
   * Return a instance of apollo cache-persistor
   */
  // getFgCachePersistor( options: ApolloPersistOptions<any> ): ApolloCachePersistor<any> {
  //   return new ApolloCachePersistor( options );
  // }
}
