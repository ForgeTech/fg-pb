import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { environment } from '../environments/environment';
import { BrowserModule } from '@angular/platform-browser';
import { ServiceWorkerModule } from '@angular/service-worker';
import { RouterModule, Routes } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoggerModule, NgxLoggerLevel } from 'ngx-logger';
import { PrettyJsonModule } from 'angular2-prettyjson';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { MAT_DIALOG_DEFAULT_OPTIONS } from '@angular/material';
// import { PbDatatableModule } from './module/pb-datatable/pb-datatable.module'
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import {
  TranslateModule,
  TranslateLoader,
  TranslateService,
  MissingTranslationHandler,
  MissingTranslationHandlerParams
} from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Angulartics2Module } from 'angulartics2';
import { Angulartics2GoogleAnalytics } from 'angulartics2/ga';
import { ChartModule } from 'angular-highcharts';
import { FgMaterialModule } from './module/fg-material/fg-material.module';
import { ApiModule } from './module/pb-api';

import { FgGlobalScopeModule } from './module/fg-global-scope/fg-global-scope.module';
import { FgComponentBaseService } from './component/fg-component-base/fg-component-base.service';
import { FgEventService } from './service/fg-event/fg-event.service';
import { FgActionsComponent } from './component/fg-actions/fg-actions.component';
import { FgAppService } from './app.service';
import { FgKeyboardService } from './service/fg-keyboard/fg-keyboard.service';
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
import { LoginViewComponent } from './view/login/login.component';

import { BarStateComponent } from './component/bar-state/bar-state.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { FooterComponent } from './component/footer/footer.component';
import { GraphComponent } from './component/graph/graph.component';
import { GraphPortfolioComponent } from './component/graph-portfolio/graph-portfolio.component';
import { GraphProductHistoryComponent } from './component/graph-product-history/graph-product-history.component';
import { GraphSignalHistoryComponent } from './component/graph-signal-history/graph-signal-history.component';
import { HeaderComponent } from './component/header/header.component';
import { ModalComponent } from './component/modal/modal.component';
import { ModalAddOrderComponent } from './component/modal-add-order/modal-add-order.component';
import { ModalHelpComponent } from './component/modal-help/modal-help.component';
import { ModalApiKeyComponent } from './component/modal-api-key/modal-api-key.component';
  import { TabApiKeyComponent } from './component/modal-api-key/tab-api-key/tab-api-key.component';
import { ModalSettingsComponent } from './component/modal-settings/modal-settings.component';
  import { TabLoggingComponent } from './component/modal-settings/tab-logging/tab-logging.component';
  import { TabProductionComponent } from './component/modal-settings/tab-production/tab-production.component';
  import { TabTestComponent } from './component/modal-settings/tab-test/tab-test.component';
import { TableComponent } from './component/table/table.component';
import { TableAsksComponent } from './component/table-asks/table-asks.component';
import { TableBidsComponent } from './component/table-bids/table-bids.component';
import { TableOrderbookComponent } from './component/table-orderbook/table-orderbook.component';
import { TableOrdersComponent } from './component/table-orders/table-orders.component';
import { TableSignalsComponent } from './component/table-signals/table-signals.component';
import { TableTradesComponent } from './component/table-trades/table-trades.component';
import { TableLogsComponent } from './component/table-logs/table-logs.component';
import { TableContractDetailsComponent } from './component/table-contract-details/table-contract-details.component';
import { PbIconValidationComponent } from './component/pb-icon-validation/pb-icon-validation.component';
import { PwaInstallComponent } from './component/pwa-install/pwa-install.component';
import { TableAddOrderComponent } from './component/table-add-order/table-add-order.component';
import { PbSidePipe } from './pipe/pb-side/pb-side.pipe';
import { FgEnumPipe } from './pipe/fg-enum/fg-enum.pipe';
import { FgInputComponent } from './component/fg-input/fg-input/fg-input.component';
import { ConnectedGuard } from './guard/connected-guard.service';
import { FgCardComponent } from './component/fg-card/fg-card.component';
import { SyncMatchFieldlValidator } from './validators/sync-match-field.validator';
import { AsyncUrlRespondsValidator } from './validators/async-url-responds.validator';
import { AsyncUrlApiKeyRespondsValidator } from './validators/async-url-api-key-responds.validator';
import { FgGraphqlModule } from './module/fg-graphql/fg-graphql.module';

