import { Component } from '@angular/core';
import { FgComponentBaseComponent } from '../fg-component-base/fg-component-base.component';
import { FgComponentBaseService } from '../fg-component-base/fg-component-base.service';
import { _ } from './../../app.utils';

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
        name: _('column_label_name'),
        prop: 'name',
        display: true,
        width: 50
      },
      {
        name: _('column_label_bid_best'),
        prop: 'bestBidPrice',
        display: true,
        width: 50
      },
      {
        name: _('column_label_bid_qty'),
        prop: 'bestBidQuantity',
        display: true,
        width: 50
      },
      {
        name: _('column_label_ask_best'),
        prop: 'bestAskPrice',
        display: true,
        width: 50
      },
      {
        name: _('column_label_ask_qty'),
        prop: 'bestAskQuantity',
        display: true,
        width: 50
      },
      {
        name: _('column_label_last'),
        prop: 'lastPrice',
        display: true,
        width: 50
      },
      {
        name: _('column_label_last_qty'),
        prop: 'lastQuantity',
        display: true,
        width: 50
      },
      {
        name: _('column_label_high'),
        prop: 'high',
        display: true,
        width: 50
      },
      {
        name: _('column_label_low'),
        prop: 'low',
        display: true,
        width: 50
      },
      {
        name: _('column_label_volume'),
        prop: 'totalQuantity',
        display: true,
        width: 50
      },
      {
        name: _('column_label_update'),
        prop: 'lastTradeTime',
        display: true,
        width: 50
      },
      {
        name: _('column_label_my_position'),
        prop: 'absolutePosition',
        display: true,
        width: 80
      },
      {
        name: _('column_label_my_volume'),
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
