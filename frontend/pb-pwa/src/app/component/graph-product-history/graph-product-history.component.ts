import { Component, OnInit } from '@angular/core';
import { FgComponentBaseComponent } from '../fg-component-base/fg-component-base.component';

@Component({
  selector: 'pb-graph-product-history',
  templateUrl: './graph-product-history.component.html',
  styleUrls: ['./graph-product-history.component.scss']
})
export class GraphProductHistoryComponent extends FgComponentBaseComponent {

  constructor() {
    super();
  }

}
