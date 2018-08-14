import { Component, OnInit } from '@angular/core';
import { FgComponentBaseComponent } from '../../fg-component-base/fg-component-base.component';

@Component({
  selector: 'app-tab-logging',
  templateUrl: './tab-logging.component.html',
  styleUrls: ['./tab-logging.component.scss']
})
export class TabLoggingComponent extends FgComponentBaseComponent {

  constructor() {
    super();
  }

}
