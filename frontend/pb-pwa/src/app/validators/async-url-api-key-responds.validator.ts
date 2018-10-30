import { Injectable } from '@angular/core';
import { AsyncValidator, AbstractControl, ValidationErrors, FormGroup } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { map, catchError, debounceTime, distinctUntilChanged, switchMap, take } from 'rxjs/operators';
import { NGXLogger as FgLogService } from 'ngx-logger';
import {
  Configuration
} from '../module/pb-api';
import { PbDataService } from '../service/pb-data/pb-data.service';
/**
 * AsyncValidator checking if configured url responds to powerbot
 * market-config call
 */
@Injectable()
export class AsyncUrlApiKeyRespondsValidator implements AsyncValidator {
  /**
   * CONSTRUCTOR
   */
  constructor(
    protected $data: PbDataService,
    protected $log: FgLogService,
    ) { }
  /**
   * Configure data-service with url from crontrol and try to receive a request
   * from powerbot market-configuration methode
   * @param ctrl The form-control to validate
   */
  validate(
    ctrl: AbstractControl
  ): Observable<ValidationErrors | null> {
    const serverUrlCtrl: AbstractControl = ctrl.parent.get( 'serverUrl' );
    const backupUrlCtrl: AbstractControl = ctrl.parent.get( 'backupUrl' );
    const apiKeyCtrl: AbstractControl = ctrl.parent.get( 'apiKey' );
    // Only validate if there is a valid url avaiable and there are no
    // other errors on apiKeyCrtl
    if ( apiKeyCtrl.errors && serverUrlCtrl.valid && backupUrlCtrl.valid ) {
      return of (null);
    }
    return apiKeyCtrl.valueChanges.pipe(
      debounceTime(250),
      distinctUntilChanged(),
      switchMap(val => {
        let config: Configuration = new Configuration();
        // Set baseUrl to valid server-url, or valid backupUrl
        if ( serverUrlCtrl.valid ) {
          config.basePath = serverUrlCtrl.value;
        } else if ( backupUrlCtrl.valid ) {
          config.basePath = backupUrlCtrl.value;
        }
        // Set apiKey-value to ctrl.value
        config.apiKeys = { 'api_key': ctrl.value };
        // Set market config to validator-configuration
        this.$data.$market.configuration = config;
        console.log('CONFIG');
        console.log(config);
        return this.$data.$market.getStatus();
      }),
      map( value => {
        this.$log.warn('Response', value);
        return of( true );
      }),
      catchError(error => {
        this.$log.warn('Error');
        return of( false );
      }),
      map(valid => {
        this.$log.warn('Valid', valid);
        return valid ? null : { asyncUrlResponds: true };
      }),
      take(1)
    );
  }
}
