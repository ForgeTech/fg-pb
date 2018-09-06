import { Component } from '@angular/core';
import { FgComponentBaseComponent } from '../fg-component-base/fg-component-base.component';
import { FgComponentBaseService } from '../fg-component-base/fg-component-base.service';
import { PowerBotEntity } from '../../entity/powerbot.entity';
import { ModalMarketComponent } from '../modal-market/modal-market.component';
import { ModalSettingsComponent } from '../modal-settings/modal-settings.component';
import { BarStateEntity, BarStateEnum } from '../../entity/bar-state.entity';
import { PbAppEvent } from '../../event/pb-app.event';
import { FgEvent } from '../../class/fg-event.class';

/**
 * BarStatusComponent -
 * Refelect the states of the PowerBot connection-properties
 * to the user
 */
@Component({
  selector: 'pb-bar-state',
  templateUrl: './bar-state.component.html',
  styleUrls: ['./bar-state.component.scss']
})
export class BarStateComponent  extends FgComponentBaseComponent {
  entity: PowerBotEntity;
  public BarStateEnum = BarStateEnum;
  /**
   * Constructor
   */
  constructor( $component: FgComponentBaseService ) {
    super(
      $component
    );
  }
  /**
   * Display Market Settings-Modal
   */
  public openMarketModal($event: Event): void {
    this.$component.$event.emit( new FgEvent( PbAppEvent.OPEN_MARKET_MODAL ) );
  }
  /**
   * Display Connection Settings-Modal
   */
  public openConnectionModal($event: Event): void {
    this.$component.$event.emit( new FgEvent( PbAppEvent.OPEN_CONNECTION_MODAL ) );
  }

  public getStateColor( state: BarStateEnum ): string {
    let color = '';
    switch (state) {
      case BarStateEnum.Online:
        color = 'primary';
      break;
      case BarStateEnum.Warning:
        color = 'accent';
      break;
      default:
        color = 'warn';
      break;
    }
    return color;
  }

  getStateLabel( state: BarStateEnum ): string {
    let label = '';
    switch (state) {
      case BarStateEnum.Offline:
        label = 'Offline';
      break;
      case BarStateEnum.Online:
        label = 'Online';
      break;
      case BarStateEnum.Warning:
        label = 'Warning';
      break;
      case BarStateEnum.Error:
        label = 'Error';
      break;
      default:
        label = 'Disconnected';
      break;
    }
    return label;
  }

}
