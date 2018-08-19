/**
* FgEntityEvent -
* Provides common events related to forge entities
*/
export class FgEntityEvent {
  /**
  * Event to be thrown when view-component entity should be added
  */
  public static readonly ADD = 'Event_Entity_add';
  /**
  * Event to be thrown when view-component entity should be removed
  */
  public static readonly REMOVE = 'Event_Entity_remove';
  /**
  * Event to be thrown when view-component entity should be updated
  */
  public static readonly SYNC = 'Event_Entity_sync';
}
