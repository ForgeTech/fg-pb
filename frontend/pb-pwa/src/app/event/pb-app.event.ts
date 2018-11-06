/**
* FgComponentBaseEvent -
* Provides basic functionality for, and is meant to be extended,
* by a component event-services.
*/
export class PbAppEvent {
    /**
    * Event to be thrown when application should connect to Powerbot Api
    */
    public static readonly CONNECT_API_PROD = 'Event_PbApp_Connect_Api_Production';
    /**
    * Event to be thrown when application should connect to Powerbot Api
    */
    public static readonly CONNECT_API_TEST = 'Event_PbApp_Connect_Api_Test';
    /**
    * Event to be thrown when application should disconnect from Powerbot Api
    */
    public static readonly DISCONNECT_API = 'Event_PbApp_Disconnect_Api';
    /**
    * Event to be thrown when application should connect to configured Market
    */
    public static readonly CONNECT_MARKET = 'Event_PbApp_Connect_Market';
    /**
    * Event to be thrown when application should disconnect from configured Market
    */
    public static readonly DISCONNECT_MARKET = 'Event_PbApp_Disconnect_Market';
    /**
    * Event to be thrown when application should open connection modal
    */
    public static readonly OPEN_CONNECTION_MODAL = 'Event_PbApp_Open_Connection_Modal';
    /**
     * Event to be thrown when application should open api key modal
     */
    public static readonly OPEN_API_KEY_MODAL = 'Event_PbApp_Open_Api_Key_Modal';
    /**
    * Event to be thrown when application should open add-order modal
    */
    public static readonly OPEN_ADD_ORDER_MODAL = 'Event_PbApp_Open_Add_Order_Modal';
    /**
    * Event to be thrown when application should open add-order modal
    */
    public static readonly OPEN_HELP_MODAL = 'Event_PbApp_Open_Help_Modal';
    /**
    * Event to be thrown when application should switch color-theme
    */
    public static readonly SWITCH_THEME = 'Event_PbApp_Switch_Theme';
}
