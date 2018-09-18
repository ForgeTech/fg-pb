import { Component } from '@angular/core';
import { FgComponentBaseComponent } from '../fg-component-base/fg-component-base.component';
import { FgComponentBaseService } from '../fg-component-base/fg-component-base.service';
import { I18n } from '@ngx-translate/i18n-polyfill';

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
        name: this.$I18n('Name'),
        prop: 'name',
        display: true,
        width: 50
      },
      {
        name: this.$I18n('Best Bid'),
        prop: 'bestBidPrice',
        display: true,
        width: 50
      },
      {
        name: this.$I18n('Bid Qty'),
        prop: 'bestBidQuantity',
        display: true,
        width: 50
      },
      {
        name: this.$I18n('Best Ask'),
        prop: 'bestAskPrice',
        display: true,
        width: 50
      },
      {
        name: this.$I18n('Ask Qty'),
        prop: 'bestAskQuantity',
        display: true,
        width: 50
      },
      {
        name: this.$I18n('Last'),
        prop: 'lastPrice',
        display: true,
        width: 50
      },
      {
        name: this.$I18n('Last Qty'),
        prop: 'lastQuantity',
        display: true,
        width: 50
      },
      {
        name: this.$I18n('High'),
        prop: 'high',
        display: true,
        width: 50
      },
      {
        name: this.$I18n('Low'),
        prop: 'low',
        display: true,
        width: 50
      },
      {
        name: this.$I18n('Volume'),
        prop: 'totalQuantity',
        display: true,
        width: 50
      },
      {
        name: this.$I18n('Updated'),
        prop: 'lastTradeTime',
        display: true,
        width: 50
      },
      {
        name: this.$I18n('My Position'),
        prop: 'absolutePosition',
        display: true,
        width: 80
      },
      {
        name: this.$I18n('My Volume'),
        prop: 'absolutePosition',
        display: true,
        width: 80
      }
    ]
  };

  constructor($component: FgComponentBaseService, protected $I18n: I18n) {
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
