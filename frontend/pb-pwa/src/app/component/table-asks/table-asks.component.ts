import { Component, OnInit } from '@angular/core';
import { FgComponentBaseComponent } from '../fg-component-base/fg-component-base.component';

@Component({
  selector: 'pb-table-asks',
  templateUrl: './table-asks.component.html',
  styleUrls: ['./table-asks.component.scss']
})
export class TableAsksComponent extends FgComponentBaseComponent {

  constructor() {
    super();
  }

}
