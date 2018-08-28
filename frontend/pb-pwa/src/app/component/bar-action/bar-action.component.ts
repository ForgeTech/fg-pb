import { Component } from '@angular/core';
import { FgComponentBaseService } from '../fg-component-base/fg-component-base.service';
import { FgComponentBaseComponent } from '../fg-component-base/fg-component-base.component';
import { ModalSettingsComponent } from '../modal-settings/modal-settings.component';

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

  openMarketModal( $event: Event): void {
    this.$component.$modal.openMarketModal( $event );
  }

  openSettingsModal($event: Event): void {
    this.$component.$modal.openSettingsModal( $event );
  }

  disconnectMarket($event: Event): void {

  }

  disconnectApi($event: Event): void {

  }
}
