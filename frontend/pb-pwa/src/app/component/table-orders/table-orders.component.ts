import { Component } from '@angular/core';
import { FgComponentBaseComponent } from '../fg-component-base/fg-component-base.component';
import { FgComponentBaseService } from '../fg-component-base/fg-component-base.service';
import { ModalAddOrderComponent } from '../modal-add-order/modal-add-order.component';
import { PbAppEvent } from '../../event/pb-app.event';
import { FgEvent } from '../../class/fg-event.class';
import { _ } from './../../app.utils';
import { ConfigTableColumnInterface } from '../../interface/interface.export';

/**
 * Table-Component for displaying order-data
 */
@Component({
  selector: 'pb-table-orders',
  templateUrl: './table-orders.component.html',
  styleUrls: ['./table-orders.component.scss']
})
export class TableOrdersComponent extends FgComponentBaseComponent {
  config = {
    columns: [
      {
        name: _('column_label_dlvry_start'),
        prop: 'delivery_start',
        cellTemplate: 'date',
        dateFormat: 'mediumTime',
        display: true,
        width: 50
      },
      {
        name: _('column_label_dlvry_end'),
        prop: 'delivery_end',
        cellTemplate: 'date',
        dateFormat: 'mediumTime',
        display: true,
        width: 50
      },
      {
        name: _('column_label_side'),
        prop: 'name',
        cellTemplate: 'side',
        display: true,
        width: 50
      },
      {
        name: _('column_label_qty'),
        prop: 'quantity',
        display: true,
        width: 50
      },
      {
        name: _('column_label_price'),
        prop: 'price',
        display: true,
        width: 50
      },
      {
        name: _('column_label_note'),
        prop: 'sell_txt',
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
