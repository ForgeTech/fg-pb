import { Component } from '@angular/core';
import { FgComponentBaseComponent } from '../fg-component-base/fg-component-base.component';
import { FgComponentBaseService } from '../fg-component-base/fg-component-base.service';
import { I18n } from '@ngx-translate/i18n-polyfill';

@Component({
  selector: 'pb-table-add-order',
  templateUrl: './table-add-order.component.html',
  styleUrls: ['./table-add-order.component.scss']
})
export class TableAddOrderComponent extends FgComponentBaseComponent {
  config: any = {
    columnMode: 'force',
    headerHeight: 50,
    rowHeight: 50,
    footerHeight: 25,
    scrollbarV: true,
    scrollbarH: true,
    columns: [
      {
        name: this.$I18n('dlvry Start'),
        prop: 'contract_details.dlvryStart',
        display: true,
        width: 50
      },
      {
        name: this.$I18n('dlvry End'),
        prop: 'contract_details.dlvryEnd',
        display: true,
        width: 50
      },
      {
        name: this.$I18n('Side'),
        prop: 'name',
        display: true,
        width: 50
      },
      {
        name: this.$I18n('Qty [MW]'),
        prop: 'name',
        display: true,
        width: 50
      },
      {
        name: this.$I18n('Price [EUR]'),
        prop: 'name',
        display: true,
        width: 50
      },
      {
        name: this.$I18n('Note'),
        prop: 'name',
        display: true,
        width: 50
      }
    ]
  };
  /**
   * CONSTRUCTOR
   */
  constructor($component: FgComponentBaseService, protected $I18n: I18n) {
    super(
      $component
    );
  }

}
