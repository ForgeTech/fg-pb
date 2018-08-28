import { Component } from '@angular/core';
import { FgComponentBaseComponent } from '../fg-component-base/fg-component-base.component';
import { FgComponentBaseService } from '../fg-component-base/fg-component-base.service';
import { PowerBot } from '../../entity/powerbot';

/**
 * BarStatusComponent -
 * Refelect the states of the PowerBot connection-properties
 * to the user
 */
@Component({
  selector: 'pb-bar-status',
  templateUrl: './bar-status.component.html',
  styleUrls: ['./bar-status.component.scss']
})
export class BarStatusComponent  extends FgComponentBaseComponent {
  entity: PowerBot;
  /**
   * Constructor
   */
  constructor( $component: FgComponentBaseService ) {
    super(
      $component
    );
  }
  openMarketModule($event: Event): void {
    this.$component.$modal.openMarketModal( $event );
  }

  openSettingsModule($event: Event): void {
    this.$component.$modal.openSettingsModal( $event );
  }

  disconnectMarket($event: Event): void {

  }

  disconnectApi($event: Event): void {

  }
}
/**
 * Enum of available bar-status states
 */
export enum BarStatusState {
  Disabled = 1,
  Online = 2,
  Warn = 3,
  Error = 4
}
/**
 * Entity to hold the current-state of bar-status component
 */
export class BarStatusEntity {
  constructor(
    public status: BarStatusState = BarStatusState.Disabled,
    public statusConnection: BarStatusState = BarStatusState.Disabled,
    public statusMarket: BarStatusState = BarStatusState.Disabled,
  ) {}
}
