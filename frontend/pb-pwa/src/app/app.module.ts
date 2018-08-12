import { NgModule } from '@angular/core';
import { environment } from '../environments/environment';
import { BrowserModule } from '@angular/platform-browser';
import { ServiceWorkerModule } from '@angular/service-worker';

import { AppComponent } from './app.component';

import { AsksComponent } from './view/asks/asks.component';
import { BidsComponent } from './view/bids/bids.component';
import { DashboardComponent } from './view/dashboard/dashboard.component';
import { OrderbookComponent } from './view/orderbook/orderbook.component';
import { OrdersComponent } from './view/orders/orders.component';
import { PortfolioComponent } from './view/portfolio/portfolio.component';
import { ProductHistoryComponent } from './view/product-history/product-history.component';
import { SignalsComponent } from './view/signals/signals.component';
import { TradesComponent } from './view/trades/trades.component';

import { BarHeaderComponent } from './component/bar-header/bar-header.component';
import { BarStatusComponent } from './component/bar-status/bar-status.component';
import { GraphPortfolioComponent } from './component/graph-portfolio/graph-portfolio.component';
import { GraphProductHistoryComponent } from './component/graph-product-history/graph-product-history.component';
import { ModalLoginComponent } from './component/modal-login/modal-login.component';
import { ModalLogoutComponent } from './component/modal-logout/modal-logout.component';
import { ModalSettingsComponent } from './component/modal-settings/modal-settings.component';
  import { TabApiKeyComponent } from './component/modal-settings/tab-api-key/tab-api-key.component';
  import { TabLoggingComponent } from './component/modal-settings/tab-logging/tab-logging.component';
  import { TabProductionComponent } from './component/modal-settings/tab-production/tab-production.component';
  import { TabTestComponent } from './component/modal-settings/tab-test/tab-test.component';
import { TableAsksComponent } from './component/table-asks/table-asks.component';
import { TableBestBidComponent } from './component/table-best-bid/table-best-bid.component';
import { TableBidsComponent } from './component/table-bids/table-bids.component';
import { TableOrdersComponent } from './component/table-orders/table-orders.component';
import { TableSignalsComponent } from './component/table-signals/table-signals.component';
import { TableTradesComponent } from './component/table-trades/table-trades.component';

@NgModule({
  declarations: [
    AppComponent,
    AsksComponent,
    BidsComponent,
    DashboardComponent,
    OrderbookComponent,
    OrdersComponent,
    PortfolioComponent,
    ProductHistoryComponent,
    SignalsComponent,
    TradesComponent,

    BarHeaderComponent,
    BarStatusComponent,
    GraphPortfolioComponent,
    GraphProductHistoryComponent,
    ModalLoginComponent,
    ModalLogoutComponent,
    ModalSettingsComponent,
      TabProductionComponent,
      TabApiKeyComponent,
      TabLoggingComponent,
      TabProductionComponent,
      TabTestComponent,
    TableTradesComponent,
    TableAsksComponent,
    TableBestBidComponent,
    TableBidsComponent,
    TableOrdersComponent,
    TableSignalsComponent,
  ],
  imports: [
    BrowserModule,
    ServiceWorkerModule.register('./ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
