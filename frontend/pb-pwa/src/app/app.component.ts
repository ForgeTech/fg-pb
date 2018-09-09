import { Component, OnInit, OnChanges, AfterViewInit, OnDestroy, SimpleChanges } from '@angular/core';
// import { Routes, Router } from '@angular/router';
import { FgComponentBaseService } from './component/fg-component-base/fg-component-base.service';
import { FgAppService } from './app.service';
import { environment } from './../environments/environment';
import { FgEvent } from './class/fg-class.export';
// import { FgEventSubscriber } from './service/fg-event/fg-event-subscriber.abstract-class';
import { Angulartics2GoogleAnalytics } from 'angulartics2/ga';
import {
  FgComponentBaseEvent,
  FgEntityEvent,
  PbAppEvent
} from './event/fg-events.export';
import { FgComponentBaseComponent } from './component/fg-component-base/fg-component-base.component';
import { NGXLogger as FgLogService } from 'ngx-logger';
import { MatDialog } from '@angular/material';
import { ConfigPowerbot } from './entity/entity.export';
import { Subscription } from 'rxjs';
import {
LogEntity,
MarketEntity,
MessageEntity,
OrderEntity,
SignalEntity,
TradeEntity,
} from './entity/entity.export';
import { ModalSettingsComponent } from './component/modal-settings/modal-settings.component';
import { ModalHelpComponent } from './component/modal-help/modal-help.component';
import { ModalMarketComponent } from './component/modal-market/modal-market.component';
import { ModalAddOrderComponent } from './component/modal-add-order/modal-add-order.component';

/**
  * The application-component loaded by angular-module bootstrap
  */
@Component({
  selector: 'pb-pwa',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent // extends FgEventSubscriber
  implements OnInit, OnChanges, AfterViewInit, OnDestroy {
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
  // protected $router: Router;
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
  * CONSTRUCTOR
  */
  constructor(
    angulartics2GoogleAnalytics: Angulartics2GoogleAnalytics,
    $dialog: MatDialog,
    // $router: Router,
    $app: FgAppService,
    $log: FgLogService,
    $component: FgComponentBaseService
  ) {
    // super(
    //   $log,
    //   $component.$event
    // );
    this.$dialog = $dialog;
    this.$component = $component;
    this.$app = $app;
    // this.$router = $router;
    // this.eventsToSubscribe = [
      // [ FgProjectEvent.SyncForge, this.addEntity() ],
    // ];

    // Initialize powerbot-application
    // Set powerbot-config on at dataservice
    this.$app.$data.initConfigFromStorage().then( powerbot => {
      try {
        Object.assign( powerbot.config, environment.powerbot.config );
        this.$app.$log.warn( 'Powerbot configuration set from environment-file!' );
        console.log(environment);
        console.log(this.$app.$data.$powerbot.config);
      } catch ( error ) {
        this.$app.$log.info( `Environment didn't overreide Powerbot configuration!` );
      }
      this.$app.$event.emit( new FgEvent( PbAppEvent.OPEN_CONNECTION_MODAL ) );
    } );
    /**
     * TODO Only open modal when connection config data isn't set
     */
    // this.$app.$log.warn('Dispatch Connect_API');
    // this.$app.$event.emit( new FgEvent( PbAppEvent.CONNECT_API ) );

    const modal_config = {
      panelClass: 'pb-panel',
      height: '90vh',
      width: '90vw',
    };
    // Register event to open connection modal
    this.$component.$event.event$
    .filter( event => event.signature === PbAppEvent.OPEN_CONNECTION_MODAL )
    .subscribe( event => {
      this.$app.$log.warn('OPEN CONNECTION MODAL');
      this.$dialog.open( ModalSettingsComponent, modal_config );
    });
    // Register event to open market modal
    this.$component.$event.event$
    .filter( event => event.signature === PbAppEvent.OPEN_MARKET_MODAL )
    .subscribe( event => {
      this.$app.$log.warn('OPEN MARKET MODAL!');
      this.$dialog.open( ModalMarketComponent, modal_config );
    });
    // Register event to open add-order modal
    this.$component.$event.event$
    .filter( event => event.signature === PbAppEvent.OPEN_ADD_ORDER_MODAL )
    .subscribe( event => {
      this.$app.$log.warn('OPEN ADD-ORDER MODAL!');
      this.$dialog.open( ModalAddOrderComponent, modal_config );
    });
    // Register event to open help modal
    this.$component.$event.event$
    .filter( event => event.signature === PbAppEvent.OPEN_HELP_MODAL )
    .subscribe( event => {
      this.$app.$log.warn('OPEN HELP MODAL!');
      this.$dialog.open( ModalHelpComponent, modal_config );
    });
    // Register event for connecting to API
    this.$component.$event.event$
    .filter(event => event.signature === PbAppEvent.CONNECT_API)
    .subscribe( event => {
      this.$app.$log.warn('CONNECT API!');
      console.log( event );
      // Start polling data from backend
      this.startDataPolling();
    });
    // Register event to disconnect from API
    this.$component.$event.event$
    .filter(event => event.signature === PbAppEvent.DISCONNECT_API)
    .subscribe( event => {
      this.$app.$log.warn('DISCONNECT API!');
    });
    // Register event to connect to market
    this.$component.$event.event$
    .filter(event => event.signature === PbAppEvent.CONNECT_MARKET)
    .subscribe( event => {
      this.$app.$log.warn('CONNECT MARKET!');
    });
    // Register event to disconnect from market
    this.$component.$event.event$
    .filter(event => event.signature === PbAppEvent.DISCONNECT_MARKET)
    .subscribe( event => {
      this.$app.$log.warn('DISCONNECT MARKET!');
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
      this.$app.$log.info('Received Polling-Data:');
      this.$app.$log.info(appData);
      // Merge and override $powerbot data
      // https://stackoverflow.com/questions/36384351/angular-2-merging-extending-objects
      this.$app.$data.$powerbot = { ...this.$app.$data.$powerbot, ...appData };
    }).catch(error => {
      this.$app.$log.error(error);
    });
  }
  /**
   * Setup and subscribe to polling application-data
   */
  protected startDataPolling(): void {
    this.timerSubscribtion = this.$app.$data.getPollingTimer().subscribe(x => {
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
  // protected emitEvent(signature: string, dispatcher: any, data: any = false, options: any = false) {
  //   const eventToDispatch: FgEvent = new FgEvent(signature, dispatcher, data, options);
  //   // Emit global event-service
  //   this.$component.$event.emit(eventToDispatch);
  // }
  protected emitEvent(signature: string, dispatcher: any, data: any = false, options: any = false) {
    console.log();
  }
}
