import { Component } from '@angular/core';
import { FgComponentBaseComponent } from '../fg-component-base/fg-component-base.component';
import { FgComponentBaseService } from '../fg-component-base/fg-component-base.service';
import { LogEntity } from '../../entity/log.entity';

@Component({
  selector: 'pb-table-logs',
  templateUrl: './table-logs.component.html',
  styleUrls: ['./table-logs.component.scss']
})
export class TableLogsComponent extends FgComponentBaseComponent {
  entity: LogEntity;
  config: any = {
    columnMode: 'force',
    headerHeight: 20,
    rowHeight: 50,
    footerHeight: 25,
    scrollbarV: true,
    scrollbarH: true,
    columns: [
      {
        name: 'Timestamp',
        prop: 'received',
        display: true,
        width: 100
      },
      {
        name: 'Text',
        prop: 'received',
        display: true,
        width: 100
      },
    ]
  };

  constructor($component: FgComponentBaseService) {
    super(
      $component
    );
  }

}
