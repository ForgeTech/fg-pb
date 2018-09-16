import { Component } from '@angular/core';
import { FgComponentBaseComponent } from '../fg-component-base/fg-component-base.component';
import { FgComponentBaseService } from '../fg-component-base/fg-component-base.service';

@Component({
  selector: 'pb-table-trades',
  templateUrl: './table-trades.component.html',
  styleUrls: ['./table-trades.component.scss']
})
export class TableTradesComponent extends FgComponentBaseComponent {
  config: any = {
    columnMode: 'force',
    headerHeight: 50,
    rowHeight: 50,
    footerHeight: 25,
    scrollbarV: true,
    scrollbarH: true,
    columns: [
      {
        name: 'dlvry Start',
        prop: 'contract_details.dlvryStart',
        display: true,
        width: 50
      },
      {
        name: 'dlvry End',
        prop: 'contract_details.dlvryEnd',
        display: true,
        width: 50
      },
      {
        name: 'Side',
        prop: 'name',
        display: true,
        width: 50
      },
      {
        name: 'Qty [MW]',
        prop: 'name',
        display: true,
        width: 50
      },
      {
        name: 'Price [EUR]',
        prop: 'name',
        display: true,
        width: 50
      },
      {
        name: 'Note',
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
