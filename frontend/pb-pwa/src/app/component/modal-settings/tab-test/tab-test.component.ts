import { Component, OnInit } from '@angular/core';
import { FgComponentBaseComponent } from '../../fg-component-base/fg-component-base.component';
import { FgComponentBaseService } from '../../fg-component-base/fg-component-base.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ConfigTestConnection } from '../../../entity/entity.export';
import { PbAppStorageConst } from '../../../app.storage.const';
import { PbModalTabComponentInterface } from '../../../interface/pb-modal-tab-component.interface';
import { FgEvent } from '../../../class/fg-event.class';
import { PbAppEvent } from '../../../event/pb-app.event';

/**
 * TabTestComponent -
 * This Tab is used to set powerbot test-api configuraion
 * data
 */
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
      apiKey: [null, [Validators.required]],
      store: [null, []],
    });
    this.setFormData();
  }
  /**
   * Set form-data from powerbot storage
   */
  private setFormData(): void {
    this.$component.$log.warn('SET DATA!!!');
    this.form.patchValue(
      this.$component.$data.$powerbot.config.testConfig
    );
  }
  /**
   * Create logging-config from form-data
   */
  private getFormData(): ConfigTestConnection {
    let config: ConfigTestConnection = new ConfigTestConnection();
    config.serverUrl = this.form.controls.serverUrl.value;
    config.apiKey = this.form.controls.apiKey.value;
    config.store = this.form.controls.store.value;
    return config;
  }
  /**
   * Persist logging-config in browser
   */
  private storeLoggingConfig() {
    this.$component.$data.$storage.setItem(
      PbAppStorageConst.CONFIG_TEST,
      this.getFormData()
    );
  }
  /**
   * TODO: Find out how to update configured connection
   * for generated api services
   *
   * Configure log-service with remote logging-url and
   * store config when cacheForm is true
   */
  public action($event: any = false) {
    if (!this.form.errors && this.form.controls.store.value === true) {
      this.storeLoggingConfig();
    }
    this.$component.$event.emit(new FgEvent(PbAppEvent.CONNECT_API_TEST, this));
  }
}
