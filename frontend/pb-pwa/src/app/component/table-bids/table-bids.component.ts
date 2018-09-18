import { Component, OnInit } from '@angular/core';
import { FgComponentBaseComponent } from '../fg-component-base/fg-component-base.component';
import { FgComponentBaseService } from '../fg-component-base/fg-component-base.service';
import { I18n } from '@ngx-translate/i18n-polyfill';

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
        name: this.$I18n('Qty [Mw]'),
        prop: '',
        display: true,
        width: 100
      },
      {
        name: this.$I18n('Price [Eur]'),
        prop: '',
        display: true,
        width: 100
      },
    ]
  };

  constructor($component: FgComponentBaseService, protected $I18n: I18n) {
    super(
      $component
    );
  }

}
