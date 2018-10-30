import { Injectable } from '@angular/core';
import { AsyncValidator, AbstractControl, ValidationErrors } from '@angular/forms';
import { Observable, Subject, of } from 'rxjs';
import { map, catchError, debounceTime, switchMap, take, distinctUntilChanged } from 'rxjs/operators';
import { PbAppEntityConst } from '../app.const';
import { NGXLogger as FgLogService } from 'ngx-logger';
import {
  Configuration
} from '../module/pb-api';
import { HttpErrorResponse } from '@angular/common/http';
import { PbDataService } from '../service/pb-data/pb-data.service';
import { FgKeyboardService } from '../service/fg-keyboard/fg-keyboard.service';
/**
 * AsyncValidator checking if configured url responds to powerbot
 * market-config call
 */
@Injectable()
export class AsyncUrlRespondsValidator implements AsyncValidator {
  /**
   * CONSTRUCTOR
   */
  constructor(
    protected $data: PbDataService,
    protected $log: FgLogService,
    protected $key: FgKeyboardService
    ) { }
  /**
   * Configure data-service with url from crontrol and try to receive a request
   * from powerbot market-configuration methode
   * @param ctrl The form-control to validate
   */
  validate(
    ctrl: AbstractControl
  ): Observable<ValidationErrors | null> {
    // If there are already other errors exit
    if ( ctrl.errors ) {
      return of (null);
    }
    // Set baseUrl to valid server-url, or valid backupUrl
    let config: Configuration = new Configuration();
    if ( !ctrl.errors ) {
      config.basePath = ctrl.value;
    }
    return ctrl.valueChanges.pipe(
      debounceTime(250),
      distinctUntilChanged(),
      switchMap( val =>  {
        let config: Configuration = new Configuration();
        // Set baseUrl to valid server-url, or valid backupUrl
        config.basePath = ctrl.value;
        // Set connection configuration
        config.apiKeys = { 'api_key': PbAppEntityConst.NOT_SET };
        this.$data.$market.configuration = config;
        return this.$data.$market.getStatus();
      }),
      catchError(error => {
        // this.$log.warn( 'ERROR' );
        // console.log( error );
        let valid: boolean = false;
        const httpError: HttpErrorResponse = error as HttpErrorResponse;
        if (httpError.status === 403) {
          valid = true;
        }
        // this.$log.warn( 'Valid', valid );
        return of(valid);
      }),
      map( valid => {
        this.$log.warn( 'Valid?', valid );
        return valid ? null : { asyncUrlResponds: true };
      }),
      take(1)
    );
  }
}
