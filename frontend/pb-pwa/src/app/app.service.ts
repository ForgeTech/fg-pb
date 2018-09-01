import { Injectable } from '@angular/core';
// import { FgProjectComponent } from './component/fg-project/fg-project.component';
import { FgEventService } from './service/fg-event/fg-event.service';
// import { FgImportService } from './service/fg-import/fg-import.service';
import { FgEvent } from './class/fg-class.export';
// import { FgEventSubscriber } from './service/fg-event/fg-event-subscriber.abstract-class';
import {
  FgEntityEvent,
  FgComponentBaseEvent
} from './event/fg-events.export';
// import { FgSassService } from './service/fg-sass/fg-sass.service';
import { NGXLogger as FgLogService } from 'ngx-logger';
import { environment } from '../environments/environment';
import { PbDataService } from './service/pb-data/pb-data.service';
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
  * Used to hold reference data-service
  */
  public $data: PbDataService;
  /**
  * Used to hold reference to forge event-service
  */
  public $event: FgEventService;
  /**
  * Used to hold reference to forge log-service
  */
  public $log: FgLogService;
  /**
  * Used to hold reference to forge import-service
  */
  // public $import: FgImportService;
  /**
  * Instance of ApolloGraphqlClient
  */
  // public $apollo_persist: any;
  // public $apollo_inmemmory: any;
  /**
  * Store reference to sass compiler-service
  */
  // protected $sass: FgSassService;
  /**
  * CONSTRUCTOR
  */
  constructor(
    $data: PbDataService,
    $event: FgEventService,
    $log: FgLogService,
    // $import: FgImportService,
    // $sass: FgSassService
  ) {
    // super(
    //   $log,
    //   $event
    // );
    this.$data = $data;
    // this.$event = $event;
    this.$event = $event;
    this.$log = $log;
    // this.$import = $import;
    // this.$sass = $sass;
    // this.$sass.toCss();

    // let options: any = {};
    // options = Object.assign(options, apollo_client_config.default);
    // const test = new FgGraphqlService();
    // this.$apollo_persist = test.getFgGraphqlClient(options, apollo_cache_persist_config.default);
    // // this.$apollo_inmemmory = test.getFgGraphqlClient(options);
    // test.query({}, this.$apollo_persist)
    //   .then(data => {
    //     console.log('DATA');
    //     console.log(data);
    //   })
    //   .catch(error => {
    //     console.error('ERROR');
    //     console.log(error);
    //   });

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

    // this.eventsToSubscribe = [
      // [ FgEntityEvent.ADD, this.addEntity() ],
      // [ FgEntityEvent.REMOVE, this.removeEntity() ],
      // [ FgEntityEvent.SYNC, this.syncEntity() ]
    // ];
  }
}
