import { Component } from '@angular/core';
import { FgComponentBaseComponent } from '../fg-component-base/fg-component-base.component';
import { FgComponentBaseService } from '../fg-component-base/fg-component-base.service';
import { ModalAddOrderComponent } from '../modal-add-order/modal-add-order.component';

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

  constructor($component: FgComponentBaseService) {
    super(
      $component
    );
  }

  openAddOrderModal( $event: Event ): void {
    this.$component.$modal.open(ModalAddOrderComponent, {
      panelClass: 'pb-panel',
      height: '90vh',
      width: '90vw',
      data: this.$component.$data.$powerbot
    });
  }

}
