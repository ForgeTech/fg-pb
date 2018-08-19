/**
* FgLayoutEvent -
* Provides a set of events available for fgLayout
*/
export class FgLayoutEvent {
    /**
    * Event to be thrown when a layouts direction-property is changed
    */
    public static readonly CHANGE_DIRECTION = 'Event_fgLayout_change_direction';
    /**
    * Event to be thrown when a layouts wrap-property is changed
    */
    public static readonly CHANGE_WRAP = 'Event_fgLayout_change_wrap';
    /**
    * Event to be thrown when a layouts align-property is changed
    */
    public static readonly CHANGE_ALIGN = 'Event_fgLayout_change_align';
    /**
    * Event to be thrown when a layouts justify-property is changed
    */
    public static readonly CHANGE_JUSTIFY = 'Event_fgLayout_change_justify';
}
