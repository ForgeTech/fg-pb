/**
* FgComponentBaseEvent -
* Provides basic functionality for, and is meant to be extended,
* by a component event-services.
*/
export class PbAppEvent {
    /**
    * Event to be thrown when application should connect to Powerbot Api
    */
    public static readonly CONNECT_API = 'Event_PbApp_connect_Api';
    /**
    * Event to be thrown when application should disconnect from Powerbot Api
    */
    public static readonly DISCONNECT_API = 'Event_PbApp_disconnect_Api';
    /**
    * Event to be thrown when application should connect to configured Market
    */
    public static readonly CONNECT_MARKET = 'Event_PbApp_connect_Market';
    /**
    * Event to be thrown when application should disconnect from configured Market
    */
    public static readonly DISCONNECT_MARKET = 'Event_PbApp_disconnect_Market';
}
