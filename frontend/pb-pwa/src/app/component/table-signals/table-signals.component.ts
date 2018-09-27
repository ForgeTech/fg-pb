import { Component } from '@angular/core';
import { FgComponentBaseComponent } from '../fg-component-base/fg-component-base.component';
import { FgComponentBaseService } from '../fg-component-base/fg-component-base.service';
import { _ } from './../../app.utils';

@Component({
  selector: 'pb-table-signals',
  templateUrl: './table-signals.component.html',
  styleUrls: ['./table-signals.component.scss']
})
export class TableSignalsComponent extends FgComponentBaseComponent {
  config: any = {
    columns: [
      {
        name: _('column_label_source'),
        prop: 'source',
        display: true,
        width: 100
      },
      {
        name: _('column_label_received_at'),
        prop: 'received_at',
        display: true,
        width: 100
      },
      {
        name: _('column_label_value_imbalance'),
        prop: 'value.imbalance',
        display: true,
        width: 100
      },
    ]
  };
  constructor($component: FgComponentBaseService) {
    super(
      $component
    );
  }

}
