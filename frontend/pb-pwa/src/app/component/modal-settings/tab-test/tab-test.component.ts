import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FgComponentBaseComponent } from '../../fg-component-base/fg-component-base.component';
import { FgComponentBaseService } from '../../fg-component-base/fg-component-base.service';
import { FormGroup, FormBuilder, Validators, ValidationErrors } from '@angular/forms';
import { ConfigConnection } from '../../../entity/entity.export';
import { PbModalTabComponentInterface } from '../../../interface/pb-modal-tab-component.interface';
import { FgEvent } from '../../../class/fg-event.class';
import { PbAppEvent } from '../../../event/pb-app.event';
import { regexUrlValidationPattern } from '../../../validators/RegexUrlValidationPattern';
import { AsyncUrlRespondsValidator } from '../../../validators/async-url-responds.validator';
import { AsyncUrlApiKeyRespondsValidator } from 'src/app/validators/async-url-api-key-responds.validator';
import { Subject } from 'rxjs';
import { ObservableQuery } from 'apollo-client';

/**
 * TabTestComponent -
 * This tab is used to set powerbot test-api configuraion
 * data
 */
@Component({
  selector: 'pb-tab-test',
  templateUrl: './tab-test.component.html',
  styleUrls: ['./tab-test.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TabTestComponent extends FgComponentBaseComponent implements PbModalTabComponentInterface {
  /**
   * Form containing input-elements to allow
   * setting test-connection configuration
   */
  public form: FormGroup;
  /**
   * Label key provided for use with action-button
   */
  public actionLabel = 'button_label_connect';
  /**
   * Observable for providing graphql-query to
   * fetch local-client state
   */
  public request$: ObservableQuery;
  /**
   * Observable to provide fetched local-client state data
   */
  public data$: Subject<ConfigConnection> = new Subject();
  /**
   * CONSTRUCTOR
   */
  constructor(
    public $component: FgComponentBaseService,
    protected $fb: FormBuilder,
    protected $AsyncUrlRespondsValidator: AsyncUrlRespondsValidator,
    protected $AsyncUrlApiRespondsValidator: AsyncUrlApiKeyRespondsValidator
  ) {
    super(
      $component
    );
    this.request$ = this.$component.$apollo.watchQuery(`
      query getConfigConnection($id: Int!) {
        getConfigConnection(id: $id) @client {
          isProduction
          isValid
          apiKey,
          backupUrl,
          serverUrl,
          cache
        }
      }`,
      { id: 1 }
    );
    // this.data$ = this.$component.$apollo.watchQuery
    this.form = $fb.group({
      serverUrl: [null,
        [
          Validators.required,
          Validators.pattern(regexUrlValidationPattern)
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
          this.$AsyncUrlApiRespondsValidator.validate.bind(this.$AsyncUrlApiRespondsValidator)
        ],
      ],
      cache: [null, []],
    });
    this._subscribtions.push(
      this.request$.subscribe(result => {
        this.data$.next(result.data.getConfigConnection as ConfigConnection);
      })
    );
    this._subscribtions.push(
      this.data$.subscribe(result => {
        this.$component.$log.warn('RESULT-TEST');
        console.log(result);
        this.form.patchValue(result);
        // Object.keys(this.form.controls).forEach(field => {
        //   const control = this.form.get(field) as AbstractControl;
        //   console.log('key: ', field);
        //   control.markAsTouched()
        //   control.markAsDirty();
        //   control.setValue(result[field]);
        //   control.updateValueAndValidity();
        // });
        // }
      })
    );
    // If serverUrl-changes and apiKey contains value, revalidate field
    this._subscribtions.push(this.form.controls.serverUrl.statusChanges.subscribe(event => {
      if ( this.form.get('serverUrl').valid && this.form.get('apiKey').value ) {
        this.form.get('apiKey').updateValueAndValidity();
      }
    }));
  }
  getServerUrlErrorMessage(errors: ValidationErrors) {
    return 'Server Url Error';
  }
  getApiErrorMessage(errors: ValidationErrors) {
    return 'Api Key Error';
  }
  /**
   * Open generate ApiKey-Modal
  */
  openApiKeyModal( $event: Event ) {
    $event.preventDefault();
    this.$component.$event.emit(new FgEvent(PbAppEvent.OPEN_API_KEY_MODAL, this));
  }
  /**
   * Create logging-config from form-data
   */
  private getTestData(): ConfigConnection {
    let config: ConfigConnection = new ConfigConnection();
    config.serverUrl = this.form.controls.serverUrl.value;
    config.apiKey = this.form.controls.apiKey.value;
    config.cache = this.form.controls.cache.value;
    return config;
  }
  /**
   * Persist logging-config in browser
   */
  private storeTestConfig(): ConfigConnection {
    const config = this.getTestData();

    return config;
  }
  /**
  * If checkbox for store configuration is set to false, delete
  * configuration if available
  * @param $event
  */
  public clearStore($event) {
    if (this.form.controls.store.value === false) {

    }
  }
  /**
   * Configure data-service with powerbot-production
   * configuration
   */
  public reset( $event: any = false ) {
    $event.preventDefault();
    this.form.reset();
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
    if (!this.form.errors && this.form.controls.cache.value === true) {
      this.storeTestConfig();
    }
    if (!this.form.errors) {
      this.$component.$data.app.config.testConfig = config;
      this.$component.$event.emit(new FgEvent(PbAppEvent.CONNECT_API_TEST, this));
    }
  }
}
