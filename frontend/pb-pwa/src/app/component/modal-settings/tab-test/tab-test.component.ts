import { Component, OnInit } from '@angular/core';
import { FgComponentBaseComponent } from '../../fg-component-base/fg-component-base.component';
import { FgComponentBaseService } from '../../fg-component-base/fg-component-base.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ConfigTestConnection } from '../../../entity/entity.export';
import { PbAppStorageConst } from '../../../app.storage.const';
import { PbModalTabComponentInterface } from '../../../interface/pb-modal-tab-component.interface';

@Component({
  selector: 'pb-tab-test',
  templateUrl: './tab-test.component.html',
  styleUrls: ['./tab-test.component.scss']
})
export class TabTestComponent extends FgComponentBaseComponent implements PbModalTabComponentInterface {
  /**
   * Form containing input-elements to allow
   * setting test-connection configuration
   */
  public form: FormGroup;
  /**
   * CONSTRUCTOR
   */
  constructor(
    protected $component: FgComponentBaseService,
    protected $fb: FormBuilder
  ) {
    super(
      $component
    );
    this.form = $fb.group({
      hideRequired: false,
      floatLabel: 'auto',
      serverUrl: [null, [Validators.required, Validators.minLength(5)]],
      apiKey: [null, [Validators.required]],
      cacheForm: [null, []],
    });
  }
  /**
 * Create logging-config from form-data
 */
  private getLoggingConfig(): ConfigTestConnection {
    let config: ConfigTestConnection = new ConfigTestConnection();
    config.api_server_url = this.form.controls.serverUrl.value;
    config.api_key = this.form.controls.apiKey.value;
    return config;
  }
  /**
   * Persist logging-config in browser
   */
  private storeLoggingConfig() {
    this.$component.$data.$storage.setItem(
      PbAppStorageConst.PB_SETTINGS_TEST,
      this.getLoggingConfig()
    );
  }
  /**
   * TODO: Find out how to update configured connection
   * for generated api services
   *
   * Configure log-service with remote logging-url and
   * store config when cacheForm is true
   */
  public action() {
    this.$component.$log.warn('CONNECT LOGGER');
    if (!this.form.errors && this.form.controls.cacheForm.value === true) {
      this.$component.$log.warn('Store Config');
      this.storeLoggingConfig();
    }
    let config = this.getLoggingConfig();
  }
}
