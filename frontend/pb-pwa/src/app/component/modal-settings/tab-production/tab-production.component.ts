import { Component } from '@angular/core';
import { FgComponentBaseComponent } from '../../fg-component-base/fg-component-base.component';
import { FgComponentBaseService } from '../../fg-component-base/fg-component-base.service';
import { FormGroup, FormBuilder, Validators, ValidationErrors, FormControl, AbstractControl } from '@angular/forms';
import { ConfigProductionConnection } from '../../../entity/entity.export';
import { PbAppStorageConst } from '../../../app.const';
import { PbModalTabComponentInterface } from '../../../interface/pb-modal-tab-component.interface';
import { FgEvent } from '../../../class/fg-event.class';
import { PbAppEvent } from '../../../event/pb-app.event';
import { regexUrlValidationPattern } from '../../../validators/RegexUrlValidationPattern';
import { Subject, Observable } from 'rxjs';
import { SyncUrlsEqualValidator } from '../../../validators/sync-urls-equal.validator';
import { AsyncUrlRespondsValidator } from 'src/app/validators/async-url-responds.validator';
import { AsyncUrlApiKeyRespondsValidator } from 'src/app/validators/async-url-api-key-responds.validator';
import { merge } from 'rxjs';
/**
 * Enum for formGroup validation-states
 */
export enum ValidationState {
  'INVALID',
  'PENDING',
  'VALID',
}
@Component({
  selector: 'pb-tab-production',
  templateUrl: './tab-production.component.html',
  styleUrls: ['./tab-production.component.scss'],
})
export class TabProductionComponent extends FgComponentBaseComponent implements PbModalTabComponentInterface {
  /**
   * Form containing input-elements to allow
   * setting production-form configuration
   */
  public form: FormGroup;
  public actionLabel = 'button_label_connect';
  /**
   * CONSTRUCTOR
   */
  constructor(
    public $component: FgComponentBaseService,
    protected $fb: FormBuilder,
    protected $AsyncUrlRespondsValidator: AsyncUrlRespondsValidator,
    protected $AsyncUrlApiKeyRespondsValidator: AsyncUrlApiKeyRespondsValidator,
    protected $SyncUrlsEqualValidator: SyncUrlsEqualValidator
  ) {
    super(
      $component
    );
    this.form = $fb.group({
      hideRequired: false,
      floatLabel: 'auto',
      asyncValidator: [
        this.$AsyncUrlApiKeyRespondsValidator.validate.bind(this.$AsyncUrlApiKeyRespondsValidator)
      ],
      serverUrl: [null,
          [
            Validators.required,
            Validators.pattern(regexUrlValidationPattern)
          ],
          [
            this.$AsyncUrlRespondsValidator.validate.bind(this.$AsyncUrlRespondsValidator)
          ]
      ],
      backupUrl: [null, [
            Validators.required,
            Validators.pattern(regexUrlValidationPattern),
            // this.$SyncUrlsEqualValidator.validate.bind(this.$SyncUrlsEqualValidator)
          ],
          [
            this.$AsyncUrlRespondsValidator.validate.bind(this.$AsyncUrlRespondsValidator)
          ]
      ],
      apiKey: [null,
        [
          Validators.required
        ],
        [
          this.$AsyncUrlApiKeyRespondsValidator.validate.bind(this.$AsyncUrlApiKeyRespondsValidator)
        ],
      ],
      store: [null, []],
    });
    // If either serverUrl or backupUrl validation-state changes and apiKey contains value revalidate field
    const urlChanges: Observable<any> = merge(
      this.form.controls.serverUrl.statusChanges,
      this.form.controls.backupUrl.statusChanges
    );
    // If serverUrl/backupUrl-changes and apiKey contains value, revalidate field
    this._subscribtions.push( urlChanges.subscribe( event => {
      if ( ( this.form.controls.serverUrl.valid || this.form.controls.backupUrl.valid ) && this.form.controls.apiKey.value ) {
        this.form.get('apiKey').updateValueAndValidity();
      }
    }));
  }
  getServerUrlErrorMessage( errors: ValidationErrors ) {
    // console.log('errors');
    // console.log(errors);
    // console.log(this.form);
    return  'invalid url';
  }
  getBackupUrlErrorMessage( errors: ValidationErrors ) {
    // console.log('errors');
    // console.log(errors);
    // console.log(this.form);
    return  'invalid url';
  }
  getApiErrorMessage( errors: ValidationErrors ) {
    // console.log('this.form');
    // console.log(this.form);
    return  'invalid api';
  }
  /**
   * Set form-data from powerbot storage
   */
  public setFormData(): void {
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
