import { Component } from '@angular/core';
import { FgComponentBaseComponent } from '../fg-component-base/fg-component-base.component';
import { FgComponentBaseService } from '../fg-component-base/fg-component-base.service';
import { _ } from './../../app.utils';

@Component({
  selector: 'pb-table-contract-details',
  templateUrl: './table-contract-details.component.html',
  styleUrls: ['./table-contract-details.component.scss']
})
export class TableContractDetailsComponent extends FgComponentBaseComponent {
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
