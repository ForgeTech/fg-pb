import { Component, ViewChild, SimpleChange, SimpleChanges } from '@angular/core';
import { FgComponentBaseService } from '../fg-component-base/fg-component-base.service';
import { MatTab, MatTabChangeEvent, MatTabGroup } from '@angular/material';
import { TabProductionComponent } from './tab-production/tab-production.component';
import { TabLoggingComponent } from './tab-logging/tab-logging.component';
import { TabTestComponent } from './tab-test/tab-test.component';
import { TabApiKeyComponent } from './tab-api-key/tab-api-key.component';
import { FgComponentBaseComponent } from '../fg-component-base/fg-component-base.component';
import { PbModalTabComponentInterface } from '../../interface/interface.export';
import { Observable } from 'rxjs';
import { PowerBotEntity } from '../../entity/entity.export';
import { _ } from './../../app.utils';

/**
 * Enum for identifing active
 * connection-settings tab
 */
export enum ConnectionTabEnum {
  ProductionTab = 0,
  TestTab = 1,
  LoggingTab = 2,
  ApiTab = 3,
}
/**
 * ModalSettingsComponent -
 * This modal dialog is used to define connection
 * environments and other settings within the powerbot
 * application
 */
@Component({
  /* tslint:disable-next-line */
  selector: 'pb-modal-settings',
  templateUrl: './modal-settings.component.html',
  styleUrls: ['./modal-settings.component.scss']
})
export class ModalSettingsComponent extends FgComponentBaseComponent {
  /**
   * Override enity-property inherited from FgComponentBaseComponent
   */
  entity: PowerBotEntity;
  /* tslint:disable-next-line */
  inputThemeColor: string = 'accent';

  // @ViewChild('tabGroup') tabGroup: MatTabGroup;
  @ViewChild('tabProduction') tabProduction: TabProductionComponent;
  @ViewChild('tabTest') tabTest: TabTestComponent;
  @ViewChild('tabLogging') tabLogging: TabLoggingComponent;
  @ViewChild('tabApi') tabApi: TabApiKeyComponent;
  /**
   * Hold references to tab-components
   */
  public tabComponents: PbModalTabComponentInterface[];
  /**
   * Variable to hold the active-tab index
   */
  activeTabIndex: ConnectionTabEnum = ConnectionTabEnum.ProductionTab;
  /**
   * Variable to hold reference to active tab-component
   */
  activeTab: PbModalTabComponentInterface = this.tabProduction;
  /**
   * CONSTRUCTOR
   */
  constructor(
    public $component: FgComponentBaseService
  ) {
    super(
      $component
    );
  }
  /**
   * Override Life-cycle methode from super
   * class
   */
  /* tslint:disable-next-line */
  public ngAfterViewInit(): void {
    super.ngAfterViewInit();
    // Initialize variables with view-references after
    // components where created
    this.activeTab = this.tabProduction;
    // Initialize Production-Form data if set by environment-file
    this.tabComponents = [
      this.tabProduction,
      this.tabTest,
      this.tabLogging,
      this.tabApi
    ];
    // Recover configuration from storage and update form-data when available
    this.$component.$data.recoverConfigFromStorage().then(powerbot => {
      this.$component.$log.warn('RECOVER from Storage');
      this.$component.$data.app = powerbot;
      // Override from environment file if flag override is set to true
      if (this.$component.$data.$env.override) {
        this.$component.$log.warn('OVERRIDE from Environment');
        this.$component.$data.app = Object.assign(this.$component.$data.app, this.$component.$data.$env.powerbot);
      }
      // Load Language if it's different from default language
      if (this.$component.$data.app.config.lang !== this.$component.$translate.getDefaultLang()) {
        this.$component.$translate.use(this.$component.$data.app.config.lang);
      }
      // Set form-data for active tab
      this.activeTab.setFormData();
    });
  }
  /**
   * Method to call when a selection appears on
   * modal tab-group
   */
  onTabChange($event: MatTabChangeEvent ) {
    this.activeTabIndex = $event.index;
    this.activeTab = this.tabComponents[ this.activeTabIndex ];
    this.activeTab.setFormData();
    this.activeTab.form.updateValueAndValidity();
  }
  /**
   * Return ActionBtnLabel according to
   * selected Settings-Tab
   */
  getModalActionBtnLabel(): Observable<any> {
    let label = _('button_label_generate_api_key');
    switch (this.activeTabIndex) {
      case ConnectionTabEnum.ProductionTab:
      case ConnectionTabEnum.LoggingTab:
      case ConnectionTabEnum.TestTab:
        label = _('button_label_connect');
        break;
      }
    return this.$component.$translate.get(label);
  }
  /**
   * Return boolean flag indicating if action-button should be enabled/disabled
   */
  isDisabled(): boolean {
    let disabled = true;
    if ( this.activeTab ) {
      disabled = !this.activeTab.form.valid;
    }
    return disabled;
  }
  /**
   * Metode executing the active tabs action
   */
  action( $event ) {
    this.activeTab.action( $event );

  }
}
