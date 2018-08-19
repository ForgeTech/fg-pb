import { NgModule, ModuleWithProviders, SkipSelf, Optional } from '@angular/core';
import { Configuration } from './configuration';
import { HttpClient } from '@angular/common/http';


import { AuthenticationService } from './api/authentication.service';
import { ContractService } from './api/contract.service';
import { LogsService } from './api/logs.service';
import { MarketService } from './api/market.service';
import { MessagesService } from './api/messages.service';
import { OrdersService } from './api/orders.service';
import { SignalsService } from './api/signals.service';
import { TradesService } from './api/trades.service';

@NgModule({
  imports:      [],
  declarations: [],
  exports:      [],
  providers: [
    AuthenticationService,
    ContractService,
    LogsService,
    MarketService,
    MessagesService,
    OrdersService,
    SignalsService,
    TradesService ]
})
export class ApiModule {
    public static forRoot(configurationFactory: () => Configuration): ModuleWithProviders {
        return {
            ngModule: ApiModule,
            providers: [ { provide: Configuration, useFactory: configurationFactory } ]
        };
    }

    constructor( @Optional() @SkipSelf() parentModule: ApiModule,
                 @Optional() http: HttpClient) {
        if (parentModule) {
            throw new Error('ApiModule is already loaded. Import in your base AppModule only.');
        }
        if (!http) {
            throw new Error('You need to import the HttpClientModule in your AppModule! \n' +
            'See also https://github.com/angular/angular/issues/20575');
        }
    }
}
