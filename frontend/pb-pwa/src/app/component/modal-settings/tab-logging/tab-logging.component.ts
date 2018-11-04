import { Component } from '@angular/core';
import { FgComponentBaseComponent } from '../../fg-component-base/fg-component-base.component';
import { FgComponentBaseService } from '../../fg-component-base/fg-component-base.service';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { ConfigLoggingConnection } from '../../../entity/entity.export';
import { PbAppStorageConst } from '../../../app.const';
import { NgxLoggerLevel, LoggerConfig } from 'ngx-logger';
import { PbModalTabComponentInterface } from '../../../interface/pb-modal-tab-component.interface';

@Component({
  selector: 'pb-tab-logging',
  templateUrl: './tab-logging.component.html',
  styleUrls: ['./tab-logging.component.scss']
})
export class TabLoggingComponent extends FgComponentBaseComponent implements PbModalTabComponentInterface {
  /**
   * Form containing input-elements to allow
   * setting logging/debuging configuration
   */
  public form: FormGroup;
  public actionLabel = 'button_label_connect';
  /**
   * Provide log-level enum to component
   */
  public logLevels = NgxLoggerLevel;
  /**
   * CONSTRUCTOR
   */
  constructor(
    public $component: FgComponentBaseService,
    protected $fb: FormBuilder
  ) {
    super(
      $component
    );
    this.form = $fb.group({
      hideRequired: false,
      floatLabel: 'auto',
      logDir: [null, [
        Validators.required
      ]],
      logLevel: [null, [
        Validators.required
      ]],
      store: [null, []]
    });
  }
  /**
   * Set form-data from powerbot storage
   */
  public setFormData(): void {
    if ( this.$component.$data.app.config.logConfig ) {
      this.form.patchValue(
        this.$component.$data.app.config.logConfig
      );
    }
  }
  /**
   * Create logging-config from form-data
   */
  private getLoggingConfig(): ConfigLoggingConnection {
    let config: ConfigLoggingConnection = new ConfigLoggingConnection();
    config.logFolder = this.form.controls.logUrl.value;
    config.logLevel = this.form.controls.logLevel.value;
    config.store = this.form.controls.store.value;
    return config;
  }
  /**
   * Persist logging-config in browser
   */
  private storeLoggingConfig(): ConfigLoggingConnection {
    const config = this.getLoggingConfig();
    this.$component.$data.$storage.setItem(
      PbAppStorageConst.CONFIG_LOGGING,
      config
    );
    return config;
  }
  /**
   * If checkbox for store configuration is set to false, delete
   * configuration if available
   * @param $event
   */
  public clearStore( $event ) {
    if ( this.form.controls.store.value === false ) {
      this.$component.$data.$storage.removeItem(PbAppStorageConst.CONFIG_LOGGING);
    }
  }
  /**
   * Configure log-service with remote logging-url and
   * store config when cacheForm is true
   */
  public action($event: any = false) {
    const config = this.getLoggingConfig();
    if ( !this.form.errors &&  this.form.controls.store.value === true) {
      this.storeLoggingConfig();
    }
    // if ( !this.form.errors ){
    //   let currentConfig: LoggerConfig = this.$component.$log.getConfigSnapshot();
    //   currentConfig.serverLoggingUrl = config.log;
    //   currentConfig.serverLogLevel = this.logLevels[config.logLevel];
    //   // this.$component.$log.updateConfig( currentConfig );
    // }
  }

}
