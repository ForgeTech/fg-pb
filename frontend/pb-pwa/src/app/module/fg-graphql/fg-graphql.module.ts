import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
// Apollo-client and other related 3rd party imports
// https://github.com/apollographql/apollo-client
import { ApolloModule } from 'apollo-angular';
import { ApolloLink } from 'apollo-link';
import { HttpLinkModule as ApolloHttpLinkModule } from 'apollo-angular-link-http';
import { InMemoryCache as ApolloInMemoryCache } from 'apollo-cache-inmemory';
import {
  persistCache as apollo_persistCache,
  CachePersistor as ApolloCachePersistor
} from 'apollo-cache-persist';
// CacheProviders who are compatible with apollo persist-cache and should be choosen
// based on the target-enviroment the apollo-client is run in, like in a browser, react-native
// build
import { LOCALSTORAGE as Localforage } from 'localforage';
import { FgGraphqlService } from './service/fg-graphql/fg-graphql.service';
import { ModuleWithProviders } from '@angular/compiler/src/core';

/**
* FgGraphqlModule -
* This Module provides all angular-material
* components and cdk classes, including all
* it's dependencies, to the importing
* angular-application
*/
@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    ApolloModule,
    ApolloHttpLinkModule,
  ],
  providers: [
    FgGraphqlService
  ],
  declarations: []
})
export class FgGraphqlModule {
  public static forRoot(): ModuleWithProviders {
    return {
      ngModule: FgGraphqlModule,
      providers: [
        FgGraphqlService
      ]
    };
  }
}
