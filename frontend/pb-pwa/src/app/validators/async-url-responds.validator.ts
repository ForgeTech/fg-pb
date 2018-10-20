import { Injectable } from '@angular/core';
import { AsyncValidator, AbstractControl, ValidationErrors } from '@angular/forms';
import { Observable, Subject, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { PbAppEntityConst } from '../app.const';
import { NGXLogger as FgLogService } from 'ngx-logger';
import {
  Configuration
} from './../module/pb-api/';
import { HttpErrorResponse } from '@angular/common/http';
import { PbDataService } from '../service/pb-data/pb-data.service';

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
    protected $log: FgLogService
    ) { }
  /**
   * Configure data-service with url from crontrol and try to receive a request
   * from powerbot market-configuration methode
   * @param ctrl The form-control to validate
   */
  validate(
    ctrl: AbstractControl
  ): Observable<ValidationErrors | null> {
    let config: Configuration = new Configuration();
    config.apiKeys = { 'api_key': PbAppEntityConst.NOT_SET };
    config.basePath = ctrl.value;
    this.$data.configuration = config;
    // If there are already other errors exit
    if ( ctrl.errors ) {
      return of (null);
    }
    return this.$data.$market.getStatus().pipe( catchError( error => {
        // this.$log.warn( 'ERROR' );
        // console.log( error );
        let valid: boolean = false;
        const httpError: HttpErrorResponse = error as HttpErrorResponse;
        if ( httpError.status === 403 ) {
          valid = true;
        }
      // this.$log.warn( 'Valid', valid );
      return of (valid);
      })
    ).pipe( map( valid => {
      // this.$log.warn( 'MAP', valid );
      return valid ? null : { asyncUrlResponds: true };
    }));
  }
}
