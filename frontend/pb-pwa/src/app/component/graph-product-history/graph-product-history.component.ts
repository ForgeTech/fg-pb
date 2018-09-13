import { Component } from '@angular/core';
import { FgComponentBaseComponent } from '../fg-component-base/fg-component-base.component';
import { FgComponentBaseService } from '../fg-component-base/fg-component-base.service';

/**
 * PbGraphProductHistoryComponent -
 * Render graph for powerbot product-history api-data
 */
@Component({
  selector: 'pb-graph-product-history',
  templateUrl: './graph-product-history.component.html',
  styleUrls: ['./graph-product-history.component.scss']
})
export class GraphProductHistoryComponent extends FgComponentBaseComponent {
  /**
   * CONSTRUCTOR
   */
  constructor($component: FgComponentBaseService) {
    super(
      $component
    );
  }

}
