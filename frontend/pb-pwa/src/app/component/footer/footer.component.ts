import { Component, OnInit } from '@angular/core';
import { FgComponentBaseService } from '../fg-component-base/fg-component-base.service';
import { FgComponentBaseComponent } from '../fg-component-base/fg-component-base.component';

/**
 * PbFooterComponent -
 * Renders powerbots footer-bar
 */
@Component({
  selector: 'pb-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent extends FgComponentBaseComponent {
  /**
   * CONSTRUCTOR
   */
  constructor($component: FgComponentBaseService) {
    super(
      $component
    );
  }
}
