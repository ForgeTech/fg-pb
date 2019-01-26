import { Component, HostListener } from '@angular/core';
import { FgAppService } from './app.service';
import { Angulartics2GoogleAnalytics } from 'angulartics2/ga';
import { PbAppEvent } from './event/fg-events.export';
import { FgComponentBaseComponent } from './component/fg-component-base/fg-component-base.component';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { Subject } from 'rxjs';
import { ModalHelpComponent } from './component/modal-help/modal-help.component';
import { ModalAddOrderComponent } from './component/modal-add-order/modal-add-order.component';
import { AppEnv } from './entity/app-state.entity';
import { Router } from '@angular/router';
import { ModalApiKeyComponent } from './component/modal-api-key/modal-api-key.component';
import { environment } from './../environments/environment';

/**
  * The application-component loaded by angular-module bootstrap
  */
@Component({
  selector: 'pb-pwa',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  /**
   * Holds reference to the component currently holding focus
   */
  protected _focusComponent: FgComponentBaseComponent;
  public focusComponent$: Subject<FgComponentBaseComponent> = new Subject();
  public set focusComponent(focusComponent: FgComponentBaseComponent) {
    this._focusComponent = focusComponent;
    this.focusComponent$.next(this._focusComponent);
  }
  // public get focusComponent(): FgComponentBaseComponent {
  //   return this._selectedComponent;
  // }
  protected focusComponentEntity: any; // IFgComponentBaseAbstractEntityInterface;
  /**
   * Holds reference to the last selected-component entity. This differs from
   * active-component in the way, that the component stays selected - even
   * if focus is lost, for example - if focus is automatically set on a
   * toolbar on selection.
   */
  protected _selectedComponent: FgComponentBaseComponent;
  public selectedComponent$: Subject<FgComponentBaseComponent> = new Subject();
  public set selectedComponent( selectedComponent: FgComponentBaseComponent ) {
    this._selectedComponent = selectedComponent;
    this.selectedComponent$.next( this._selectedComponent);
  }
  // public get selectedComponent(): FgComponentBaseComponent {
  //  return this._selectedComponent;
  // }
  public selectedComponentEntity: any; // IFgComponentBaseAbstractEntityInterface;
  /**
   * Listen to keyboard-events on global window-object and forward
   * them to keyboard-event filter who will publish them to
   * event-service observable according to object defined logic
   * @param event KeyboardEvent
   */
  @HostListener('window:keydown', ['$event'])
  handleKeyDown(event: KeyboardEvent) {
    this.$app.$keyboard.keyDown( event );
  }
  /**
   * Listen to keyboard-events on global window-object and forward
   * them to keyboard-event filter who will publish them to
   * event-service observable according to object defined logic
   * @param event KeyboardEvent
   */
  @HostListener('window:keyup', ['$event'])
  handleKeyUp(event: KeyboardEvent) {
    this.$app.$keyboard.keyUp( event );
  }
  /**
  * CONSTRUCTOR
  */
  constructor(
    /**
     * Import angulartics-service for google analytics
     */
    protected $angulartics2GoogleAnalytics: Angulartics2GoogleAnalytics,
    /**
     * Holds a reference to the basic forge init-service
     */
    public $app: FgAppService,
    /**
     * Import angular router-service
     */
    public $router: Router,
    /**
     * Hold reference to angular-material dialog-utils
     */
    protected $dialog: MatDialog
  ) {
    if( environment.name !== 'Development' ){
      this.$angulartics2GoogleAnalytics.startTracking();
    }
    this.$dialog = $dialog;
    this.$app = $app;
    // Set array of available languages
    this.$app.$translate.addLangs(['en']);
    // This language will be used as a fallback when a
    // translation for set language isn't found
    this.$app.$translate.setDefaultLang('en');
    // Set defaultLang to active Lang, until user configuration was loaded.
    this.$app.$translate.use('en');
    // Get language configured in browser and set it if available
    // const browserLang = this.$app.$translate.getBrowserLang();
    // this.$app.$translate.use(
    //   this.$app.$translate.getLangs().indexOf(browserLang) ? browserLang : this.$app.$data.$env.lang
    // );

    const modal_config: MatDialogConfig = {
      panelClass: 'pb-panel',
      height: '90%',
      width: '80vmax',
      maxWidth: '640px',
      autoFocus: true,
      data: {}
    };
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
    // Register event to open help modal
    this.$app.$event.event$
    .filter( event => event.signature === PbAppEvent.OPEN_API_KEY_MODAL )
    .subscribe( event => {
      this.$app.$log.warn('OPEN API MODAL!');
      modal_config.data = event.data;
      this.$dialog.open( ModalApiKeyComponent, modal_config );
    });
    // Register event for connecting to API
    this.$app.$event.event$
    .filter(event => event.signature === PbAppEvent.CONNECT_API_TEST)
    .subscribe( event => {
      this.$app.$log.warn('CONNECT API TEST!');
      // Start polling data from backend
      this.$app.$data.connect(AppEnv.Live_Test);
      this.$router.navigate(['/dashboard']);
    });
    // Register event for connecting to API
    this.$app.$event.event$
    .filter(event => event.signature === PbAppEvent.CONNECT_API_PROD)
    .subscribe( event => {
      this.$app.$log.warn('CONNECT API PRODUCTION!');
      console.log( event );
      // Start polling data from backend
      this.$app.$data.connect(AppEnv.Live_Prod);
      this.$router.navigate(['/dashboard']);
    });
    // Register event to disconnect from API
    this.$app.$event.event$
    .filter(event => event.signature === PbAppEvent.DISCONNECT_API)
    .subscribe( event => {
      this.$app.$log.warn('DISCONNECT API!');
      this.$app.$data.disconnect();
      this.$router.navigate(['/login']);
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
      // FgComponentBaseEvent.SELECTED,
      // FgComponentBaseEvent.EDIT,
      // FgComponentBaseEvent.DELETE,
      // FgComponentBaseEvent.LOCK,
      // FgComponentBaseEvent.EXPORT,
      // FgComponentBaseEvent.PRINT,
    ]);
  }
}
