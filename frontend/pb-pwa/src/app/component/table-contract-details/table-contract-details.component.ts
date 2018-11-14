import { Component, SimpleChanges } from '@angular/core';
import { FgComponentBaseComponent } from '../fg-component-base/fg-component-base.component';
import { FgComponentBaseService } from '../fg-component-base/fg-component-base.service';
import { _ } from './../../app.utils';
import { ContractEntityInterface } from 'src/app/interface/interface.export';

@Component({
  selector: 'pb-table-contract-details',
  templateUrl: './table-contract-details.component.html',
  styleUrls: ['./table-contract-details.component.scss']
})
export class TableContractDetailsComponent extends FgComponentBaseComponent {
  entity: ContractEntityInterface;

  constructor($component: FgComponentBaseService) {
    super(
      $component
    );
  }

  /**
   * React to component input-changes
   * @param changes
   */
  ngOnChanges(changes: SimpleChanges): void {
    super.ngOnChanges(changes);
    console.log(changes);
    if (changes.entity ) {
    }
  }

}
