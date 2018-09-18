import { Component, OnInit, OnChanges, AfterViewInit, OnDestroy, SimpleChanges, HostListener } from '@angular/core';
import { FgAppService } from './app.service';
import { environment } from './../environments/environment';
import { FgEvent } from './class/fg-class.export';
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
import { AppEnv } from './entity/app-state.entity';

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
   * Holds a reference to the basic forge init-service
   */
  public $app: FgAppService;
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
   * Listen to keyboard-events on global window-object and forward
   * them to keyboard-event filter who will publish them to
   * event-service observable according to object defined logic
   * @param event KeyboardEvent
   */
  @HostListener('window:keydown', ['$event'])
  handleKeyDown(event: KeyboardEvent) {
    this.$app.$log.warn('KeyDown-Event:', event.key);
  }
  /**
   * Listen to keyboard-events on global window-object and forward
   * them to keyboard-event filter who will publish them to
   * event-service observable according to object defined logic
   * @param event KeyboardEvent
   */
  @HostListener('window:keyup', ['$event'])
  handleKeyUp(event: KeyboardEvent) {
    this.$app.$log.warn('KeyUp-Event:', event.key);
  }
  // TODO: Translation test
  public param = { value: 'world' };
  /**
  * CONSTRUCTOR
  */
  constructor(
    angulartics2GoogleAnalytics: Angulartics2GoogleAnalytics,
    $dialog: MatDialog,
    // $router: Router,
    $app: FgAppService,
    $log: FgLogService,
  ) {
    // super(
    //   $log,
    //   $component.$event
    // );
    this.$dialog = $dialog;
    this.$app = $app;
    // This language will be used as a fallback when a
    // translation isn't found in the current language
    this.$app.$log.warn('Set default language from environment-file');
    this.$app.$translate.setDefaultLang(environment.lang);

    // Initialize powerbot-application
    // Set powerbot-config on at dataservice
    this.$app.$data.recoverFromStorage().then( powerbot => {
      try {
        Object.assign( powerbot.config, environment.powerbot.config );
        this.$app.$log.warn( 'Powerbot configuration set from environment-file!' );
        console.log(this.$app.$data.app.config);
        // the lang to use, if the lang isn't available,
        // it will use the current loader to get them
        this.$app.$log.warn( 'Set language from powerbot configuration' );
        this.$app.$translate.use(this.$app.$data.app.config.lang);
      } catch ( error ) {
        this.$app.$log.info( `Environment didn't override powerbot configuration!` );
      }
    } );
    // Open Connection-Modal on application startup
    this.$app.$event.emit( new FgEvent( PbAppEvent.OPEN_CONNECTION_MODAL ) );

    const modal_config = {
      panelClass: 'pb-panel',
      height: '90vmin',
      width: '90vmax',
      data: {}
    };
    // Register event to open connection modal
    this.$app.$event.event$
    .filter( event => event.signature === PbAppEvent.OPEN_CONNECTION_MODAL )
    .subscribe( event => {
      this.$app.$log.warn('OPEN CONNECTION MODAL');
      this.$dialog.open( ModalSettingsComponent, modal_config );
    });
    // Register event to open market modal
    this.$app.$event.event$
    .filter( event => event.signature === PbAppEvent.OPEN_MARKET_MODAL )
    .subscribe( event => {
      this.$app.$log.warn('OPEN MARKET MODAL!');
      this.$dialog.open( ModalMarketComponent, modal_config );
    });
    // Register event to open add-order modal
    this.$app.$event.event$
    .filter( event => event.signature === PbAppEvent.OPEN_ADD_ORDER_MODAL )
    .subscribe( event => {
      this.$app.$log.warn('OPEN ADD-ORDER MODAL!');
      this.$dialog.open( ModalAddOrderComponent, modal_config );
    });
    // Register event to open help modal
    this.$app.$event.event$
    .filter( event => event.signature === PbAppEvent.OPEN_HELP_MODAL )
    .subscribe( event => {
      this.$app.$log.warn('OPEN HELP MODAL!');
      this.$dialog.open( ModalHelpComponent, modal_config );
    });
    // Register event for connecting to API
    this.$app.$event.event$
    .filter(event => event.signature === PbAppEvent.CONNECT_API_TEST)
    .subscribe( event => {
      this.$app.$log.warn('CONNECT API TEST!');
      console.log( event );
      // Start polling data from backend
      this.$app.$data.connect( AppEnv.Live_Test );
    });
    // Register event for connecting to API
    this.$app.$event.event$
    .filter(event => event.signature === PbAppEvent.CONNECT_API_PROD)
    .subscribe( event => {
      this.$app.$log.warn('CONNECT API PRODUCTION!');
      console.log( event );
      // Start polling data from backend
      this.$app.$data.connect( AppEnv.Live_Prod );
    });
    // Register event to disconnect from API
    this.$app.$event.event$
    .filter(event => event.signature === PbAppEvent.DISCONNECT_API)
    .subscribe( event => {
      this.$app.$log.warn('DISCONNECT API!');
      this.$app.$data.disconnect();
    });
    // Register event to connect to market
    this.$app.$event.event$
    .filter(event => event.signature === PbAppEvent.CONNECT_MARKET)
    .subscribe( event => {
      this.$app.$log.warn('CONNECT MARKET!');
    });
    // Register event to disconnect from market
    this.$app.$event.event$
    .filter(event => event.signature === PbAppEvent.DISCONNECT_MARKET)
    .subscribe( event => {
      this.$app.$log.warn('DISCONNECT MARKET!');
    });
    // Register the events that should be logged from emit-funciton
    this.$app.$event.registerEventsToLog([
      PbAppEvent.CONNECT_API_TEST,
      PbAppEvent.CONNECT_API_PROD,
      PbAppEvent.CONNECT_MARKET,
      PbAppEvent.DISCONNECT_API,
      PbAppEvent.DISCONNECT_MARKET,
      // FgComponentBaseEvent.CLICK,
      // FgComponentBaseEvent.FOCUS_IN,
      // FgComponentBaseEvent.FOCUS_OUT,
      // FgComponentBaseEvent.CREATE,
      FgComponentBaseEvent.SELECTED,
      // FgComponentBaseEvent.EDIT,
      // FgComponentBaseEvent.DELETE,
      // FgComponentBaseEvent.LOCK,
      // FgComponentBaseEvent.EXPORT,
      // FgComponentBaseEvent.PRINT,
    ]);
  }
  /**
   * Implements methode for component life-cycle OnInit-Interface.
   */
  public ngOnInit() {
    this.$app.$log.log('ngOnInit: ');
    this.logComponentInfoToConsole();
    this.emitEvent(FgComponentBaseEvent.ON_INIT, this, this);
  }
  /**
   * Implements methode for component life-cycle AfterViewInit-Interface.
   */
  public ngAfterViewInit() {
    this.$app.$log.log('ngAfterViewInit: ');
    // this.$app.$log.info(this._FORGE);
    this.logComponentInfoToConsole();
    this.emitEvent(FgComponentBaseEvent.AFTER_VIEW, this, this);
  }
  /**
   * Implements methode for component life-cycle OnChange-Interface.
   * @param changes
   */
  public ngOnChanges(changes: SimpleChanges) {
    this.$app.$log.log('ngOnChanges: ');
    this.logComponentInfoToConsole();
    this.emitEvent(FgComponentBaseEvent.ON_CHANGES, this, changes);
    this.emitEvent(FgEntityEvent.SYNC, this, this);
  }
  /**
   * Implements methode for component life-cycle OnInit-Interface.
   */
  public ngOnDestroy() {
    this.$app.$log.log('ngOnDestroy: ');
    this.logComponentInfoToConsole();
    this.emitEvent(FgComponentBaseEvent.ON_DESTROY, this, this);
  }
  /**
   * Methode prints value of a components common information to console.
   */
  private logComponentInfoToConsole() {
    this.$app.$log.log(this);
  }
  /**
   * Dispatch an event via global event-service and component event-emitter
   */
  // protected emitEvent(signature: string, dispatcher: any, data: any = false, options: any = false) {
  //   const eventToDispatch: FgEvent = new FgEvent(signature, dispatcher, data, options);
  //   // Emit global event-service
  //   this.$app.$event.emit(eventToDispatch);
  // }
  protected emitEvent(signature: string, dispatcher: any, data: any = false, options: any = false) {
    console.log();
  }
}
