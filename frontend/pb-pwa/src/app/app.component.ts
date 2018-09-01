import { Component, OnInit, OnChanges, AfterViewInit, OnDestroy, SimpleChanges } from '@angular/core';
import { Routes, Router } from '@angular/router';
import { FgComponentBaseService } from './component/fg-component-base/fg-component-base.service';
import { FgAppService } from './app.service';
import { environment } from './../environments/environment';
import { FgEvent } from './class/fg-class.export';
import { FgEventSubscriber } from './service/fg-event/fg-event-subscriber.abstract-class';
import { Angulartics2GoogleAnalytics } from 'angulartics2/ga';
import {
  FgComponentBaseEvent,
  FgEntityEvent,
  PbAppEvent
} from './event/fg-events.export';
import { FgComponentBaseComponent } from './component/fg-component-base/fg-component-base.component';
import { NGXLogger as FgLogService } from 'ngx-logger';
import { MatDialog } from '@angular/material';
import { ModalSettingsComponent } from './component/modal-settings/modal-settings.component';
import { ConfigPowerbot, PowerBotEntity } from './entity/entity.export';
import { Subscription } from 'rxjs';
import {
LogEntity,
MarketEntity,
MessageEntity,
OrderEntity,
SignalEntity,
TradeEntity,
} from './entity/entity.export';
import { DashboardViewComponent } from './view/dashboard/dashboard.component';
import { AsksViewComponent } from './view/asks/asks.component';
import { BidsViewComponent } from './view/bids/bids.component';
import { OrderbookViewComponent } from './view/orderbook/orderbook.component';
import { OrdersViewComponent } from './view/orders/orders.component';
import { PortfolioViewComponent } from './view/portfolio/portfolio.component';
import { ProductHistoryViewComponent } from './view/product-history/product-history.component';
import { SignalsViewComponent } from './view/signals/signals.component';
import { TradesViewComponent } from './view/trades/trades.component';

/**
  * The application-component loaded by angular-module bootstrap
  */
