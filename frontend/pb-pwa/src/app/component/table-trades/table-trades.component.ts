import { Component } from '@angular/core';
import { FgComponentBaseComponent } from '../fg-component-base/fg-component-base.component';
import { FgComponentBaseService } from '../fg-component-base/fg-component-base.service';
import { _ } from './../../app.utils';

@Component({
  selector: 'pb-table-trades',
  templateUrl: './table-trades.component.html',
  styleUrls: ['./table-trades.component.scss']
})
export class TableTradesComponent extends FgComponentBaseComponent {
  config: any = {
    columns: [
      {
        name: _('column_label_dlvry_start'),
        prop: 'contract_details.dlvryStart',
        display: true,
        width: 50
      },
      {
        name: _('column_label_dlvry_end'),
        prop: 'contract_details.dlvryEnd',
        display: true,
        width: 50
      },
      {
        name: _('column_label_side'),
        prop: 'name',
        display: true,
        width: 50
      },
      {
        name: _('column_label_qty'),
        prop: 'name',
        display: true,
        width: 50
      },
      {
        name: _('column_label_price'),
        prop: 'name',
        display: true,
        width: 50
      },
      {
        name: _('column_label_note'),
        prop: 'name',
        display: true,
        width: 50
      }
    ]
  };
  /**
   * CONSTRUCTOR
   */
  constructor($component: FgComponentBaseService) {
    super(
      $component
    );
  }
}
