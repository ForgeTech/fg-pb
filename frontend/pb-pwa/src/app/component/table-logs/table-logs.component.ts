import { Component } from '@angular/core';
import { FgComponentBaseComponent } from '../fg-component-base/fg-component-base.component';
import { FgComponentBaseService } from '../fg-component-base/fg-component-base.service';
import { LogEntity } from '../../entity/log.entity';
import { _ } from './../../app.utils';

@Component({
  selector: 'pb-table-logs',
  templateUrl: './table-logs.component.html',
  styleUrls: ['./table-logs.component.scss']
})
export class TableLogsComponent extends FgComponentBaseComponent {
  config: any = {
    columns: [
      {
        name: _('column_label_timestamp'),
        prop: 'received',
        display: true,
        width: 100
      },
      {
        name: _('column_label_message'),
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
