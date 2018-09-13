import { Component, Inject, ViewRef, ViewChild } from '@angular/core';
import { FgComponentBaseService } from '../fg-component-base/fg-component-base.service';
import { MatDialogRef, MatTab, MatTabChangeEvent, MatTabGroup } from '@angular/material';
import { MAT_DIALOG_DATA } from '@angular/material'
import { ModalComponent } from '../modal/modal.component';
import { PowerBotEntity } from '../../entity/powerbot.entity';
import { TabProductionComponent } from './tab-production/tab-production.component';
import { TabLoggingComponent } from './tab-logging/tab-logging.component';
import { TabTestComponent } from './tab-test/tab-test.component';
import { TabApiKeyComponent } from './tab-api-key/tab-api-key.component';
import { FgComponentBaseComponent } from '../fg-component-base/fg-component-base.component';
import { PbModalTabComponentInterface } from '../../interface/pb-modal-tab-component.interface';

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
  selector: 'app-modal-settings',
  templateUrl: './modal-settings.component.html',
  styleUrls: ['./modal-settings.component.scss']
})
export class ModalSettingsComponent extends ModalComponent {
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
    public modalRef: MatDialogRef<any>,
    @Inject(MAT_DIALOG_DATA) public data: PowerBotEntity,
    $component: FgComponentBaseService
  ) {
    super(
      modalRef,
      data,
      $component
    );
  }
  /**
   * Override Life-cycle methode from super
   * class
   */
  public ngAfterViewInit(): void {
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
   * Methode to call when add-orders modal-dialog
   * should be canceled
   */
  cancelSettings($event: Event): void {
    this.closeModal();
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
        label = 'Connect';
      break;
      case ConnectionTabEnum.ApiTab:
        label = 'Generate API-Key';
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
      this.$component.$log.warn('DISABLED FROM ACTIVE TAB');
      console.log( this.activeTab.form );
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
      this.closeModal();
    }
  }
}
