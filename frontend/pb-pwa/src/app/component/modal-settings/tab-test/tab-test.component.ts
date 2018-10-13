import { Component, OnInit } from '@angular/core';
import { FgComponentBaseComponent } from '../../fg-component-base/fg-component-base.component';
import { FgComponentBaseService } from '../../fg-component-base/fg-component-base.service';
import { FormGroup, FormBuilder, Validators, ValidationErrors } from '@angular/forms';
import { ConfigTestConnection } from '../../../entity/entity.export';
import { PbAppStorageConst } from '../../../app.const';
import { PbModalTabComponentInterface } from '../../../interface/pb-modal-tab-component.interface';
import { FgEvent } from '../../../class/fg-event.class';
import { PbAppEvent } from '../../../event/pb-app.event';
import { regexUrlValidationPattern } from '../../../validators/RegexUrlValidationPattern';
import { AsyncUrlRespondsValidator } from '../../../validators/async-url-responds.validator';
import { AppEnv } from '../../../entity/app-state.entity';

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
    protected $fb: FormBuilder,
    protected $AsyncUrlRespondsValidator: AsyncUrlRespondsValidator
  ) {
    super(
      $component
    );
    this.form = $fb.group({
      hideRequired: false,
      floatLabel: 'auto',
      serverUrl: [null,
        {
          validators: [
            Validators.required, Validators.pattern(regexUrlValidationPattern)
          ],
          asyncValidators: [this.$AsyncUrlRespondsValidator.validate.bind(this.$AsyncUrlRespondsValidator)],
          updateOn: 'blur'
        }
      ],
      apiKey: [null, {
        validators: [
          Validators.required
        ],
        asyncValidators: [
          this.$AsyncUrlRespondsValidator.validate.bind(this.$AsyncUrlRespondsValidator)
        ],
        updateOn: 'blur'
      }],
      store: [null, []],
    });
    this.setFormData();
  }
  getServerUrlErrorMessage(errors: ValidationErrors) {
    return 'Server Url Error';
  }
  getApiErrorMessage(errors: ValidationErrors) {
    return 'Api Key Error';
  }
  /**
   * Set form-data from powerbot storage
   */
  public setFormData(): void {
    if (this.$component.$data.app.config.testConfig ) {
      this.form.patchValue(
        this.$component.$data.app.config.testConfig
      );
    }
  }
  /**
   * Create logging-config from form-data
   */
  private getTestData(): ConfigTestConnection {
    let config: ConfigTestConnection = new ConfigTestConnection();
    config.serverUrl = this.form.controls.serverUrl.value;
    config.apiKey = this.form.controls.apiKey.value;
    config.store = this.form.controls.store.value;
    return config;
  }
  /**
   * Persist logging-config in browser
   */
  private storeTestConfig(): ConfigTestConnection {
    const config = this.getTestData();
    this.$component.$data.$storage.setItem(
      PbAppStorageConst.CONFIG_TEST,
      config
    );
    return config;
  }
  /**
  * If checkbox for store configuration is set to false, delete
  * configuration if available
  * @param $event
  */
  public clearStore($event) {
    if (this.form.controls.store.value === false) {
      this.$component.$data.$storage.removeItem(PbAppStorageConst.CONFIG_TEST);
    }
  }
  /**
   * TODO: Find out how to update configured connection
   * for generated api services
   *
   * Configure log-service with remote logging-url and
   * store config when cacheForm is true
   */
  public action($event: any = false) {
    const config = this.getTestData();
    if (!this.form.errors && this.form.controls.store.value === true) {
      this.storeTestConfig();
    }
    if (!this.form.errors) {
      this.$component.$data.app.config.testConfig = config;
      this.$component.$event.emit(new FgEvent(PbAppEvent.CONNECT_API_TEST, this));
    }
  }
}
