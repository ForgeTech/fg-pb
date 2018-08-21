import { Component, Input, ElementRef } from '@angular/core';
import { FgComponentBaseComponent } from '../fg-component-base/fg-component-base.component';
import { FgComponentBaseService } from '../fg-component-base/fg-component-base.service';
import { FgEvent, FgAction } from '../../class/fg-class.export';
import {
  FgComponentBaseEvent,
  FgEntityEvent
} from '../../event/fg-events.export';
/**
 * TODO: FgActionsComponent
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
    this.$component.$log.error('ACTION-HANDLE-EVENT');
  }
}
