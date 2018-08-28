import { Component } from '@angular/core';
import { FgComponentBaseComponent } from '../fg-component-base/fg-component-base.component';
import { FgComponentBaseService } from '../fg-component-base/fg-component-base.service';

@Component({
  selector: 'pb-table-orderbook',
  templateUrl: './table-orderbook.component.html',
  styleUrls: ['./table-orderbook.component.css']
})
export class TableOrderbookComponent extends FgComponentBaseComponent {
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
