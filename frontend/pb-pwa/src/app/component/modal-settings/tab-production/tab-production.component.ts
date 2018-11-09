import { Component, ChangeDetectionStrategy } from '@angular/core';
import { FgComponentBaseComponent } from '../../fg-component-base/fg-component-base.component';
import { FgComponentBaseService } from '../../fg-component-base/fg-component-base.service';
import { FormGroup, FormBuilder, Validators, ValidationErrors, AbstractControl } from '@angular/forms';
import { ConfigConnection } from '../../../entity/entity.export';
import { PbAppStorageConst } from '../../../app.const';
import { PbModalTabComponentInterface } from '../../../interface/pb-modal-tab-component.interface';
import { FgEvent } from '../../../class/fg-event.class';
import { PbAppEvent } from '../../../event/pb-app.event';
import { regexUrlValidationPattern } from '../../../validators/RegexUrlValidationPattern';
import { AsyncUrlRespondsValidator } from 'src/app/validators/async-url-responds.validator';
import { AsyncUrlApiKeyRespondsValidator } from 'src/app/validators/async-url-api-key-responds.validator';
import { ObservableQuery, ApolloQueryResult } from 'apollo-client';
import { SyncMatchFieldlValidator } from '../../../validators/sync-match-field.validator';
import { Subject, Observable, merge } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
/**
 * TabProductionComponent -
 * Component used to set production-configuration
 * for Powerbot-application
 */
@Component({
  selector: 'pb-tab-production',
  templateUrl: './tab-production.component.html',
  styleUrls: ['./tab-production.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TabProductionComponent extends FgComponentBaseComponent implements PbModalTabComponentInterface {
  /**
   * Form containing input-elements to allow
   * setting production-form configuration
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
    protected $AsyncUrlApiKeyRespondsValidator: AsyncUrlApiKeyRespondsValidator
    // protected $SyncMatchFieldlValidator: SyncMatchFieldlValidator
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
      { id: 0 }
    );
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
      backupUrl: [null, [
            Validators.required,
            Validators.pattern(regexUrlValidationPattern),
            SyncMatchFieldlValidator.matchField( 'serverUrl' )
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
      cache: [null, []],
    });
    // Update data-observable on request-update
    this._subscribtions.push(
      this.request$.subscribe( ( result: ApolloQueryResult<any> ) => {
        this.data$.next( result.data.getConfigConnection as ConfigConnection );
      })
    );
    // Set form-data on data-update
    this._subscribtions.push(
      this.data$.subscribe( result => {
        Object.keys(this.form.controls).forEach( key => {
          this.form.controls[ key ].setValue( result[ key ]);
        });
      })
    );
    // If serverUrl-changes and backupUrl contains value, revalidate field
    this._subscribtions.push( this.form.controls.serverUrl.valueChanges.subscribe( event => {
        this.form.controls.backupUrl.updateValueAndValidity({emitEvent: true});
    }));
    // If either serverUrl or backupUrl validation-state changes and apiKey contains value revalidate field
    const urlChanges: Observable<any> = merge(
      this.form.controls.serverUrl.statusChanges,
      this.form.controls.backupUrl.statusChanges
    ).pipe(
      // Only update once if both fields are updated
      // by delaying execution
      debounceTime( 100 )
    );
    // If serverUrl/backupUrl-changes and apiKey contains value, revalidate field
    this._subscribtions.push( urlChanges.pipe( debounceTime( 100 ) ).subscribe( event => {
      if ( !this.form.controls.apiKey.valid
        && ( this.form.controls.serverUrl.valid || this.form.controls.backupUrl.valid
      ) ) {
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
  /** Open generate ApiKey-Modal */
  public openApiKeyModal($event: Event) {
    event.preventDefault();
    this.$component.$event.emit(new FgEvent(PbAppEvent.OPEN_API_KEY_MODAL, this));
  }
  /**
   * Create production-config from form-data
   */
  private getProductionConfig(): ConfigConnection {
    let config: ConfigConnection = new ConfigConnection();
    config.serverUrl = this.form.controls.serverUrl.value;
    config.backupUrl = this.form.controls.backupUrl.value;
    config.apiKey = this.form.controls.apiKey.value;
    config.cache = this.form.controls.cache.value;
    return config;
  }
  /**
   * Persist production-config in browser
   */
  private storeProductionConfig(config: ConfigConnection): void {
    this.$component.$data.$storage.setItem(
      PbAppStorageConst.CONFIG_PRODUCTION,
      config
    );
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
   * Configure data-service with powerbot-production
   * configuration
   */
  public action( $event: any = false ) {
    const config = this.getProductionConfig();
    if ( !this.form.errors && this.form.controls.cache.value === true ) {
      this.storeProductionConfig( config );
    }
    this.$component.$event.emit(new FgEvent(PbAppEvent.CONNECT_API_PROD, this));
  }
}
