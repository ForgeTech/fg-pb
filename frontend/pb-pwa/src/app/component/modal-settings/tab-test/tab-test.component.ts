import { Component, OnInit } from '@angular/core';
import { FgComponentBaseComponent } from '../../fg-component-base/fg-component-base.component';
import { FgComponentBaseService } from '../../fg-component-base/fg-component-base.service';

@Component({
  selector: 'pb-tab-test',
  templateUrl: './tab-test.component.html',
  styleUrls: ['./tab-test.component.scss']
})
export class TabTestComponent extends FgComponentBaseComponent {

  constructor($component: FgComponentBaseService) {
    super(
      $component
    );
  }

}
