import { NgModule } from '@angular/core';
import { CommonModule, NgTemplateOutlet } from '@angular/common';
import { environment } from '../environments/environment';
import { BrowserModule } from '@angular/platform-browser';
import { ServiceWorkerModule } from '@angular/service-worker';
import { RouterModule, Routes } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoggerModule, NgxLoggerLevel } from 'ngx-logger';
import { PrettyJsonModule } from 'angular2-prettyjson';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { NgForageModule, NgForageConfig } from 'ngforage';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';

import { Angulartics2Module } from 'angulartics2';
import { Angulartics2GoogleAnalytics } from 'angulartics2/ga';
import { ChartModule } from 'angular-highcharts';
import { FgMaterialModule } from './module/fg-material/fg-material.module';
import { ApiModule, ConfigurationParameters, Configuration } from './module/pb-api';

import { FgGlobalScopeModule } from './module/fg-global-scope/fg-global-scope.module';
import { FgComponentBaseService } from './component/fg-component-base/fg-component-base.service';
import { FgEventService } from './service/fg-event/fg-event.service';
import { FgActionsComponent } from './component/fg-actions/fg-actions.component';

import { FgAppService } from './app.service';
import { PbDataService } from './service/pb-data/pb-data.service';

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

import { BarStateComponent } from './component/bar-state/bar-state.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { FooterComponent } from './component/footer/footer.component';
import { GraphComponent } from './component/graph/graph.component';
import { GraphPortfolioComponent } from './component/graph-portfolio/graph-portfolio.component';
import { GraphProductHistoryComponent } from './component/graph-product-history/graph-product-history.component';
import { HeaderComponent } from './component/header/header.component';
import { ModalComponent } from './component/modal/modal.component';
import { ModalAddOrderComponent } from './component/modal-add-order/modal-add-order.component';
import { ModalHelpComponent } from './component/modal-help/modal-help.component';
import { ModalMarketComponent } from './component/modal-market/modal-market.component';
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
import { PwaInstallComponent } from './component/pwa-install/pwa-install.component';
import { MAT_DIALOG_DEFAULT_OPTIONS } from '@angular/material';
import { TableAddOrderComponent } from './component/table-add-order/table-add-order.component';
import { PbSidePipe } from './pipe/pb-side/pb-side.pipe';
import { FgEnumPipe } from './pipe/fg-enum/fg-enum.pipe';

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
    FgActionsComponent,
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

    BarStateComponent,
    DashboardComponent,
    FooterComponent,
    GraphComponent,
    GraphPortfolioComponent,
    GraphProductHistoryComponent,
    HeaderComponent,
    ModalComponent,
    ModalAddOrderComponent,
    ModalHelpComponent,
    ModalMarketComponent,
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
    PwaInstallComponent,
    TableAddOrderComponent,
    PbSidePipe,
    FgEnumPipe,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    PerfectScrollbarModule,
    PrettyJsonModule,
    NgxDatatableModule,
    ChartModule,
    CommonModule,
    FgMaterialModule,
    FlexLayoutModule,
    FgGlobalScopeModule.forBrowser(),
    NgForageModule.forRoot(),
    // NgForageModule.forRoot({
      // name: 'PowerBot',
      // driver: [ // defaults to indexedDB -> webSQL -> localStorage -> sessionStorage
      //   NgForageConfig.DRIVER_INDEXEDDB,
      //   NgForageConfig.DRIVER_LOCALSTORAGE
      // ]
    // }),
    ApiModule,
    LoggerModule.forRoot({
      // serverLoggingUrl: '/api/logs',
      level: environment.production ? NgxLoggerLevel.ERROR : NgxLoggerLevel.WARN,
      // serverLogLevel: NgxLoggerLevel.ERROR
    }),
    RouterModule.forRoot(
      appRoutes,
      /**
       * Tracing should be used for debbuging purposes only -
       * should be configured to be enabled
       * for non-production environments only
       */
      { enableTracing: environment.production ? false : true }
    ),
    ServiceWorkerModule.register('./ngsw-worker.js', { enabled: environment.production }),
    Angulartics2Module.forRoot([Angulartics2GoogleAnalytics]),
  ],
  providers: [
    FgComponentBaseService,
    FgAppService,
    FgEventService,
    PbDataService
  ],
  entryComponents: [
    ModalAddOrderComponent,
    ModalHelpComponent,
    ModalSettingsComponent,
    ModalMarketComponent,
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
