import { Component, OnInit } from '@angular/core';
import { FgComponentBaseComponent } from '../fg-component-base/fg-component-base.component';
import { FgComponentBaseService } from '../fg-component-base/fg-component-base.service';

@Component({
  selector: 'fg-card',
  templateUrl: './fg-card.component.html',
  styleUrls: ['./fg-card.component.scss']
})
export class FgCardComponent extends FgComponentBaseComponent {

  constructor( public $component: FgComponentBaseService) {
    super($component);
  }

}
