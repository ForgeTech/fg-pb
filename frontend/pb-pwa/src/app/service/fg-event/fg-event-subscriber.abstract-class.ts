import { FgEventService } from './fg-event.service';
import { FgEvent, FgAction } from '../../class/fg-class.export';
import { NGXLogger as FgLogService } from 'ngx-logger';
/**
* FgEventSubscriber -
* Abstract class to be extended by classes
*/
export abstract class FgEventSubscriber {
  /**
  * Instance of Forge Log-Service Logger
  */
  protected $log: FgLogService;
  /**
  * Instance of Forge Event-Service
  */
  protected $event: FgEventService;
  /**
  * Holding the tubles of event.signiture and callback to subscribe to global
  * event-service
  */
  private _eventsToSubscribe: [ string, ( event: FgEvent ) => void ][];
  /**
  * GETTER for protected member _eventsToSubscribe
  */
  get eventsToSubscribe(): [ string, ( event: FgEvent ) => void ][] {
      return this._eventsToSubscribe;
  }
  /**
  * SETTER for protected member _eventsToSubscribe
  */
  set eventsToSubscribe( eventsToSubscribe: [ string, ( event: FgEvent ) => void ][] ) {
      this.unsubscribeEvents( this.eventsToSubscribe );
      this._eventsToSubscribe = eventsToSubscribe;
      this.subscribeEvents( eventsToSubscribe );
  }
  /**
  * CONSTRUCTOR
  */
  constructor(
    $log: FgLogService,
    $event: FgEventService
  ) {
    this.$log = $log;
    this.$event = $event;
    this._eventsToSubscribe = [];
  }
  /**
  * Register events to global event-service
  */
  protected subscribeEvents( events: [ string, ( event: FgEvent ) => void ][] ): void {
    if ( events || events.length > 0 ) {
      events.forEach( event => {
        this.$event.subscribe( event[ 0 ], event[ 1 ] );
      });
    } else {
      this.$log.warn( 'EventSubscriber: ', this, 'had no eventes to subscribe!' );
    }
  }
  /**
  * Unregister events from global event-service
  */
  protected unsubscribeEvents( events: [ string, ( event: FgEvent ) => void ][] ): void {
    if ( events || events.length > 0 ) {
      events.forEach( event => {
        this.$event.unsubscribe( event[ 0 ], event[ 1 ] );
      });
    } else {
      this.$log.warn( 'EventSubscriber: ', this, 'had no eventes to unsubscribe!' );
    }
  }


}
