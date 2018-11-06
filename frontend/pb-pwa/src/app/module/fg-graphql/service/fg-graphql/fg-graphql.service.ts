import { Injectable } from '@angular/core';
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
import { ApolloClient, ApolloQueryResult, ObservableQuery } from 'apollo-client';
import { injectArgs } from '@angular/core/src/di/injector';
/**
 * FgGraphqlClientService -
* This service provides methodes to
* create instances of forge graphql
* client, based on apollo-graphql
* ( https://www.apollographql.com/ )
*/
@Injectable()
export class FgGraphqlService {
  /**
   * Holds the created apollo-client instance
   */
  protected apollo: ApolloClient<{}>;
  /**
   * Create graphql typeDefinitions
   * for working with local-state
   */
  protected typeDefs = `
  type Config {
    id: Int
    languages: [String]
    language: String
    backhours: Int
    darkThema: Boolean
    prodConfig: ProdConfig
    testConfig: TestConfig
  }
  type ProdConfig {
    id: Int
    serverUrl: String
    backupUrl: String
    apiKey: String
    cache: Boolean
    valid: Boolean
  }
  type TestConfig {
    id: Int
    serverUrl: String
    apiKey: String
    cache: Boolean
    valid: Boolean
  }
  type PowerBot {
    id: Int
    config: Config
  }
  type Mutation {
    setAllowed: Boolean
    setProdConfig: ProdConfig
    setTestConfig: TestConfig
    setLogConfig: TestConfig
    toggleDarkTheme: Boolean
  }
  type Query {
    isDarkTheme: Boolean
    getProdConfig: ProdConfig
    getTestConfig: TestConfig
    getBreakPoint: Breakpoint
  }
  `;
  /**
   * Resolvers for working with graphql local-state
   */
  protected resolvers = {
    Mutation: {
      toggleDarkTheme: ( _, args, { cache, getCacheKey }) => {
        const id = getCacheKey({__typename: 'Config', id: args.id });
        const fragment = gql`
        fragment darkThema on Config {
            darkTheme
        }`;
        const previous = cache.readFragment({ fragment, id });
        const data = { darkTheme: !previous.darkTheme };
        cache.writeData({ id, data });
        return null;
      }
    },
    Query: {
      getProdConfig: (parent, args, { cache, getCacheKey }) => {
        const id = getCacheKey({ __typename: 'ProdConfig', id: args.id });
        const fragment = gql`fragment prodConfig on ProdConfig {
          id,
          apiKey,
          backupUrl,
          serverUrl,
          cache,
          valid
        }`;
        const data = cache.readFragment({ fragment, id });
        return data;
      },
      getTestConfig: (parent, args, { cache, getCacheKey }) => {
        const id = getCacheKey({ __typename: 'TestConfig', id: args.id });
        const fragment = gql`fragment testConfig on TestConfig {
          id,
          apiKey,
          serverUrl,
          cache,
          valid
        }`;
        const data = cache.readFragment({ fragment, id });
        return data;
      },
      getBreakPoint: (parent, args, { cache, getCacheKey }) => {
        const id = getCacheKey({ __typename: 'TestConfig', id: args.id });
        const fragment = gql`fragment testConfig on TestConfig {
          id,
          apiKey,
          serverUrl,
          cache,
          valid
        }`;
        const data = cache.readFragment({ fragment, id });
        return data;
      }
    }
  };
  /**
   * CONSTRUCTOR
   */
  constructor() {}
  /*
  * Forward query to apollo-client instace query-methode
  */
  public query(query, variables: any = {}): Promise<ApolloQueryResult<{}>> {
    if(this.apollo) {
      return this.apollo.query({
        query: gql(query),
        variables: variables
      });
    } else {
      throw new Error( 'Apollo Client not intialized! Call createClient on fgGraphqlSevice before query! ' );
    }
  }
  /*
  * Forward watchQuery to apollo-client instace watchQuery-methode
  */
  public watchQuery(query, variables: any = {}): ObservableQuery {
    if(this.apollo) {
      return this.apollo.watchQuery({
        query: gql(query),
        variables: variables
      });
    } else {
      throw new Error( 'Apollo Client not intialized! Call createClient on fgGraphqlSevice before watchQuery! ' );
    }
  }
  /*
  * Forward mutations to apollo-client instace mutate-methode
  */
  public mutate(mutation, variables: any = {}): Promise<any> {
    if( this.apollo ) {
      return this.apollo.mutate({
        mutation: gql(mutation),
        variables: variables
      });
    } else {
      throw new Error('Apollo Client not intialized! Call createClient on fgGraphqlSevice before mutate! ');
    }
  }
  /**
   * Creates and returns an instance of
   * fg-graphql-client
   */
  public createClient( data: any ): void {
    // Only create apollo-instance if it wasn't already
    // initialized
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
      resolvers: this.resolvers,
      typeDefs: this.typeDefs
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
    // Initialize apollo-client instance
    clientOptions.link = localStateLink;
    clientOptions.cache = cache;
    clientOptions.connectToDevTools = true;
    clientOptions.clientState = this.resolvers;
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
   * Return a instance of apollo cache-persistor for handling
   * apollo cache-persistor
   */
  getFgCachePersistor( options: ApolloPersistOptions<any> ): ApolloCachePersistor<any> {
    return new ApolloCachePersistor( options );
  }
}
