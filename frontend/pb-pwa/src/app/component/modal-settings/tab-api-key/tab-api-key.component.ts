import { Component } from '@angular/core';
import { FgComponentBaseComponent } from '../../fg-component-base/fg-component-base.component';
import { FgComponentBaseService } from '../../fg-component-base/fg-component-base.service';

@Component({
  selector: 'pb-tab-api-key',
  templateUrl: './tab-api-key.component.html',
  styleUrls: ['./tab-api-key.component.scss']
})
export class TabApiKeyComponent extends FgComponentBaseComponent {

  constructor($component: FgComponentBaseService) {
    super(
      $component
    );
  }

}
