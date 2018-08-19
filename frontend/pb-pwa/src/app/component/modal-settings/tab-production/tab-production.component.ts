import { Component } from '@angular/core';
import { FgComponentBaseComponent } from '../../fg-component-base/fg-component-base.component';
import { FgComponentBaseService } from '../../fg-component-base/fg-component-base.service';

@Component({
  selector: 'pb-tab-production',
  templateUrl: './tab-production.component.html',
  styleUrls: ['./tab-production.component.scss']
})
export class TabProductionComponent extends FgComponentBaseComponent {

  constructor($component: FgComponentBaseService) {
    super(
      $component
    );
  }

}
