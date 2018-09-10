import { Component } from '@angular/core';
import { FgComponentBaseComponent } from '../../fg-component-base/fg-component-base.component';
import { FgComponentBaseService } from '../../fg-component-base/fg-component-base.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ConfigLoggingConnection } from '../../../entity/entity.export';
import { PbAppStorageConst } from '../../../app.storage.const';
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
      logUrl: [null, [Validators.required, Validators.minLength(5)]],
      logLevel: [null, []],
      debugUrl: [null, []],
      store: [null, []]
    });
    this.setFormData();
  }
  /**
   * Set form-data from powerbot storage
   */
  private setFormData(): void {
    this.form.patchValue(
      this.$component.$data.$powerbot.config.logConfig
    );
  }
  /**
   * Helper-Methode to provide log-level values
   * in a way they can be used with ngFor-directive
   */
  // public logLevelsKeys(): Array<string> {
  //   let keys = Object.keys(this.logLevels);
  //   keys = keys.slice(keys.length / 2);
  //   return keys;
  // }
  /**
   * Create logging-config from form-data
   */
  private getLoggingConfig(): ConfigLoggingConnection {
    let config: ConfigLoggingConnection = new ConfigLoggingConnection();
    config.logUrl = this.form.controls.logUrl.value;
    config.logLevel = this.form.controls.logLevel.value;
    config.debugUrl = this.form.controls.debugUrl.value;
    config.store = this.form.controls.store.value;
    return config;
  }
  /**
   * Persist logging-config in browser
   */
  private storeLoggingConfig() {
    this.$component.$data.$storage.setItem(
      PbAppStorageConst.CONFIG_LOGGING,
      this.getLoggingConfig()
    );
  }
  /**
   * Configure log-service with remote logging-url and
   * store config when cacheForm is true
   */
  public action($event: any = false) {
    if ( !this.form.errors &&  this.form.controls.store.value === true) {
      this.storeLoggingConfig();
    }
    let config = this.getLoggingConfig();
    let currentConfig: LoggerConfig = this.$component.$log.getConfigSnapshot();
    currentConfig.serverLoggingUrl = config.logUrl;
    currentConfig.serverLogLevel = this.logLevels[config.logLevel];
    // this.$component.$log.updateConfig( currentConfig );
  }

}
