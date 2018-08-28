import { Component } from '@angular/core';
import { FgComponentBaseComponent } from '../fg-component-base/fg-component-base.component';
import { FgComponentBaseService } from '../fg-component-base/fg-component-base.service';

@Component({
  selector: 'pb-table-trades',
  templateUrl: './table-trades.component.html',
  styleUrls: ['./table-trades.component.scss']
})
export class TableTradesComponent extends FgComponentBaseComponent {
  // config: any = {
  //   columns: ['delivery_start', 'delivery_end'],
  //   size: 50,
  //   sizeOptions: [25, 50, 100, 250]
  // };

  constructor($component: FgComponentBaseService) {
    super(
      $component
    );
  }

}