/**
 * Routes for PowerBot application
 */
const appRoutes: Routes = [
  /**
   * Empty route goes to dashboard
   */
  { path: 'login', component: LoginViewComponent },
  /**
   * Routes to dashboard-components full-page views
   */
  { path: 'dashboard', component: DashboardViewComponent, canActivate: [ConnectedGuard] },
  { path: 'asks', component: AsksViewComponent, canActivate: [ConnectedGuard] },
  { path: 'bids', component: BidsViewComponent, canActivate: [ConnectedGuard]},
  { path: 'orderbook', component: OrderbookViewComponent, canActivate: [ConnectedGuard] },
  { path: 'orders', component: OrdersViewComponent, canActivate: [ConnectedGuard] },
  { path: 'portfolio', component: PortfolioViewComponent, canActivate: [ConnectedGuard] },
  { path: 'product-history', component: ProductHistoryViewComponent, canActivate: [ConnectedGuard] },
  { path: 'signals', component: SignalsViewComponent, canActivate: [ConnectedGuard] },
  { path: 'trades', component: TradesViewComponent, canActivate: [ConnectedGuard] },
  /**
   * All routes that do not match any route after
   * checking the ones above, are redirected to
   * dashboard view
   */
  { path: '**', redirectTo: '/login'}
];

// AoT requires an exported function for factories
export function HttpLoaderFactory(httpClient: HttpClient) {
  return new TranslateHttpLoader(httpClient, './assets/i18n/');
}

export class PbMissingTranslationHandler implements MissingTranslationHandler {
  handle(params: MissingTranslationHandlerParams) {
    return 'Translation not found!';
  }
}

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
    LoginViewComponent,

    BarStateComponent,
    DashboardComponent,
    FooterComponent,
    GraphComponent,
    GraphPortfolioComponent,
    GraphProductHistoryComponent,
    GraphSignalHistoryComponent,
    HeaderComponent,
    ModalComponent,
    ModalAddOrderComponent,
    ModalHelpComponent,
    ModalApiKeyComponent,
    ModalSettingsComponent,
      TabProductionComponent,
      TabApiKeyComponent,
      TabLoggingComponent,
      TabProductionComponent,
      TabTestComponent,
    TableComponent,
    // DatatableCustomComponent,
    TableTradesComponent,
    TableAsksComponent,
    TableBidsComponent,
    TableOrdersComponent,
    TableSignalsComponent,
    TableOrderbookComponent,
    PwaInstallComponent,
    PbIconValidationComponent,
    TableAddOrderComponent,
    PbSidePipe,
    FgEnumPipe,
    FgInputComponent,
    TableLogsComponent,
    TableContractDetailsComponent,
    FgCardComponent,
    SyncMatchFieldlValidator
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    PerfectScrollbarModule,
    PrettyJsonModule,
    NgxDatatableModule,
    // PbDatatableModule,
    NgxChartsModule,
    ChartModule,
    CommonModule,
    FlexLayoutModule,
    FgGlobalScopeModule.forBrowser(),
    FgMaterialModule,
    TranslateModule.forRoot({
      missingTranslationHandler: {
        provide: MissingTranslationHandler, useClass: PbMissingTranslationHandler
      },
      useDefaultLang: false,
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    ApiModule,
    LoggerModule.forRoot({
      level: environment.production ? NgxLoggerLevel.ERROR : NgxLoggerLevel.WARN,
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
    Angulartics2Module.forRoot(),
    FgGraphqlModule.forRoot(),
  ],
  providers: [
    Angulartics2GoogleAnalytics,
    FgComponentBaseService,
    FgAppService,
    FgEventService,
    PbDataService,
    FgKeyboardService,
    TranslateService,
    ConnectedGuard,
    AsyncUrlRespondsValidator,
    AsyncUrlApiKeyRespondsValidator
  ],
  entryComponents: [
    LoginViewComponent,
    ModalAddOrderComponent,
    ModalHelpComponent,
    ModalSettingsComponent,
    ModalApiKeyComponent,
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
export class AppModule {}
