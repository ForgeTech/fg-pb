import { Component } from '@angular/core';
import { FgComponentBaseComponent } from '../fg-component-base/fg-component-base.component';
import { FgComponentBaseService } from '../fg-component-base/fg-component-base.service';

@Component({
  selector: 'pb-table-asks',
  templateUrl: './table-asks.component.html',
  styleUrls: ['./table-asks.component.scss']
})
export class TableAsksComponent extends FgComponentBaseComponent {
  config: any = {
    columnMode: 'force',
    headerHeight: 50,
    rowHeight: 50,
    footerHeight: 25,
    scrollbarV: true,
    scrollbarH: true,
    columns: [
      {
        name: 'Name',
        prop: 'name',
        display: true,
        width: 100
      },
      {
        name: 'Best Bid',
        prop: 'bestBidPrice',
        display: true,
        width: 100
      },
      {
        name: 'Bid Qty',
        prop: 'bestBidQuantity',
        display: true,
        width: 100
      },
      {
        name: 'Best Ask',
        prop: 'bestAskPrice',
        display: true,
        width: 100
      }
    ]
  };

  constructor($component: FgComponentBaseService) {
    super(
      $component
    );
  }

}
