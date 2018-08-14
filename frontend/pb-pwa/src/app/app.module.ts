import { NgModule } from '@angular/core';
import { environment } from '../environments/environment';
import { BrowserModule } from '@angular/platform-browser';
import { ServiceWorkerModule } from '@angular/service-worker';
import { RouterModule, Routes } from '@angular/router';

import { Angulartics2Module } from 'angulartics2';
import { Angulartics2GoogleAnalytics } from 'angulartics2/ga';

import { FgMaterialModule } from './module/fg-material/fg-material.module';

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

/**
 * Routes for PowerBot application
 */
const appRoutes: Routes = [
  /**
   * Empty route goes to dashboard
   */
  { path: '', component: DashboardComponent },
  /**
   * Routes to dashboard-components full-page views
   */
  { path: 'asks', component: AsksComponent },
  { path: 'bids', component: BidsComponent },
  { path: 'orderbook', component: OrderbookComponent },
  { path: 'orders', component: OrdersComponent },
  { path: 'portfolio', component: PortfolioComponent },
  { path: 'product-history', component: ProductHistoryComponent },
  { path: 'signals', component: SignalsComponent },
  { path: 'trades', component: TradesComponent },
  /**
   * All routes that do not match any route after
   * checking the ones above, are redirected to
   * dashboard view
   */
  { path: '**', redirectTo: ''}
];
/**
 * PowerBot Application Module -
 * The angular-applications main angular-module bundeling
 * it's framework-code, configuring it's imports and exports
 * and setting it up for execution.
 */
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
    FgMaterialModule,
    ServiceWorkerModule.register('./ngsw-worker.js', { enabled: environment.production }),
    RouterModule.forRoot(
      appRoutes,
      /**
       * Tracing should be used for debbuging purposes only -
       * should be configured to be enabled
       * for non-production environments only
       */
      { enableTracing: environment.production ? false : true }
    ),
    Angulartics2Module.forRoot([Angulartics2GoogleAnalytics]),
  ],
  providers: [],
  entryComponents: [
    AsksComponent,
    BidsComponent,
    DashboardComponent,
    OrderbookComponent,
    OrdersComponent,
    PortfolioComponent,
    ProductHistoryComponent,
    SignalsComponent,
    TradesComponent,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
