import { Component } from '@angular/core';
import { FgComponentBaseComponent } from '../fg-component-base/fg-component-base.component';
import { FgComponentBaseService } from '../fg-component-base/fg-component-base.service';
import { _ } from './../../app.utils';
import { ConfigTableColumnInterface } from '../../interface/interface.export';

@Component({
  selector: 'pb-table-trades',
  templateUrl: './table-trades.component.html',
  styleUrls: ['./table-trades.component.scss']
})
export class TableTradesComponent extends FgComponentBaseComponent {
  config: { columns: ConfigTableColumnInterface[]  } = {
    columns: [
      {
        name: _('column_label_dlvry_start'),
        prop: 'contract_details.dlvryStart',
        cellTemplate: 'date',
        dateFormat: 'shortTime',
        display: true,
        width: 50
      },
      {
        name: _('column_label_dlvry_end'),
        prop: 'contract_details.dlvryEnd',
        cellTemplate: 'date',
        dateFormat: 'shortTime',
        display: true,
        width: 50
      },
      {
        name: _('column_label_side'),
        prop: 'name',
        cellTemplate: 'side',
        display: true,
        width: 50
      },
      {
        name: _('column_label_qty'),
        prop: 'quantity',
        display: true,
        width: 50
      },
      {
        name: _('column_label_price'),
        prop: 'price',
        display: true,
        width: 50
      },
      {
        name: _('column_label_note'),
        prop: 'sell_txt',
        cellTemplate: 'note',
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
