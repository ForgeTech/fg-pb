import { Component } from '@angular/core';
import { FgComponentBaseComponent } from '../fg-component-base/fg-component-base.component';
import { FgComponentBaseService } from '../fg-component-base/fg-component-base.service';

/**
 * PbGraphSignalHistoryComponent -
 * Render graph for powerbot signal-history api-data
 */
@Component({
  selector: 'pb-graph-signal-history',
  templateUrl: './graph-signal-history.component.html',
  styleUrls: ['./graph-signal-history.component.scss']
})
export class GraphSignalHistoryComponent extends FgComponentBaseComponent {
  /**
   * CONSTRUCTOR
   */
  constructor($component: FgComponentBaseService) {
    super(
      $component
    );
  }

}
