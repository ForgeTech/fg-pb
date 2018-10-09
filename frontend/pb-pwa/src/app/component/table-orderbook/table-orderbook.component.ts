import { Component, SimpleChanges } from '@angular/core';
import { FgComponentBaseComponent } from '../fg-component-base/fg-component-base.component';
import { FgComponentBaseService } from '../fg-component-base/fg-component-base.service';
import { ConfigTableInterface } from '../../interface/interface.export';
import { _ } from './../../app.utils';
import { ContractInterface } from '../../module/pb-api/model/interfaces.export';
import { FgEvent } from '../../class/fg-event.class';

/**
 * Component used to display a data-table within powerbot-application
 */
@Component({
  selector: 'pb-table-orderbook',
  templateUrl: './table-orderbook.component.html',
  styleUrls: ['./table-orderbook.component.scss']
})
export class TableOrderbookComponent extends FgComponentBaseComponent {
  public entity: ContractInterface[] = [];
  protected _selected: ContractInterface[] = [];
  public get selected(): ContractInterface[] {
    return this._selected;
  }
  public set selected( selected: ContractInterface[] ) {
    try {
      this._selected = selected;
      this.$component.$data.app.selectedContract = this._selected[0];
      this.$component.$data.$contracts.getOrders(this.selected[0].contract_id).toPromise().then(orders => {
        this.$component.$data.app.asks = orders.ask;
        this.$component.$data.app.bids = orders.bid;
      });
      this.$component.$data.$contracts.getContractHistory(this.selected[0].contract_id).toPromise().then(contractHist => {
        this.$component.$data.app.contractHistory = contractHist;
      });
    } catch ( error ) {
      this.$component.$data.app.selectedContract = undefined;
      this.$component.$data.app.asks = [];
      this.$component.$data.app.bids = [];
    }
  }
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
        prop: 'best_bid_price',
        display: true,
        width: 50
      },
      {
        name: _('column_label_bid_qty'),
        prop: 'best_bid_quantity',
        display: true,
        width: 50
      },
      {
        name: _('column_label_ask_best'),
        prop: 'best_ask_price',
        display: true,
        width: 50
      },
      {
        name: _('column_label_ask_qty'),
        prop: 'best_ask_quantity',
        display: true,
        width: 50
      },
      {
        name: _('column_label_last'),
        prop: 'last_price',
        display: true,
        width: 50
      },
      {
        name: _('column_label_last_qty'),
        prop: 'last_quantity',
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
        prop: 'total_quantity',
        display: true,
        width: 50
      },
      {
        name: _('column_label_update'),
        prop: 'last_trade_time',
        display: true,
        width: 50
      },
      {
        name: _('column_label_my_position'),
        prop: 'absolute_position',
        display: true,
        width: 80
      },
      {
        name: _('column_label_my_volume'),
        prop: 'absolute_position',
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
    if ( this.$component.$data.app.config.backHours > 0 ) {
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
   * React to component input-changes
   * @param changes
   */
  ngOnChanges(changes: SimpleChanges): void {
    super.ngOnChanges(changes);
    if (changes.entity && this.selected ) {
      // If enities are initially set, select first non-historic contract
      if (changes.entity.currentValue.length !== 0 && this.selected.length === 0 ) {
        this.selected = this.getInitialSelectedContract(changes.entity.currentValue);
      } else if (this.selected.length > 0 ) {
        this.selected = this.updateSelectedContract();
      }
    }
  }
  /**
   * React to selected row
   */
  selectedContract( $event: FgEvent ): void {
    // console.log( '$event.data.selected' );
    // console.log( $event.data.selected );
    this.selected = $event.data.selected ;
  }
  /**
   * Return initial selection for passed contracts
   * @param contracts
   */
  private getInitialSelectedContract(contracts: ContractInterface[]): ContractInterface[] {
      return [ contracts.find( contract => {
        return contract.state === 'ACTI';
      })];
  }
  /**
   * Find selected contract in updated
   */
  private updateSelectedContract(): ContractInterface[] {
    const updated = this.entity.filter( contract => {
      let found = false;
      for ( let selectedContract of this.selected ) {
        if (selectedContract.contract_id === contract.contract_id ) {
          found = true;
          break;
        }
      }
      return found;
    });
    return updated;
  }
}
