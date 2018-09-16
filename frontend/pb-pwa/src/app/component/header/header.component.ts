import { Component } from '@angular/core';
import { FgComponentBaseComponent } from '../fg-component-base/fg-component-base.component';
import { FgComponentBaseService } from '../fg-component-base/fg-component-base.service';
import { FgEvent } from '../../class/fg-event.class';
import { PbAppEvent } from '../../event/pb-app.event';
import { FgComponentBaseEvent } from '../../event/fg-events.export';
import { FgAction } from '../../class/fg-action.class';
import { PowerBotEntity } from '../../entity/entity.export';
import { ConnectionState, AppEnv } from '../../entity/app-state.entity';
/**
 * FgHeaderComponent -
 * Component renders powerbot application header
 */
@Component({
  selector: 'pb-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent extends FgComponentBaseComponent {
  entity: PowerBotEntity;
  /**
   * CONSTRUCTOR
   */
  constructor(
    $component: FgComponentBaseService
  ) {
    super(
      $component
    );
    this.actions = [
      new FgAction(new FgEvent(FgComponentBaseEvent.EXPORT, this), 'primary', 'Export', 'import_export', 'E'),
      new FgAction(new FgEvent(FgComponentBaseEvent.PRINT, this), 'primary', 'Print', 'print', 'P'),
      new FgAction(new FgEvent(PbAppEvent.SWITCH_THEME, this, false, false, true), 'primary', (): string => {
        return 'Switch to '.concat( this.$component.$data.app.config.darkTheme ? 'bright' : 'dark', ' theme' );
      }, (): string => {
        return this.$component.$data.app.config.darkTheme ? 'brightness_7' : 'brightness_3';
      }, 'T'),
      new FgAction(new FgEvent(PbAppEvent.OPEN_HELP_MODAL, this), 'primary', 'Help', 'live_help', 'H'),
    ];
  }
  /**
   * Handle events received from action-bar
   */
  handleActionBarEvent($event: Event): void {
    this.$component.$log.warn('ACTION', $event);
    this.$component.$data.app.config.darkTheme = !this.$component.$data.app.config.darkTheme;
  }
  getProductionDisabled(): boolean {
    let disabled: boolean = true;
    if (
      this.entity.state.connectionState === ConnectionState.Offline
      && this.entity.state.appEnv !== AppEnv.Live_Prod
      && this.entity.config.prodConfig.apiKey
      && this.entity.config.prodConfig.serverUrl
      && this.entity.config.prodConfig.backupUrl
      ) {
        disabled = false;
      }
      return disabled;
    }
    getTestDisabled(): boolean {
      let disabled: boolean = true;
      if (
        this.entity.state.connectionState === ConnectionState.Offline
        && this.entity.state.appEnv !== AppEnv.Live_Test
        && this.entity.config.testConfig.apiKey
        && this.entity.config.testConfig.serverUrl
    ) {
      disabled = false;
    }
    return disabled;
  }
  getDisconnectDisabled(): boolean {
    let disabled: boolean = true;
    if (
      this.entity.state.connectionState !== ConnectionState.Offline
      && this.entity.state.appEnv !== AppEnv.Offline
    ) {
      disabled = false;
    }
    return disabled;
  }
  getMarketDisabled(): boolean {
    let disabled: boolean = true;
    if (
      this.entity.state.marketState !== ConnectionState.Offline
    ) {
      disabled = false;
    }
    return disabled;
  }
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
    this.emitEvent(new FgEvent(PbAppEvent.DISCONNECT_API, this));
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
    this.emitEvent(new FgEvent(PbAppEvent.DISCONNECT_MARKET));
  }
}
