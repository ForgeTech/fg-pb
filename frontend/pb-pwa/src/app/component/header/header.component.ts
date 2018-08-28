import { Component } from '@angular/core';
import { FgComponentBaseComponent } from '../fg-component-base/fg-component-base.component';
import { FgComponentBaseService } from '../fg-component-base/fg-component-base.service';

@Component({
  selector: 'pb-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent extends FgComponentBaseComponent {

  constructor($component: FgComponentBaseService) {
    super(
      $component
    );
  }

  openHelpModal($event: Event): void {
    this.$component.$modal.openHelpModal($event);
  }

}