@Component({
  selector: 'pb-pwa',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent extends FgEventSubscriber
  implements OnInit, OnChanges, AfterViewInit, OnDestroy {
  /**
   * Powerbot application-routes
   */
  private appRoutes: Routes = [
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
    { path: '**', redirectTo: '' }
  ];
  /**
   * Hold test-data configuration
   */
  public config: ConfigPowerbot;
  /**
   * Hold test-data configuration
   */
  public timerSubscribtion: Subscription;
  /**
   * Hold reference to angular-material dialog-utils
   */
  protected $dialog: MatDialog;
  /**
   * Hold reference to angular router-service instance
   */
  protected $router: Router;
  /**
   * Holds a reference to the basic forge component-service
   */
  public $component: FgComponentBaseService;
  /**
   * Holds a reference to the basic forge init-service
   */
  protected $app: FgAppService;
  /**
   * Holds reference to the currently active-component entity.
   * The active-component is the component that currently holds focus
   */
  protected activeComponentEntity: any; // IFgComponentBaseAbstractEntityInterface;
  protected activeComponent: FgComponentBaseComponent;
  /**
   * Holds reference to the last selected-component entity. This differs from
   * active-component in the way, that the component stays selected - even
   * if focus is lost, for example - if focus is automatically set on a
   * toolbar on selection.
   */
  public selectedComponent: FgComponentBaseComponent;
  public selectedComponentEntity: any; // IFgComponentBaseAbstractEntityInterface;

  /**
   * Reset the modules router-configuration with passed routes
   * and pass the data-attribute
   * https://stackoverflow.com/questions/42928030/is-it-possible-to-build-add-routes-dynamically-in-angular-2
   * @param routes A set of routes to reconfigure
   * @param data An object of data to pass to reconfigured routes
   */
  setRouteData(routes: Routes, data: any) {
    routes.forEach((route, index) => {
      route.data = data;
    });
    this.$router.config.push(...routes);
  }
  /**
  * CONSTRUCTOR
  */
  constructor(
    angulartics2GoogleAnalytics: Angulartics2GoogleAnalytics,
    $dialog: MatDialog,
    $router: Router,
    $app: FgAppService,
    $log: FgLogService,
    $component: FgComponentBaseService
  ) {
    super(
      $log,
      $component.$event
    );
    this.$dialog = $dialog;
    this.$component = $component;
    this.$app = $app;
    this.$router = $router;
    this.eventsToSubscribe = [
      // [ FgProjectEvent.SyncForge, this.addEntity() ],
    ];

    this.setRouteData(this.appRoutes, {});
    /**
     * TODO: Store and receive config from localstorage variable
     * if user has entered them before and checked remember box
     */
    this.config = new ConfigPowerbot();
    this.config.connection_test.api_key = '44fc8162-d2c6-432a-8279-d8d40e5c0e1b';
    this.config.connection_test.api_server_url = 'https://playground.powerbot-trading.com/api/v0';
    this.config.connection_test.cache_connection = true;
    // Set powerbot-config on at dataservice
    this.$app.$data.$powerbot.config = this.config;

    // Initialize powerbot-application
    /**
     * TODO Only open modal when connection config data isn't set
     */
    // this.$dialog.open(ModalSettingsComponent, {
    //     panelClass: 'pb-panel',
    //     height: '90vh',
    //     width: '90vw',
    //   } );
    // this.$dialog.open(ModalLoginComponent, {
    //     panelClass: 'pb-panel',
    //     height: '90vh',
    //     width: '90vw',
    //  } );

    this.$component.$event.subscribe( PbAppEvent.CONNECT_API, function() {
      return event => {
        // Fetch initial data
        this.fetchAppData();
        // Setup polling data from backend
        this.startDataPolling();
      };
    });
    this.$component.$event.subscribe( PbAppEvent.DISCONNECT_API, function() {
      return event => {  this.$app.$log.warn('DISCONNECT API!'); };
    });
    this.$component.$event.subscribe( PbAppEvent.CONNECT_MARKET, function() {
      return event => {  this.$app.$log.warn('CONNECT MARKET!'); };
    });
    this.$component.$event.subscribe( PbAppEvent.DISCONNECT_MARKET, function() {
        return event => { this.$app.$log.warn('DISCONNECT MARKET!'); };
    });

    // Register the events that should be logged from emit-funciton
    this.$component.$event.registerEventsToLog([
      PbAppEvent.CONNECT_API,
      PbAppEvent.CONNECT_MARKET,
      PbAppEvent.DISCONNECT_API,
      PbAppEvent.DISCONNECT_MARKET,
      // FgComponentBaseEvent.CLICK,
      // FgComponentBaseEvent.FOCUS_IN,
      // FgComponentBaseEvent.FOCUS_OUT,
      // FgComponentBaseEvent.CREATE,
      // FgComponentBaseEvent.SELECTED,
      // FgComponentBaseEvent.EDIT,
      // FgComponentBaseEvent.DELETE,
      // FgComponentBaseEvent.LOCK,
      // FgComponentBaseEvent.EXPORT,
      // FgComponentBaseEvent.PRINT,
    ]);
  }
  /**
   * Fetch and set application-data
   */
  protected fetchAppData(): void {
    this.$app.$data.fetchApplicationData().then(appData => {
      this.$log.info('Received Polling-Data:');
      this.$log.info(appData);
      // Merge and override $powerbot data
      // https://stackoverflow.com/questions/36384351/angular-2-merging-extending-objects
      this.$app.$data.$powerbot = { ...this.$app.$data.$powerbot, ...appData };
    }).catch(error => {
      this.$log.error(error);
    });
  }
  /**
   * Setup and subscribe to polling application-data
   */
  protected startDataPolling(): void {
    this.timerSubscribtion = this.$app.$data.getPollingTimer(10000, 10000).subscribe(x => {
      this.fetchAppData();
    });
  }
  /**
   * Unsubscribe from polling application-data
   */
  protected stopDataPolling(): void {
    this.timerSubscribtion.unsubscribe();
  }
  /**
   * TODO: Set active entity
   */
  protected setSelectedComponent(): (event: FgEvent) => void {
    return event => {
      // if (event.dispatcher) {
        // if (event.dispatcher && event.dispatcher['actions']) {
        this.selectedComponent = event.dispatcher as FgComponentBaseComponent;
        this.selectedComponentEntity = event.data as any; // IFgComponentBaseAbstractEntityInterface;
        console.log(this.selectedComponent);
      // }
    };
  }
  /**
   * TODO: Set active entity
   */
  protected setActiveComponent(): (event: FgEvent) => void {
    return event => {
      if (event.dispatcher && event.dispatcher['actions']) {
        this.activeComponent = event.dispatcher;
        this.activeComponentEntity = event.data;
      }
    };
  }
  /**
   * Implements methode for component life-cycle OnInit-Interface.
   */
  public ngOnInit() {
    this.$component.$log.log('ngOnInit: ');
    this.logComponentInfoToConsole();
    this.emitEvent(FgComponentBaseEvent.ON_INIT, this, this);
  }
  /**
   * Implements methode for component life-cycle AfterViewInit-Interface.
   */
  public ngAfterViewInit() {
    this.$component.$log.log('ngAfterViewInit: ');
    // this.$component.$log.info(this._FORGE);
    this.logComponentInfoToConsole();
    this.emitEvent(FgComponentBaseEvent.AFTER_VIEW, this, this);
  }
  /**
   * Implements methode for component life-cycle OnChange-Interface.
   * @param changes
   */
  public ngOnChanges(changes: SimpleChanges) {
    this.$component.$log.log('ngOnChanges: ');
    this.logComponentInfoToConsole();
    this.emitEvent(FgComponentBaseEvent.ON_CHANGES, this, changes);
    this.emitEvent(FgEntityEvent.SYNC, this, this);
  }
  /**
   * Implements methode for component life-cycle OnInit-Interface.
   */
  public ngOnDestroy() {
    this.$component.$log.log('ngOnDestroy: ');
    this.logComponentInfoToConsole();
    this.emitEvent(FgComponentBaseEvent.ON_DESTROY, this, this);
  }
  /**
   * Methode prints value of a components common information to console.
   */
  private logComponentInfoToConsole() {
    this.$component.$log.log(this);
  }
  /**
   * Dispatch an event via global event-service and component event-emitter
   */
  protected emitEvent(signature: string, dispatcher: any, data: any = false, options: any = false) {
    const eventToDispatch: FgEvent = new FgEvent(signature, dispatcher, data, options);
    // Emit global event-service
    this.$component.$event.emit(eventToDispatch);
  }
}
