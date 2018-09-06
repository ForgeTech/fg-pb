import { Component } from '@angular/core';
import { FgComponentBaseComponent } from '../../fg-component-base/fg-component-base.component';
import { FgComponentBaseService } from '../../fg-component-base/fg-component-base.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ConfigProductionConnection } from '../../../entity/entity.export';
import { PbAppStorageConst } from '../../../app.storage.const';
import { PbModalTabComponentInterface } from '../../../interface/pb-modal-tab-component.interface';

@Component({
  selector: 'pb-tab-production',
  templateUrl: './tab-production.component.html',
  styleUrls: ['./tab-production.component.scss']
})
export class TabProductionComponent extends FgComponentBaseComponent implements PbModalTabComponentInterface {
  /**
   * Form containing input-elements to allow
   * setting production-form configuration
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
      backupUrl: [null, [Validators.required]],
      apiKey: [null, [Validators.required]],
      cacheForm: [null, []],
    });
  }
  /**
   * Create production-config from form-data
   */
  private getProductionConfig(): ConfigProductionConnection {
    let config: ConfigProductionConnection = new ConfigProductionConnection();
    config.api_server_url = this.form.controls.serverUrl.value;
    config.backup_server_url = this.form.controls.backupUrl.value;
    return config;
  }
  /**
   * Persist production-config in browser
   */
  private storeProductionConfig() {
    this.$component.$data.$storage.setItem(
      PbAppStorageConst.PB_SETTINGS_PRODUCTION,
      this.getProductionConfig()
    );
  }
  /**
   * TODO: Find out how to update configuration for
   * generated api-services - and how to configure a second
   * connection for backup-server
   *
   * Configure data-service with powerbot-production
   * configuration
   */
  public action() {
    this.$component.$log.warn('CONNECT LOGGER');
    if (!this.form.errors && this.form.controls.cacheForm.value === true) {
      this.$component.$log.warn('Store Config');
      this.storeProductionConfig();
    }
    let config = this.getProductionConfig();
  }

}
