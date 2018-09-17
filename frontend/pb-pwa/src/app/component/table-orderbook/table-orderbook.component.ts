import { Component } from '@angular/core';
import { FgComponentBaseComponent } from '../fg-component-base/fg-component-base.component';
import { FgComponentBaseService } from '../fg-component-base/fg-component-base.service';

@Component({
  selector: 'pb-table-orderbook',
  templateUrl: './table-orderbook.component.html',
  styleUrls: ['./table-orderbook.component.scss']
})
export class TableOrderbookComponent extends FgComponentBaseComponent {
  // contracts: [];
  config: any = {
    columnMode: 'force',
    headerHeight: 25,
    rowHeight: 25,
    footerHeight: 25,
    scrollbarV: true,
    scrollbarH: true,
    columns: [
      {
        name: 'Name',
        prop: 'name',
        display: true,
        width: 50
      },
      {
        name: 'Best Bid',
        prop: 'bestBidPrice',
        display: true,
        width: 50
      },
      {
        name: 'Bid Qty',
        prop: 'bestBidQuantity',
        display: true,
        width: 50
      },
      {
        name: 'Best Ask',
        prop: 'bestAskPrice',
        display: true,
        width: 50
      },
      {
        name: 'Ask Qty',
        prop: 'bestAskQuantity',
        display: true,
        width: 50
      },
      {
        name: 'Last',
        prop: 'lastPrice',
        display: true,
        width: 50
      },
      {
        name: 'Last Qty',
        prop: 'lastQuantity',
        display: true,
        width: 50
      },
      {
        name: 'High',
        prop: 'high',
        display: true,
        width: 50
      },
      {
        name: 'Low',
        prop: 'low',
        display: true,
        width: 50
      },
      {
        name: 'Volume',
        prop: 'totalQuantity',
        display: true,
        width: 50
      },
      {
        name: 'Updated',
        prop: 'lastTradeTime',
        display: true,
        width: 50
      },
      {
        name: 'My Position',
        prop: 'absolutePosition',
        display: true,
        width: 80
      },
      {
        name: 'My Volume',
        prop: 'absolutePosition',
        display: true,
        width: 80
      }
    ]
  };

  constructor($component: FgComponentBaseService) {
    super(
      $component
    );
  }

  removeAmount($event: Event): void {
    console.log('REMOVE AMOUNT');
  }
  addAmount($event: Event): void {
    console.log('ADD AMOUNT');
  }
  addDoubleAmount($event: Event): void {
    console.log('ADD DOUBLE AMOUNT');
  }

}
