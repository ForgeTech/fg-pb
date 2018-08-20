import { Component } from '@angular/core';
import { FgComponentBaseService } from '../fg-component-base/fg-component-base.service';
import { FgComponentBaseComponent } from '../fg-component-base/fg-component-base.component';

@Component({
  selector: 'pb-bar-action',
  templateUrl: './bar-action.component.html',
  styleUrls: ['./bar-action.component.scss']
})
export class BarActionComponent extends FgComponentBaseComponent {

  constructor($component: FgComponentBaseService) {
    super(
      $component
    );
  }

}
