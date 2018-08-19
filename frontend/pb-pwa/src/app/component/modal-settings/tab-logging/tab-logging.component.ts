import { Component } from '@angular/core';
import { FgComponentBaseComponent } from '../../fg-component-base/fg-component-base.component';
import { FgComponentBaseService } from '../../fg-component-base/fg-component-base.service';

@Component({
  selector: 'pb-tab-logging',
  templateUrl: './tab-logging.component.html',
  styleUrls: ['./tab-logging.component.scss']
})
export class TabLoggingComponent extends FgComponentBaseComponent {

  constructor($component: FgComponentBaseService) {
    super(
      $component
    );
  }

}
