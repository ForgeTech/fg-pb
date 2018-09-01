import { Component } from '@angular/core';
import { FgComponentBaseService } from '../fg-component-base/fg-component-base.service';
import { FgComponentBaseComponent } from '../fg-component-base/fg-component-base.component';
import { ModalSettingsComponent } from '../modal-settings/modal-settings.component';
import { ModalMarketComponent } from '../modal-market/modal-market.component';
import { FgEvent } from '../../class/fg-class.export';
import { PbAppEvent } from '../../event/fg-events.export';
/**
 * Bar-Action-Component -
 * represents a collection of buttons and other navigation
 * elements providing access to a set of application functionallity
 */
@Component({
  selector: 'pb-bar-action',
  templateUrl: './bar-action.component.html',
  styleUrls: ['./bar-action.component.scss']
})
export class BarActionComponent extends FgComponentBaseComponent {
  /**
   * CONSTRUCTOR
   */
  constructor($component: FgComponentBaseService) {
    super(
      $component
    );
  }
  /**
   * Methode to open Market-Settings Modal
   */
  openMarketModal( $event: Event): void {
    this.$component.$modal.open( ModalMarketComponent, {
      panelClass: 'pb-panel',
      height: '90vh',
      width: '90vw',
      data: this.$component.$data.$powerbot,
    });
  }
  /**
   * Methode to open Api-Settings Modal
   */
  openSettingsModal($event: Event): void {
    this.$component.$modal.open( ModalSettingsComponent, {
      panelClass: 'pb-panel',
      height: '90vh',
      width: '90vw',
      data: this.$component.$data.$powerbot
    });
  }
  /**
   * Dispatch signal for disconnecting from api
   */
  disconnectApi( $event: Event ): void {
    this.emitEvent( PbAppEvent.DISCONNECT_API, this );
  }
  /**
   * Dispatch signal to disconnect from market
   */
  disconnectMarket( $event: Event ): void {
    this.emitEvent( PbAppEvent.DISCONNECT_MARKET, this );
  }
}
