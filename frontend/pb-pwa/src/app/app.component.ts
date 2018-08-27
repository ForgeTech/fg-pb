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
  FgEntityEvent
} from './event/fg-events.export';
import { FgComponentBaseComponent } from './component/fg-component-base/fg-component-base.component';
import { NGXLogger as FgLogService } from 'ngx-logger';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ModalSettingsComponent } from './component/modal-settings/modal-settings.component';
import { ConfigPowerbot, PowerBot } from './entity/entity.export';

import {
Log,
Market,
Message,
Order,
Signal,
Trade,
} from './entity/entity.export';
import { ModalLoginComponent } from './component/modal-login/modal-login.component';

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
   * Hold test-data configuration
   */
  public config: ConfigPowerbot;
  /**
   * TODO: Hold test-data instances
   */
  public powerbot: PowerBot;
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
  protected $component: FgComponentBaseService;
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

    /**
     * TODO: Store and receive config from localstorage variable
     * if user has entered them before and checked remember box
     */
    this.config = new ConfigPowerbot();
    this.config.connection_test.api_key = '44fc8162-d2c6-432a-8279-d8d40e5c0e1b';
    this.config.connection_test.api_server_url = 'https://playground.powerbot-trading.com/api/v0';
    this.config.connection_test.cache_connection = true;

    // Setup polling data from backend
    /**
     * TODO: Dispatch data update event
     */
    this.$app.$data.getPollingTimer( 0, 5000 ).subscribe( x => {
      this.$log.warn('Polling Data');
      this.$app.$data.fetchApplicationData().then(appData => {
        this.powerbot = appData;
      }).catch( error  => {
        console.log('ERROR FETCHING INITIAL DATA');
        console.log(error);
      });
    });

    {

}

    // Initialize powerbot-application
    /**
     * TODO Only open modal when connection config data isn't set
     */
    this.$dialog.open(ModalSettingsComponent, {
        panelClass: 'pb-panel',
        height: '90vh',
        width: '90vw',
      } );
      this.$dialog.open(ModalLoginComponent, {
        panelClass: 'pb-panel',
        height: '90vh',
        width: '90vw',
     } );

    this.$component.$event.subscribe(FgComponentBaseEvent.SELECTED, this.setSelectedComponent());
    // this.$component.$event.subscribe( FgComponentBaseEvent.FOCUS_IN, this.setActiveComponent() );

    // Register the events that should be logged from emit-funciton
    this.$component.$event.registerEventsToLog([
      FgComponentBaseEvent.CLICK,
      FgComponentBaseEvent.FOCUS_IN,
      FgComponentBaseEvent.FOCUS_OUT,
      FgComponentBaseEvent.CREATE,
      FgComponentBaseEvent.SELECTED,
      FgComponentBaseEvent.EDIT,
      FgComponentBaseEvent.DELETE,
      FgComponentBaseEvent.LOCK,
      FgComponentBaseEvent.EXPORT,
      FgComponentBaseEvent.PRINT,
    ]);
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
