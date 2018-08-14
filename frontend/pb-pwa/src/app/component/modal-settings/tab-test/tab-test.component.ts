import { Component, OnInit } from '@angular/core';
import { FgComponentBaseComponent } from '../../fg-component-base/fg-component-base.component';

@Component({
  selector: 'app-tab-test',
  templateUrl: './tab-test.component.html',
  styleUrls: ['./tab-test.component.scss']
})
export class TabTestComponent extends FgComponentBaseComponent {

  constructor() {
    super();
  }

}
