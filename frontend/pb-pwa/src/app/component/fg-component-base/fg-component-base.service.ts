import { Injectable } from '@angular/core';
import { FgEventService } from '../../service/fg-event/fg-event.service';
import { NGXLogger as FgLogService } from 'ngx-logger';
import { PbDataService } from '../../service/pb-data/pb-data.service';
import { FgKeyboardService } from '../../service/fg-keyboard/fg-keyboard.service';
import { TranslateService } from '@ngx-translate/core';
import { FgGraphqlService } from 'src/app/module/fg-graphql/service/fg-graphql/fg-graphql.service';
import { FgBreakpointService } from 'src/app/module/fg-material/service/fg-breakpoint/fg-breakpoint.service';
/**
 * FgComponentBaseService -
 * Service provides forge-components with all commonly needed
 * functionality
 */
@Injectable()
export class FgComponentBaseService {
  /**
  * CONSTRUCTOR
  */
  constructor (
    /**
    * Gives access to FgLogService
    */
    public $log: FgLogService,
    /**
    * Gives access to FgEventService-methodes
    */
    public $event: FgEventService,
    /**
    * Gives access to PbDataService-methodes
    */
    public $data: PbDataService,
    /**
    * Gives access to ngx-translate TranslateService Instance
    */
    public $translate: TranslateService,
    /**
    * Gives access to FgKeyboardService-methodes
    */
    public $keyboard: FgKeyboardService,
    /**
    * Gives access to fg-graphql-service
    */
    public $apollo: FgGraphqlService,
    /**
    * Gives access to fg-breakpoint-service
    */
    public $breakpoint: FgBreakpointService
  ) {}
}
