import { Component } from '@angular/core';
import { FgComponentBaseComponent } from '../fg-component-base/fg-component-base.component';
import { FgComponentBaseService } from '../fg-component-base/fg-component-base.service';

@Component({
  selector: 'pb-table-add-order',
  templateUrl: './table-add-order.component.html',
  styleUrls: ['./table-add-order.component.scss']
})
export class TableAddOrderComponent extends FgComponentBaseComponent {
  config: any = {
    columns: [
      'Contract',
      'Qty [MW]',
      'Price [EUR]',
      'Note',
      'Dlvry Start',
      'Dlvry End',
      'Status'
    ],
    size: 50,
    sizeOptions: [25, 50, 100, 250]
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
