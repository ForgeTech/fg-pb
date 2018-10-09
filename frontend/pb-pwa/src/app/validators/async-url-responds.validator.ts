import { Injectable } from '@angular/core';
import { AsyncValidator, AbstractControl, ValidationErrors } from '@angular/forms';
import { Observable, Subject } from 'rxjs';
import { PbAppEntityConst } from '../app.const';
import { NGXLogger as FgLogService } from 'ngx-logger';
import {
  Configuration
} from './../module/pb-api/';
import {  MarketService } from './../module/pb-api';
import { HttpErrorResponse } from '@angular/common/http';

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
    protected $market: MarketService,
    protected $log: FgLogService
    ) { }
  /**
   * Configure data-service with url from crontrol and try to receive a request
   * from powerbot market-configuration methode
   * @param ctrl The form-control to validate
   */
  validate(
    ctrl: AbstractControl
  ): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> {
    let config: Configuration = new Configuration();
    config.apiKeys = { 'api_key': PbAppEntityConst.NOT_SET };
    console.log('FARK');
    config.basePath = ctrl.value;
    this.$market.configuration = config;
    console.log(this.$market.configuration.basePath);
    let subject: Subject<null | ValidationErrors> = new Subject();
    this.$market.getStatus().toPromise().then(
      response => {
        this.$log.warn( `AsyncUrlRespondsValidator: This log shouldn\'t be written, as api-key isn't set for validation request!` );
        subject.next( null );
    }).catch(
      ( error: HttpErrorResponse ) => {
        console.log('HEREE!!!');
        console.log(error);
        if ( error.status === 403) {
          subject.next(null);
        } else {
          subject.next({ urlResponds: true } );
        }
    });
    return subject;
      // map( response => {
      //   return ( response ? { receivedResponse: true } : null );
      // }),
      // catchError( error => {
      //   this.$log.info( 'HTTPSTATUS', error );
      //   return (() => null);
      // })
    // );

    // return this.heroesService.isAlterEgoTaken(ctrl.value).pipe(
    //   map(isTaken => (isTaken ? { uniqueAlterEgo: true } : null)),
    //   catchError(() => null)
    // );
  }
}
