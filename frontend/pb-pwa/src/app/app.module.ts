import { NgModule } from '@angular/core';
import { CommonModule, NgTemplateOutlet } from '@angular/common';
import { environment } from '../environments/environment';
import { BrowserModule } from '@angular/platform-browser';
import { ServiceWorkerModule } from '@angular/service-worker';
import { RouterModule, Routes } from '@angular/router';
import { FlexLayoutModule } from "@angular/flex-layout";

import { Angulartics2Module } from 'angulartics2';
import { Angulartics2GoogleAnalytics } from 'angulartics2/ga';
import { ChartModule } from 'angular-highcharts';

import { FgMaterialModule } from './module/fg-material/fg-material.module';

import { AppComponent } from './app.component';

import { AsksViewComponent } from './view/asks/asks.component';
import { BidsViewComponent } from './view/bids/bids.component';
import { DashboardViewComponent } from './view/dashboard/dashboard.component';
import { OrderbookViewComponent } from './view/orderbook/orderbook.component';
import { OrdersViewComponent } from './view/orders/orders.component';
import { PortfolioViewComponent } from './view/portfolio/portfolio.component';
import { ProductHistoryViewComponent } from './view/product-history/product-history.component';
import { SignalsViewComponent } from './view/signals/signals.component';
import { TradesViewComponent } from './view/trades/trades.component';

import { BarStatusComponent } from './component/bar-status/bar-status.component';
import { CardDashboardComponent } from './component/card-dashboard/card-dashboard.component';
import { CardViewComponent } from './component/card-view/card-view.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { FooterComponent } from './component/footer/footer.component';
import { GraphComponent } from './component/graph/graph.component';
import { GraphPortfolioComponent } from './component/graph-portfolio/graph-portfolio.component';
import { GraphProductHistoryComponent } from './component/graph-product-history/graph-product-history.component';
import { HeaderComponent } from './component/header/header.component';
import { ModalComponent } from './component/modal/modal.component';
import { ModalLoginComponent } from './component/modal-login/modal-login.component';
import { ModalLogoutComponent } from './component/modal-logout/modal-logout.component';
import { ModalSettingsComponent } from './component/modal-settings/modal-settings.component';
  import { TabApiKeyComponent } from './component/modal-settings/tab-api-key/tab-api-key.component';
  import { TabLoggingComponent } from './component/modal-settings/tab-logging/tab-logging.component';
  import { TabProductionComponent } from './component/modal-settings/tab-production/tab-production.component';
  import { TabTestComponent } from './component/modal-settings/tab-test/tab-test.component';
import { SwitchDayNightComponent } from './component/switch-day-night/switch-day-night.component';
import { TableComponent } from './component/table/table.component';
import { TableAsksComponent } from './component/table-asks/table-asks.component';
import { TableBidsComponent } from './component/table-bids/table-bids.component';
import { TableOrderbookComponent } from './component/table-orderbook/table-orderbook.component';
import { TableOrdersComponent } from './component/table-orders/table-orders.component';
import { TableSignalsComponent } from './component/table-signals/table-signals.component';
import { TableTradesComponent } from './component/table-trades/table-trades.component';

import { FgComponentBaseService } from './component/fg-component-base/fg-component-base.service';
import { LoggerModule, NgxLoggerLevel } from 'ngx-logger';
import { FgEventService } from './service/fg-event/fg-event.service';
/**
 * Routes for PowerBot application
 */
const appRoutes: Routes = [
  /**
   * Empty route goes to dashboard
   */
  { path: '', component: DashboardViewComponent },
  /**
   * Routes to dashboard-components full-page views
   */
  { path: 'asks', component: AsksViewComponent },
  { path: 'bids', component: BidsViewComponent },
  { path: 'orderbook', component: OrderbookViewComponent },
  { path: 'orders', component: OrdersViewComponent },
  { path: 'portfolio', component: PortfolioViewComponent },
  { path: 'product-history', component: ProductHistoryViewComponent },
  { path: 'signals', component: SignalsViewComponent },
  { path: 'trades', component: TradesViewComponent },
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
    AsksViewComponent,
    BidsViewComponent,
    DashboardViewComponent,
    OrderbookViewComponent,
    OrdersViewComponent,
    PortfolioViewComponent,
    ProductHistoryViewComponent,
    SignalsViewComponent,
    TradesViewComponent,

    BarStatusComponent,
    CardDashboardComponent,
    CardViewComponent,
    DashboardComponent,
    FooterComponent,
    GraphComponent,
    GraphPortfolioComponent,
    GraphProductHistoryComponent,
    HeaderComponent,
    ModalComponent,
    ModalLoginComponent,
    ModalLogoutComponent,
    ModalSettingsComponent,
      TabProductionComponent,
      TabApiKeyComponent,
      TabLoggingComponent,
      TabProductionComponent,
      TabTestComponent,
    SwitchDayNightComponent,
    TableComponent,
    TableTradesComponent,
    TableAsksComponent,
    TableBidsComponent,
    TableOrdersComponent,
    TableSignalsComponent,
    TableOrderbookComponent,
  ],
  imports: [
    BrowserModule,
    LoggerModule.forRoot({
      // serverLoggingUrl: '/api/logs',
      level: NgxLoggerLevel.INFO,
      // serverLogLevel: NgxLoggerLevel.ERROR
    }),
    CommonModule,
    FgMaterialModule,
    FlexLayoutModule,
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
    ChartModule
  ],
  providers: [
    FgComponentBaseService,
    FgEventService
  ],
  entryComponents: [
    AsksViewComponent,
    BidsViewComponent,
    DashboardViewComponent,
    OrderbookViewComponent,
    OrdersViewComponent,
    PortfolioViewComponent,
    ProductHistoryViewComponent,
    SignalsViewComponent,
    TradesViewComponent,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
