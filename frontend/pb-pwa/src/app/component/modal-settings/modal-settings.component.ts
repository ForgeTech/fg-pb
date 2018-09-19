import { Component, Inject, ViewRef, ViewChild } from '@angular/core';
import { FgComponentBaseService } from '../fg-component-base/fg-component-base.service';
import { MatTab, MatTabChangeEvent, MatTabGroup } from '@angular/material';
import { TabProductionComponent } from './tab-production/tab-production.component';
import { TabLoggingComponent } from './tab-logging/tab-logging.component';
import { TabTestComponent } from './tab-test/tab-test.component';
import { TabApiKeyComponent } from './tab-api-key/tab-api-key.component';
import { FgComponentBaseComponent } from '../fg-component-base/fg-component-base.component';
import { PbModalTabComponentInterface } from '../../interface/pb-modal-tab-component.interface';
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
  selector: 'pb-modal-settings',
  templateUrl: './modal-settings.component.html',
  styleUrls: ['./modal-settings.component.scss']
})
export class ModalSettingsComponent extends FgComponentBaseComponent {
  @ViewChild('tabGroup') tabGroup: MatTabGroup;
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
    $component: FgComponentBaseService
  ) {
    super(

      $component
    );
  }
  /**
   * Override Life-cycle methode from super
   * class
   */
  public AfterViewInit(): void {
    super.ngAfterViewInit();
    // Initialize variables with view-references after
    // components where created
    this.activeTab = this.tabProduction;
    this.tabComponents = [
      this.tabProduction,
      this.tabTest,
      this.tabLogging,
      this.tabApi
    ];
  }
  /**
   * Method to call when a selection appears on
   * modal tab-group
   */
  onTabChange($event: MatTabChangeEvent ) {
    this.activeTabIndex = $event.index;
    this.activeTab = this.tabComponents[ this.activeTabIndex ];
  }
  /**
   * Return ActionBtnLabel according to
   * selected Settings-Tab
   */
  getModalActionBtnLabel(): string {
    let label = '';
    switch (this.activeTabIndex) {
      case ConnectionTabEnum.ProductionTab:
      case ConnectionTabEnum.LoggingTab:
      case ConnectionTabEnum.TestTab:
        label = _('button_label_connect');
      break;
      case ConnectionTabEnum.ApiTab:
        label = _('button_label_generate_api_key');
      break;
    }
    return label;
  }
  /**
   * Return boolean flag indicating if action-button should be enabled/disabled
   */
  isDisabled(): boolean {
    let disabled = true;
    if ( this.activeTab ) {
      disabled = this.activeTab.form.dirty && this.activeTab.form.errors.length === 0;
    }
    return disabled;
  }
  /**
   * Metode executing the active tabs action
   */
  action( $event ) {
    this.activeTab.action( $event );
    // Close modal for all tabs but api
    if ( this.activeTabIndex !== ConnectionTabEnum.ApiTab ) {

    }
  }
}
