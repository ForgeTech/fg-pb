import { Component, OnInit } from '@angular/core';
import { FgComponentBaseComponent } from '../fg-component-base/fg-component-base.component';
import { FgComponentBaseService } from '../fg-component-base/fg-component-base.service';

@Component({
  selector: 'pb-table-bids',
  templateUrl: './table-bids.component.html',
  styleUrls: ['./table-bids.component.scss']
})
export class TableBidsComponent extends FgComponentBaseComponent {
  // config: any = {
  //   columns: ['id', 'name'],
  //   size: 50,
  //   sizeOptions: [25, 50, 100, 250]
  // };

  constructor($component: FgComponentBaseService) {
    super(
      $component
    );
  }

}
