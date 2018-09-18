import { Component } from '@angular/core';
import { FgComponentBaseComponent } from '../fg-component-base/fg-component-base.component';
import { FgComponentBaseService } from '../fg-component-base/fg-component-base.service';
import { PowerBotEntity } from '../../entity/powerbot.entity';
import { PbAppEvent } from '../../event/pb-app.event';
import { FgEvent } from '../../class/fg-event.class';
import { ConnectionState, RequestState, AppEnv } from '../../entity/app-state.entity';
import { I18n } from '@ngx-translate/i18n-polyfill';

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
  /**
   * Override type of FgComponentbaseEntity
   */
  entity: PowerBotEntity;
  /**
   * CONSTRUCTOR
   */
  constructor($component: FgComponentBaseService, protected $I18n: I18n ) {
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
  getProgressBarMode(): string {
    let mode: string = '';
    if ( this.entity.state.requestState === RequestState.Active) {
      mode = 'indeterminate';
    }
    return mode;
  }
  /**
   * Return icon according to passe state
   * @param state connection/market state
   */
  public getStateIcon(): string {
    let icon = '';
    switch (this.entity.state.connectionState) {
      case ConnectionState.Offline:
        icon = 'signal_wifi_off';
        break;
      case ConnectionState.Connecting:
        icon = 'refresh';
        break;
      case ConnectionState.Online:
        icon = 'signal_wifi_4_bar';
        break;
      case ConnectionState.Warning:
        icon = 'warning';
        break;
      case ConnectionState.Error:
        icon = 'error';
        break;
      default:
        icon = 'signal_wifi_off';
        break;
    }
    return icon;
  }
  /**
   * Return color according to passed state
   * @param state connection/market state
   */
  public getStateColor(): string {
    let color = '';
    switch (this.entity.state.connectionState) {
      case ConnectionState.Online:
        color = 'accent';
      break;
      case ConnectionState.Error:
        color = 'warn';
      break;
      default:
        color = 'primary';
      break;
    }
    return color;
  }
  /**
   * Retutn text-label according to passed state
   * @param state connection/market state
   */
  getStateLabel(): string {
    let label = '';
    switch (this.entity.state.connectionState) {
      case ConnectionState.Connecting:
        label = this.$I18n('Connecting');
      break;
      case ConnectionState.Online:
        label = this.$I18n('Online');
      break;
      case ConnectionState.Warning:
        label = this.$I18n('Warning');
      break;
      case ConnectionState.Error:
        label = this.$I18n('Error');
      break;
      default:
        label = this.$I18n('Offline');
      break;
    }
    return label;
  }
  /**
   * Returns flag if environment chip should be displaced
   */
  viewEnvironment(): boolean {
    return this.entity.state.appEnv === AppEnv.Offline ? false : true;
  }
  /**
   * Returns environment label
   */
  getEnvironmentLabel() {
    let label = '';
    switch ( this.entity.state.appEnv ) {
      case AppEnv.Live_Backup:
        label = this.$I18n('Backup');
      break;
      case AppEnv.Live_Prod:
        label = this.$I18n('Production');
      break;
      case AppEnv.Live_Test:
        label = this.$I18n('Test');
      break;
      case AppEnv.Offline_Test:
        label = this.$I18n('Development');
      break;
    }
    return label;
  }
  /**
   * Get environment label icon-string
   */
  getEnvironmentIcon() {
    let icon = 'cloud_queue';
    switch (this.entity.state.appEnv) {
      case AppEnv.Offline_Test:
        icon = 'cloud_off';
      break;
      default:
        icon = 'cloud_queue';
      break;
    }
    return icon;
  }
}
