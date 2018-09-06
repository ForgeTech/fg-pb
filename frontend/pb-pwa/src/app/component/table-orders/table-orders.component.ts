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
    columns: [
      {
        name: 'dlvry Start',
        prop: 'contract_details.dlvryStart'
      },
      {
        name: 'dlvry End',
        prop: 'contract_details.dlvryEnd'
      },
      {
        name: 'Side',
        prop: 'name'
      },
      {
        name: 'Qty [MW]',
        prop: 'name'
      },
      {
        name: 'Price [EUR]',
        prop: 'name'
      },
      {
        name: 'Note',
        prop: 'name'
      }
    ],
    size: 50,
    sizeOptions: [25, 50, 100, 250]
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
