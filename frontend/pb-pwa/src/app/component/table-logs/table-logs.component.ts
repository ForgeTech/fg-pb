import { Component } from '@angular/core';
import { FgComponentBaseComponent } from '../fg-component-base/fg-component-base.component';
import { FgComponentBaseService } from '../fg-component-base/fg-component-base.service';
import { LogEntity } from '../../entity/log.entity';
import { I18n } from '@ngx-translate/i18n-polyfill';

@Component({
  selector: 'pb-table-logs',
  templateUrl: './table-logs.component.html',
  styleUrls: ['./table-logs.component.scss']
})
export class TableLogsComponent extends FgComponentBaseComponent {
  config: any = {
    columnMode: 'force',
    headerHeight: 50,
    rowHeight: 50,
    footerHeight: 25,
    scrollbarV: true,
    scrollbarH: true,
    columns: [
      {
        name: this.$I18n('Timestamp'),
        prop: 'received',
        display: true,
        width: 100
      },
      {
        name: this.$I18n('Text'),
        prop: 'received',
        display: true,
        width: 100
      },
    ]
  };

  constructor($component: FgComponentBaseService, protected $I18n: I18n) {
    super(
      $component
    );
  }

}
