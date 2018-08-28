import { Component } from '@angular/core';
import { FgComponentBaseService } from '../fg-component-base/fg-component-base.service';
import { FgComponentBaseComponent } from '../fg-component-base/fg-component-base.component';
import { ModalSettingsComponent } from '../modal-settings/modal-settings.component';
import { ModalMarketComponent } from '../modal-market/modal-market.component';

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
    this.$component.$modal.open( ModalMarketComponent, {
      panelClass: 'pb-panel',
      height: '90vh',
      width: '90vw',
      data: this.$component.$data.$powerbot,
    });
  }

  openSettingsModal($event: Event): void {
    this.$component.$modal.open( ModalSettingsComponent, {
      panelClass: 'pb-panel',
      height: '90vh',
      width: '90vw',
      data: this.$component.$data.$powerbot
    });
  }

  disconnectMarket($event: Event): void {

  }

  disconnectApi($event: Event): void {

  }
}
