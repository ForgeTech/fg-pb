import { Component, OnInit } from '@angular/core';
import { FgComponentBaseComponent } from '../fg-component-base/fg-component-base.component';
import { FgComponentBaseService } from '../fg-component-base/fg-component-base.service';
import { _ } from './../../app.utils';

@Component({
  selector: 'pb-table-bids',
  templateUrl: './table-bids.component.html',
  styleUrls: ['./table-bids.component.scss']
})
export class TableBidsComponent extends FgComponentBaseComponent {
  config: any = {
    columns: [
      {
        name: _('column_label_qty'),
        prop: 'quantity',
        display: true,
        width: 100
      },
      {
        name: _('column_label_price'),
        prop: 'price',
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
