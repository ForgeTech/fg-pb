import { Component, OnInit } from '@angular/core';
import { FgComponentBaseComponent } from '../fg-component-base/fg-component-base.component';

@Component({
  selector: 'pb-table-signals',
  templateUrl: './table-signals.component.html',
  styleUrls: ['./table-signals.component.scss']
})
export class TableSignalsComponent extends FgComponentBaseComponent {

  constructor() {
    super();
  }

}
