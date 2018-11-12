import { Component, ChangeDetectionStrategy } from '@angular/core';
import { FgComponentBaseComponent } from '../../fg-component-base/fg-component-base.component';
import { FgComponentBaseService } from '../../fg-component-base/fg-component-base.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ConfigLogging } from '../../../entity/entity.export';
import { NgxLoggerLevel } from 'ngx-logger';
import { PbModalTabComponentInterface } from '../../../interface/pb-modal-tab-component.interface';
import { ObservableQuery } from 'apollo-client';
import { Subject } from 'rxjs';
/**
 * TabLoggingComponent -
 * Component used to set logging-configuration
 * for Powerbot-application
 */
@Component({
  selector: 'pb-tab-logging',
  templateUrl: './tab-logging.component.html',
  styleUrls: ['./tab-logging.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TabLoggingComponent extends FgComponentBaseComponent implements PbModalTabComponentInterface {
  /**
   * Form containing input-elements to allow
   * setting logging/debuging configuration
   */
  public form: FormGroup;
  /**
   * Label key provided for use with action-button
   */
  public actionLabel = 'button_label_set_configuration';
  /**
   * Observable for providing graphql-query to
   * fetch local-client state
   */
  public request$: ObservableQuery;
  /**
   * Observable to provide fetched local-client state data
   */
  public data$: Subject<ConfigLogging> = new Subject();
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
    this.request$ = this.$component.$apollo.watchQuery(`
      query getConfigLogging($id: Int!) {
        getConfigLogging(id: $id) @client {
          logFolder
          logLevel
          cache
          isValid
        }
      }`,
      { id: 0 }
    );
    this.form = $fb.group({
      logFolder: [null, [
        Validators.required
      ]],
      logLevel: [null, [
        Validators.required
      ]],
      cache: [null, []]
    });
    this._subscribtions.push(
      this.request$.subscribe(result => {
        this.data$.next(result.data.getConfigLogging as ConfigLogging);
      })
    );
    this._subscribtions.push(
      this.data$.subscribe(result => {
        this.$component.$log.warn('LOG-CONFIG');
        console.log(result);
        this.form.patchValue(result);
      })
    );
  }
  /**
   * Set form-data from powerbot storage
   */
  public setFormData(): void {
    if ( this.$component.$data.app.config.logConfig ) {
      this.form.patchValue(
        this.$component.$data.app.config.logConfig
      );
    }
  }
  /**
   * Create logging-config from form-data
   */
  private getLoggingConfig(): ConfigLogging {
    let config: ConfigLogging = new ConfigLogging();
    config.logFolder = this.form.controls.logUrl.value;
    config.logLevel = this.form.controls.logLevel.value;
    config.cache = this.form.controls.cache.value;
    return config;
  }
  /**
   * Persist logging-config in browser
   */
  private storeLoggingConfig(): ConfigLogging {
    const config = this.getLoggingConfig();

    return config;
  }
  /**
   * If checkbox for store configuration is set to false, delete
   * configuration if available
   * @param $event
   */
  public clearStore( $event ) {
    if ( this.form.controls.store.value === false ) {

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
   * Configure log-service with remote logging-url and
   * store config when cacheForm is true
   */
  public action($event: any = false) {
    const config = this.getLoggingConfig();
    if ( !this.form.errors &&  this.form.controls.cache.value === true) {
      this.storeLoggingConfig();
    }
    // if ( !this.form.errors ){
    //   let currentConfig: LoggerConfig = this.$component.$log.getConfigSnapshot();
    //   currentConfig.serverLoggingUrl = config.log;
    //   currentConfig.serverLogLevel = this.logLevels[config.logLevel];
    //   // this.$component.$log.updateConfig( currentConfig );
    // }
  }

}
