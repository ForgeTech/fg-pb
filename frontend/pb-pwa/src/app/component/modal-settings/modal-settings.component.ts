import { Component, ViewChild, SimpleChange, SimpleChanges, ChangeDetectionStrategy } from '@angular/core';
import { FgComponentBaseService } from '../fg-component-base/fg-component-base.service';
import { MatTab, MatTabChangeEvent, MatTabGroup, MatStepper } from '@angular/material';
import { TabProductionComponent } from './tab-production/tab-production.component';
import { TabLoggingComponent } from './tab-logging/tab-logging.component';
import { TabTestComponent } from './tab-test/tab-test.component';
// import { TabApiKeyComponent } from './tab-api-key/tab-api-key.component';
import { FgComponentBaseComponent } from '../fg-component-base/fg-component-base.component';
import { PbModalTabComponentInterface } from '../../interface/interface.export';
import { PowerBotEntity } from '../../entity/entity.export';
import { _ } from './../../app.utils';
import { FgComponentBaseEvent } from 'src/app/event/fg-events.export';
import { Observable, merge } from 'rxjs';
import { map, filter, switchMap, startWith } from 'rxjs/operators';
import { StepperSelectionEvent } from '@angular/cdk/stepper';
import { FgEvent } from 'src/app/class/fg-event.class';
import { FormValidationStateEnum } from 'src/app/enum/enum.export';

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
  styleUrls: ['./modal-settings.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ModalSettingsComponent extends FgComponentBaseComponent {
  /**
   * Override enity-property inherited from FgComponentBaseComponent
   */
  entity: PowerBotEntity;

  /* tslint:disable-next-line */
  inputThemeColor: string = 'accent';

  @ViewChild('stepper') stepper: MatStepper;
  @ViewChild('tabProduction') tabProduction: TabProductionComponent;
  @ViewChild('tabTest') tabTest: TabTestComponent;
  @ViewChild('tabLogging') tabLogging: TabLoggingComponent;
  /**
   * Hold references to tab-components
   */
  public tabComponents: PbModalTabComponentInterface[];
  /**
   * Variable to hold reference to active tab-component
   */
  public activeTab$: Observable<PbModalTabComponentInterface>; // Observable<PbModalTabComponentInterface>;
  /**
   * Streams the disabled state of action-button
   */
  public actionDisabled$: Observable<boolean>;
  /**
   * Streams the label for actions-button
   */
  public actionLabel$: Observable<any>;
  /**
   * CONSTRUCTOR
   */
  constructor(
    public $component: FgComponentBaseService
  ) {
    super(
      $component
    );
    const afterViewInit$: Observable<FgEvent> = this.event$.pipe(
        filter( event => {
          return event.signature === FgComponentBaseEvent.AFTER_VIEW_INIT;
        })
    );
    // After view is initialized or stepper changes active tab should be set
    this.activeTab$ = merge(
        afterViewInit$.pipe( map( value => {
          return 0;
        } ) ),
        afterViewInit$.pipe(
          switchMap( value => this.stepper.selectionChange ),
          map( ( selection: StepperSelectionEvent ) => selection.selectedIndex )
        )
    ).pipe( map( ( index: number ) => {
       if ( !this.tabComponents ) {
         this.tabComponents = [
           this.tabProduction,
           this.tabTest,
           this.tabLogging,
         ];
       }
       return this.tabComponents[index];
    }));
    // On active-tab change -> active-tab form is invalid -> action should be disabled
    this.actionDisabled$ = merge(
      this.activeTab$.pipe(
        map( ( tab: PbModalTabComponentInterface) => tab.form.status )
      ),
      this.activeTab$.pipe(
        switchMap( ( tab: PbModalTabComponentInterface ) => tab.form.statusChanges )
      )
    ).pipe(
      // Eject Default Value
      startWith( FormValidationStateEnum[ FormValidationStateEnum.INVALID ] ),
      // Map FormValidationState
      map( value => {
        let disabled = true;
        if ( value === FormValidationStateEnum[ FormValidationStateEnum.VALID ]) {
          disabled = false;
        }
        return disabled;
      })
    );
    // If active-tab change -> update action-label
    this.actionLabel$ = this.activeTab$.pipe(
      switchMap( ( tab: PbModalTabComponentInterface ) => this.$component.$translate.get( tab.actionLabel ) )
    );
  }
}
