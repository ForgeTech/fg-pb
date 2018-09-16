import { Component } from '@angular/core';
import { FgComponentBaseComponent } from '../fg-component-base/fg-component-base.component';
import { FgComponentBaseService } from '../fg-component-base/fg-component-base.service';
import { ModalAddOrderComponent } from '../modal-add-order/modal-add-order.component';
import { PbAppEvent } from '../../event/pb-app.event';
import { FgEvent } from '../../class/fg-event.class';

/**
 * Table-Component for displaying order-data
 */
@Component({
  selector: 'pb-table-orders',
  templateUrl: './table-orders.component.html',
  styleUrls: ['./table-orders.component.scss']
})
export class TableOrdersComponent extends FgComponentBaseComponent {
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
   * CONSTRUCTION
   */
  constructor($component: FgComponentBaseService) {
    super(
      $component
    );
  }
  /**
   * Dispatch event for opening add-order modal
   */
  openAddOrderModal( $event: Event ): void {
    this.$component.$event.emit( new FgEvent( PbAppEvent.OPEN_ADD_ORDER_MODAL ) );
  }
}
