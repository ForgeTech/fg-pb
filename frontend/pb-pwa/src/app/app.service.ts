import { Injectable } from '@angular/core';
import { FgEventService } from './service/fg-event/fg-event.service';
import { FgEvent } from './class/fg-class.export';
// import { FgEventSubscriber } from './service/fg-event/fg-event-subscriber.abstract-class';
import {
  FgEntityEvent,
  FgComponentBaseEvent
} from './event/fg-events.export';
import { NGXLogger as FgLogService } from 'ngx-logger';
import { environment } from '../environments/environment';
import { PbDataService } from './service/pb-data/pb-data.service';
import { TranslateService } from '@ngx-translate/core';
import { _ } from './app.utils';
import { FgKeyboardService } from './service/fg-keyboard/fg-keyboard.service';
/**
* FgAppService -
* Service provides the functionality needed
* for forge-application to be initzialized
* and run successfully
*/
@Injectable()
export class FgAppService // extends FgEventSubscriber
{
  /**
  * CONSTRUCTOR
  */
  constructor(
    /**
    * Used to hold reference data-service
    */
    public $data: PbDataService,
    /**
    * Used to hold reference to forge event-service
    */
    public $event: FgEventService,
    /**
    * Used to hold reference to forge log-service
    */
    public $log: FgLogService,
    /**
    * Gives access to ngx-translate TranslateService Instance
    */
   public $translate: TranslateService,
   /**
    * Gives access to fg-keyboard-service
    */
   public $keyboard: FgKeyboardService
  ) {

    // In production - setup the graphql-client to connect to remote
    // graphql api
    if (environment.production) {
      $log.warn('POWERBOT-CLIENT IN PRODUCTION ENVIRONMENT');
      // $log.warn('CAUTION! REMOTE GRAPHQL-API FOR PRODUCTION IS NOT CONFIGRUED YET! ');
    } else {
      // Otherwise import project-configuration form local file, mock some
      // random development-data and configure the graphql-client to then only
      // run from local cache - reseting on restart
      $log.warn('POWERBOT-CLIENT IN DEVELOPMENT ENVIRONMENT');

    }
  }
}
