import { Component } from '@angular/core';
import { FgComponentBaseComponent } from '../fg-component-base/fg-component-base.component';
import { FgComponentBaseService } from '../fg-component-base/fg-component-base.service';
import { ModalHelpComponent } from '../modal-help/modal-help.component';
import { FgEvent } from '../../class/fg-event.class';
import { PbAppEvent } from '../../event/pb-app.event';
import { FgComponentBaseEvent } from '../../event/fg-events.export';
import { FgAction } from '../../class/fg-action.class';

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
    this.actions = [
      // new FgAction(new FgEvent(FgComponentBaseEvent.CREATE), 'accent', 'Add', 'add_box', 'Q'),
      // new FgAction(new FgEvent(FgComponentBaseEvent.EDIT), 'accent', 'Edit', 'edit', 'E'),
      // new FgAction(new FgEvent(FgComponentBaseEvent.LOCK), 'accent', 'Lock', 'lock', 'R'),
      new FgAction(new FgEvent(FgComponentBaseEvent.EXPORT), 'primary', 'Export', 'import_export', 'E'),
      new FgAction(new FgEvent(FgComponentBaseEvent.PRINT), 'primary', 'Print', 'print', 'P'),
      new FgAction(new FgEvent(FgComponentBaseEvent.DELETE), 'primary', 'Delete', 'brightness_3', 'F'),
      new FgAction(new FgEvent(FgComponentBaseEvent.PRINT), 'primary', 'Help', 'live_help', 'H'),
    ];
  }
  /**
   * Methode to dispatch event to open Api-Settings Modal
   */
  // openHelpModal($event: Event): void {
  //   this.$component.$event.emit( new FgEvent( PbAppEvent.OPEN_HELP_MODAL ) );
  // }
  /**
   * Methode to dispatch event to open Api-Settings Modal
   */
  openSettingsModal($event: Event): void {
    this.$component.$event.emit(new FgEvent(PbAppEvent.OPEN_CONNECTION_MODAL));
  }
  /**
   * Methode to dispatch event to connect to Production-Environment
   */
  connectProduction($event: Event): void {
    this.$component.$event.emit(new FgEvent(PbAppEvent.CONNECT_API_PROD));
  }
  /**
   * Methode to dispatch event to connect to Test-Environment
   */
  connectTest($event: Event): void {
    this.$component.$event.emit(new FgEvent(PbAppEvent.CONNECT_API_TEST));
  }
  /**
   * Methode to dispatch event for disconnecting from api
   */
  disconnectApi($event: Event): void {
    this.emitEvent(PbAppEvent.DISCONNECT_API, this);
  }
  /**
   * Methode to dispatch event to open Market-Settings Modal
   */
  openMarketModal($event: Event): void {
    this.$component.$event.emit(new FgEvent(PbAppEvent.OPEN_MARKET_MODAL));
  }
  /**
   * Methode to dispatch event for to disconnect from market
   */
  disconnectMarket($event: Event): void {
    this.emitEvent(PbAppEvent.DISCONNECT_MARKET, this);
  }
}
