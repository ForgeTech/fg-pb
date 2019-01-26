import { Component, ChangeDetectionStrategy } from '@angular/core';
import { FgComponentBaseComponent } from '../../fg-component-base/fg-component-base.component';
import { FgComponentBaseService } from '../../fg-component-base/fg-component-base.service';
import { FormGroup, FormBuilder, Validators, ValidationErrors, AbstractControl } from '@angular/forms';
import { ConfigConnection } from '../../../entity/entity.export';
import { PbModalTabComponentInterface } from '../../../interface/pb-modal-tab-component.interface';
import { FgEvent } from '../../../class/fg-event.class';
import { PbAppEvent } from '../../../event/pb-app.event';
import { regexUrlValidationPattern } from '../../../validators/RegexUrlValidationPattern';
import { AsyncUrlRespondsValidator } from 'src/app/validators/async-url-responds.validator';
import { AsyncUrlApiKeyRespondsValidator } from 'src/app/validators/async-url-api-key-responds.validator';
import { ObservableQuery, ApolloQueryResult } from 'apollo-client';
// import { SyncMatchFieldlValidator } from '../../../validators/sync-match-field.validator';
import { Subject, Observable, merge, BehaviorSubject } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { SyncMatchFieldlValidator } from 'src/app/validators/sync-match-field.validator';
import { Configuration } from 'src/app/module/pb-api';
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
   * Observable provides state of the apiKey-generator buttons
   */
  public apiKeyDisabled$: Subject<boolean> = new BehaviorSubject( true );
  /**
   * CONSTRUCTOR
   */
  constructor(
    public $component: FgComponentBaseService,
    protected $fb: FormBuilder,
    protected $AsyncUrlRespondsValidator: AsyncUrlRespondsValidator,
    protected $AsyncUrlApiKeyRespondsValidator: AsyncUrlApiKeyRespondsValidator
  ) {
    super(
      $component
    );
    this.request$ = this.$component.$apollo.watchQuery(`
      query getConfigConnection($id: Int!) {
        getConfigConnection(id: $id) @client {
          id
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
          this.form.controls[ key ].markAsTouched();
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
      debounceTime( 100 ),
      distinctUntilChanged()
    );
    // If serverUrl/backupUrl-changes and apiKey contains value, revalidate field
    this._subscribtions.push( urlChanges.subscribe( event => {
      if ( !this.form.controls.apiKey.valid
        && ( this.form.controls.serverUrl.valid || this.form.controls.backupUrl.valid
      ) ) {
        this.form.get('apiKey').updateValueAndValidity();
      }
    }));
    // If serverUrl/backupUrl-changes update apyKey generator-button disabled-state -
    // if either url is valid ( false ) oterwise ( true )
    this._subscribtions.push( urlChanges.subscribe( event => {
      if ( this.form.controls.serverUrl.valid || this.form.controls.backupUrl.valid ) {
        this.apiKeyDisabled$.next( false );
      } else {
        this.apiKeyDisabled$.next( true );
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
    let basePath: any = false;
    if ( this.form.controls.serverUrl.valid ) {
      basePath = this.form.controls.serverUrl.value;
    } else if ( this.form.controls.backupUrl.valid ) {
      basePath = this.form.controls.backupUrl.value;
    }
    if ( basePath ) {
      this.$component.$event.emit(new FgEvent(PbAppEvent.OPEN_API_KEY_MODAL, this, { productionEnv: true, basePath: basePath}));
    }
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

  }
  /**
   * If checkbox for store configuration is set to false, delete
   * configuration if available
   * @param $event
   */
  public clearStore( $event ) {
    if ( this.form.controls.cache.value === false ) {
      this.$component.$apollo.mutate(`
      mutation setConfigConnection($id: Int! $delete: Boolean! $data: Object) {
        setConfigConnection(id: $id, delete: $delete, data: $data ) @client
      }`,
      {
        id: 0,
        delete: true,
        data: {
          serverUrl: 'fark fark',
          backupUrl: 'fark fark 2'
        }
      });
    }
  }
  /**
   * Configure data-service with powerbot-production
   * configuration
   */
  public reset( $event: any = false ) {
    $event.preventDefault();
    this.form.reset();
    this.clearStore( $event );
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
