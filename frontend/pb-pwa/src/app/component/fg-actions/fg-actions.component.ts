import { Component, Input, ElementRef } from '@angular/core';
import { FgComponentBaseComponent } from '../fg-component-base/fg-component-base.component';
import { FgComponentBaseService } from '../fg-component-base/fg-component-base.service';
import { FgEvent, FgAction } from '../../class/fg-class.export';
import {
  FgComponentBaseEvent,
  FgEntityEvent
} from '../../event/fg-events.export';
/**
 * FgActionsComponent -
 * Component renders passed entities set of actions as buttons
 * and dispatches their events on user-interaction
 */
@Component({
  selector: 'fg-actions',
  templateUrl: './fg-actions.component.html',
  styleUrls: ['./fg-actions.component.scss']
})
export class FgActionsComponent extends FgComponentBaseComponent  {
  /**
   * CONSTRUCTOR
   */
  constructor($component: FgComponentBaseService) {
    super($component);
  }
  /**
   * Methode to handle events emitted from component output event-emmitter
   * @param event Instance of FgEvent
   */
  public handleChildEvents( event: FgEvent ): void {
    this.emitEvent(event);
  }
  /**
   * Methode checks the value of FgAction and returns the icon-string
   */
  getActionLabel(label: string | Function ): string {
    if ( typeof label === 'function' ) {
      return label();
    }
    return label;
  }
  /**
   * Methode checks the value of FgAction and returns the icon-string
   */
  getActionIcon(icon: () => string | string ): string {
    if ( typeof icon === 'function' ) {
      return icon();
    }
    return icon;
  }
}
