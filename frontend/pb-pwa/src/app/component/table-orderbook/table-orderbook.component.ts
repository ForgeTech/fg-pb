import { Component } from '@angular/core';
import { FgComponentBaseComponent } from '../fg-component-base/fg-component-base.component';
import { FgComponentBaseService } from '../fg-component-base/fg-component-base.service';
import { ConfigTableInterface } from '../../interface/interface.export';
import { _ } from './../../app.utils';

/**
 * Component used to display a data-table within powerbot-application
 */
@Component({
  selector: 'pb-table-orderbook',
  templateUrl: './table-orderbook.component.html',
  styleUrls: ['./table-orderbook.component.scss']
})
export class TableOrderbookComponent extends FgComponentBaseComponent {
  // contracts: [];
  config: ConfigTableInterface = {
    selectionType: 'single',
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
  /**
   * CONSTRUCTOR
   */
  constructor($component: FgComponentBaseService) {
    super(
      $component
    );
  }
  /**
   * Subtract 1 hour from configures backhours
   */
  removeAmount( $event: Event ): void {
    if ( this.$component.$data.app.config.backHours < 0 ) {
      this.$component.$data.app.config.backHours--;
    }
  }
  /**
   * Add 1 hour to backhours as long as it's below 12
   */
  addAmount( $event: Event ): void {
    if (this.$component.$data.app.config.backHours < 12) {
      this.$component.$data.app.config.backHours++;
    }
  }
  /**
   * Sets backhours to 12
   */
  addDoubleAmount( $event: Event ): void {
      this.$component.$data.app.config.backHours = 12;
  }
  /**
   * React to selected row
   */
  selectedContract( $event: Event ): void {
    console.log( 'SELECTED' );
    console.log( $event );
  }

}
