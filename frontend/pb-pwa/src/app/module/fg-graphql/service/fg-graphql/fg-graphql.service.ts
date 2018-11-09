import { Injectable } from '@angular/core';
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
import { ApolloClient, ApolloQueryResult, ObservableQuery } from 'apollo-client';
import { environment } from 'src/environments/environment.ghp';
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
   type PowerBot {
     id: Int
     state: State
     config: Config
   }
   type State {
     selectedContract: false
     selectedMarket: String
     allowed: Boolean
     connection: ConfigConnection
     connectionState: Int
     requestState: Int
   }
   type Config {
     id: Int
     languages: [String]
     language: String
     backhours: Int
     darkThema: Boolean
     prodConfig: ConfigConnection
     testConfig: ConfigConnection
     logConfig: ConfigLogging
   }
   type ConfigConnection {
     id: Int
     isProduction: Boolean
     serverUrl: String
     backupUrl: String
     apiKey: String
     cache: Boolean
     isValid: Boolean
   }
   type ConfigLogging {
     id: Int
     logFolder
     logLevel
     cache
   }
   */
  protected typeDefs = `
  type Mutation {
    setConfigConnection: ConfigConnection
    setConfigLogging: ConfigLogging
    setState: State
    toggleDarkTheme: Boolean
    toggleAllowed: Boolean
  }
  type Query {
    getConfigLogging: ConfigLogging
    getConfigConnection: ConfigConnection
    getState: State
    getBreakPoint: ConfigBreakpoint
  }
  `;
  public fragmentConfigConnection = gql`
  fragment connectionConfig on ConfigConnection
  {
    id
    apiKey
    backupUrl
    serverUrl
    cache
    isProduction
    isValid
  }`;
  public fragmentConfigLogging = gql`
  fragment loggingConfig on ConfigLogging {
    id
    logFolder
    logLevel
    cache
    isValid
  }`;
  public fragmentState = gql`
    fragment state on State {
    id
    allowed
    connection
    connectionState
    requestState
  }`;
  public fragmentConfigBreakPoint = gql`
    fragment breakpointConfig on ConfigBreakPoint {
    id
    name
    cards {
      id
      cols
      id
      rows
      template
      title
    }
    grid {
      id
      cols
      gutterSize
      rowHeight
    }
  }`;

  /**
   * Resolvers for working with graphql local-state
   */
  protected resolvers = {
    Mutation: {
      setConfigConnection: ( _, args, { cache, getCacheKey }) => {
        const id = getCacheKey({__typename: 'ConfigConnection', id: args.id });
        const fragment = this.fragmentConfigConnection;
        const previous = cache.readFragment({ fragment, id });
        const data = this.getMutationWriteData(args, previous);
        cache.writeData( data, id );
        return data;
      },
      setConfigLogging: ( _, args, { cache, getCacheKey }) => {
        const id = getCacheKey({__typename: 'ConfigLogging', id: args.id });
        const fragment = this.fragmentConfigLogging;
        const previous = cache.readFragment({ fragment, id });
        const data = this.getMutationWriteData(args, previous);
        cache.writeData( data, id );
        return data;
      },
      setState: ( _, args, { cache, getCacheKey }) => {
        const id = getCacheKey({__typename: 'State', id: args.id });
        const fragment = this.fragmentState;
        const previous = cache.readFragment({ fragment, id });
        const data = this.getMutationWriteData(args, previous);
        cache.writeData( data, id );
        return data;
      },
      toggleDarkTheme: ( _, args, { cache, getCacheKey }) => {
        const id = getCacheKey({__typename: 'Config', id: args.id });
        const fragment = gql`
        fragment darkTheme on Config {
            darkTheme
        }`;
        const previous = cache.readFragment({ fragment, id });
        const data = { darkTheme: !previous.darkTheme };
        cache.writeData({ id, data });
        return data;
      },
      toggleAllowed: ( _, args, { cache, getCacheKey }) => {
        const id = getCacheKey({__typename: 'State', id: args.id });
        const fragment = gql`
        fragment allowed on Config {
            allowed
        }`;
        const previous = cache.readFragment({ fragment, id });
        const data = { darkTheme: !previous.allowed };
        cache.writeData({ id, data });
        return data;
      },
    },
    Query: {
      getConfigConnection: (parent, args, { cache, getCacheKey }) => {
        const id = getCacheKey({ __typename: 'ConfigConnection', id: args.id });
        const fragment = this.fragmentConfigConnection;
        const data = cache.readFragment({ fragment, id });
        return data;
      },
      getConfigLogging: (parent, args, { cache, getCacheKey }) => {
        const id = getCacheKey({ __typename: 'ConfigLogging', id: args.id });
        const fragment = this.fragmentConfigLogging;
        const data = cache.readFragment({ fragment, id });
        return data;
      },
      getState: (parent, args, { cache, getCacheKey }) => {
        const id = getCacheKey({ __typename: 'State', id: args.id });
        const fragment = this.fragmentState;
        const data = cache.readFragment({ fragment, id });
        return data;
      },
      getConfigBreakPoint: (parent, args, { cache, getCacheKey }) => {
        const id = getCacheKey({ __typename: 'ConfigBreakPoint', id: args.id });
        const fragment = this.fragmentConfigBreakPoint;
        const data = cache.readFragment({ fragment, id });
        return data;
      }
    }
  };
  /**
   * CONSTRUCTOR
   */
  constructor() {}
  /**
   * Methode returning a object for writing to apollo-cache by
   * unioning new and previous data
   */
  protected getMutationWriteData(newData: any, prevData: any) {
    if( !prevData ){
      prevData = {};
    }
    if( !newData ){
      newData = {};
    }
    console.log('WRITEDATA');
    console.log( Object.assign( prevData, newData ) );
    return Object.assign( prevData, newData );
  }
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
    // Recieve auth-token from localstorage to set up Authorization http-header
    // const token = window.localStorage.getItem(AUTH_USER_TOKEN);
    // const authorization = token ? `Bearer ${token}` : null;
    const headers = new HttpHeaders();
    // headers.append('Authorization', authorization);
    // Initialize apollo InMemoryCache
    const cache = new ApolloInMemoryCache();
    // Setup persist-storage options and initialize it for apollo-client cache
    let persistOptions: any = {};
    persistOptions.cache = cache;
    persistOptions.storage = LocalForage.createInstance(persistOptions);
    apollo_persistCache(persistOptions);

    const localStateLink = withClientState({
      cache: cache,
      defaults: data,
      resolvers: this.resolvers,
      typeDefs: this.typeDefs
    });
    // Initialize apollo-client instance
    let clientOptions: any = {}
    clientOptions.link = localStateLink;
    clientOptions.cache = cache;
    // Initialize
    clientOptions.connectToDevTools = environment.debug;
    clientOptions.clientState = this.resolvers;
    clientOptions.clientState.defaults = data;

    this.apollo = new ApolloClient(clientOptions);
  }
  /**
   * Return a instance of apollo cache-persistor for handling
   * apollo cache-persistor
   */
  getFgCachePersistor( options: ApolloPersistOptions<any> ): ApolloCachePersistor<any> {
    return new ApolloCachePersistor( options );
  }
}
