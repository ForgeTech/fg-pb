/**
* FgEvent -
* This class is used to represent forge internal
* inter-module/component/service messages
*/
export class FgEvent {
  /**
  * The unique string const signuature used to identify
  * the event
  */
  private _signature: string;
  /**
  * GETTER for private member _signature
  */
  get signature(): string {
    return this._signature;
  }
  /**
  * The flag signals if the event should be dispatched
  * via the component event-emitter binding
  */
  private _bubble: boolean;
  /**
  * GETTER for private member _bubble
  */
  get bubble(): boolean {
    return this._bubble;
  }
  /**
  * Meant to hold a reference to the class-instance dispatching
  * the event
  */
  private _dispatcher: any;
  /**
  * GETTER for private member _dispatcher
  */
  get dispatcher(): any {
    return this._dispatcher;
  }
  /**
  * Meant to hold the possible payload of an event
  */
  private _data: any;
  /**
  * GETTER for private member _data
  */
  get data(): any {
    return this._data;
  }
  /**
  * SETTER for private member _data
  */
  set data( data: any ) {
      this._data = data;
  }
  /**
  * Meant to hold the possible payload of an event
  */
  private _options: any;
  /**
  * GETTER for private member _options
  */
  get options(): any {
    return this._options;
  }
  /**
  * SETTER for private member _options
  */
  set options( options: any ) {
      this._options = options;
  }
  /**
  * CONSTRUCTOR
  */
  constructor(
    signatur: string,
    dispatcher: any = false,
    data: any = false,
    options: any = false,
    bubble: boolean = false
  ) {
    this._signature = signatur;
    this._dispatcher = dispatcher;
    this._data = data;
    this._options = options;
    this._bubble = bubble;
  }
}
