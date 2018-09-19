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
    columnMode: 'force',
    headerHeight: 50,
    rowHeight: 50,
    footerHeight: 25,
    scrollbarV: true,
    scrollbarH: true,
    columns: [
      {
        name: _('column_label_qty'),
        prop: '',
        display: true,
        width: 100
      },
      {
        name: _('column_label_price'),
        prop: '',
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
