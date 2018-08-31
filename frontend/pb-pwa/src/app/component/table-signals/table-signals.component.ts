import { Component } from '@angular/core';
import { FgComponentBaseComponent } from '../fg-component-base/fg-component-base.component';
import { FgComponentBaseService } from '../fg-component-base/fg-component-base.service';

@Component({
  selector: 'pb-table-signals',
  templateUrl: './table-signals.component.html',
  styleUrls: ['./table-signals.component.scss']
})
export class TableSignalsComponent extends FgComponentBaseComponent {
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
