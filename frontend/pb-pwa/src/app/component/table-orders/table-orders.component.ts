import { Component } from '@angular/core';
import { FgComponentBaseComponent } from '../fg-component-base/fg-component-base.component';
import { FgComponentBaseService } from '../fg-component-base/fg-component-base.service';

@Component({
  selector: 'pb-table-orders',
  templateUrl: './table-orders.component.html',
  styleUrls: ['./table-orders.component.scss']
})
export class TableOrdersComponent extends FgComponentBaseComponent {
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
