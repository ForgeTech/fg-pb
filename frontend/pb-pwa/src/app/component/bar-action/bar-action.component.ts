import { Component } from '@angular/core';
import { FgComponentBaseService } from '../fg-component-base/fg-component-base.service';
import { FgComponentBaseComponent } from '../fg-component-base/fg-component-base.component';
import { FgEvent, FgAction } from '../../class/fg-class.export';
import { PbAppEvent, FgComponentBaseEvent } from '../../event/fg-events.export';
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
    this.actions = [
      new FgAction( new FgEvent( FgComponentBaseEvent.CREATE), 'accent', 'Add', 'add_box', 'Q' ),
      new FgAction( new FgEvent( FgComponentBaseEvent.EDIT), 'accent', 'Edit', 'edit', 'E' ),
      new FgAction( new FgEvent( FgComponentBaseEvent.LOCK), 'accent', 'Lock', 'lock', 'R' ),
      new FgAction( new FgEvent( FgComponentBaseEvent.DELETE), 'accent', 'Delete', 'delete_forever', 'F' ),
      new FgAction( new FgEvent( FgComponentBaseEvent.EXPORT), 'accent', 'Export', 'import_export', 'Y' ),
      new FgAction( new FgEvent( FgComponentBaseEvent.PRINT), 'accent', 'Print', 'print', 'P' ),
    ];
  }
  /**
   * Methode to dispatch event to open Api-Settings Modal
   */
  openSettingsModal( $event: Event ): void {
    this.$component.$event.emit( new FgEvent( PbAppEvent.OPEN_CONNECTION_MODAL) );
  }
  /**
   * Methode to dispatch event to connect to Production-Environment
   */
  connectProduction( $event: Event ): void {
    this.$component.$event.emit( new FgEvent( PbAppEvent.CONNECT_API_PROD) );
  }
  /**
   * Methode to dispatch event to connect to Test-Environment
   */
  connectTest( $event: Event ): void {
    this.$component.$event.emit( new FgEvent( PbAppEvent.CONNECT_API_TEST) );
  }
  /**
   * Methode to dispatch event for disconnecting from api
   */
  disconnectApi( $event: Event ): void {
    this.emitEvent( PbAppEvent.DISCONNECT_API, this );
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
  disconnectMarket( $event: Event ): void {
    this.emitEvent( PbAppEvent.DISCONNECT_MARKET, this );
  }

}
