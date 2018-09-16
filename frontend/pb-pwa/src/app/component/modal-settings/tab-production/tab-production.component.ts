import { Component } from '@angular/core';
import { FgComponentBaseComponent } from '../../fg-component-base/fg-component-base.component';
import { FgComponentBaseService } from '../../fg-component-base/fg-component-base.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ConfigProductionConnection } from '../../../entity/entity.export';
import { PbAppStorageConst } from '../../../app.const';
import { PbModalTabComponentInterface } from '../../../interface/pb-modal-tab-component.interface';
import { FgEvent } from '../../../class/fg-event.class';
import { PbAppEvent } from '../../../event/pb-app.event';

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
    public $component: FgComponentBaseService,
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
      store: [null, []],
    });
    this.setFormData();
  }
  /**
   * Set form-data from powerbot storage
   */
  private setFormData(): void {
    if (this.$component.$data.app.config.prodConfig ) {
      this.form.patchValue(
        this.$component.$data.app.config.prodConfig
      );
    }
  }
  /**
   * Create production-config from form-data
   */
  private getProductionConfig(): ConfigProductionConnection {
    let config: ConfigProductionConnection = new ConfigProductionConnection();
    config.serverUrl = this.form.controls.serverUrl.value;
    config.backupUrl = this.form.controls.backupUrl.value;
    config.apiKey = this.form.controls.apiKey.value;
    config.store = this.form.controls.store.value;
    return config;
  }
  /**
   * Persist production-config in browser
   */
  private storeProductionConfig(): ConfigProductionConnection {
    const config = this.getProductionConfig();
    this.$component.$data.$storage.setItem(
      PbAppStorageConst.CONFIG_PRODUCTION,
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
      this.$component.$data.$storage.removeItem(PbAppStorageConst.CONFIG_PRODUCTION);
    }
  }
  /**
   * TODO: Find out how to update configuration for
   * generated api-services - and how to configure a second
   * connection for backup-server
   *
   * Configure data-service with powerbot-production
   * configuration
   */
  public action( $event: any = false ) {
    const config = this.getProductionConfig();
    if ( !this.form.errors && this.form.controls.store.value === true ) {
      this.storeProductionConfig();
    }
    if ( !this.form.errors ) {
      this.$component.$data.app.config.prodConfig = config;
      this.$component.$event.emit(new FgEvent(PbAppEvent.CONNECT_API_PROD, this));
    }
  }
}
