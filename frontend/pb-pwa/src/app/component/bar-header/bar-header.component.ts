import { Component, OnInit } from '@angular/core';
import { FgComponentBaseComponent } from '../fg-component-base/fg-component-base.component';

@Component({
  selector: 'pb-bar-header',
  templateUrl: './bar-header.component.html',
  styleUrls: ['./bar-header.component.scss']
})
export class BarHeaderComponent extends FgComponentBaseComponent {

  constructor() {
    super();
  }

}
