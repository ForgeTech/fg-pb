import { Component, OnInit } from '@angular/core';
import { FgComponentBaseComponent } from '../fg-component-base/fg-component-base.component';
import { FgComponentBaseService } from '../fg-component-base/fg-component-base.service';

/**
 * PbGraphPortfolioComponent -
 * Render graph for powerbot portfolio api-data
 */
@Component({
  selector: 'pb-graph-portfolio',
  templateUrl: './graph-portfolio.component.html',
  styleUrls: ['./graph-portfolio.component.scss']
})
export class GraphPortfolioComponent extends FgComponentBaseComponent {
  /**
   * CONSTRUCTOR
   */
  constructor($component: FgComponentBaseService) {
    super(
      $component
    );
  }

}
