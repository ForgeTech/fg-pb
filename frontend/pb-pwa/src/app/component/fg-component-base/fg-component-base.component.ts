import {
  HostListener,
  OnInit,
  OnChanges,
  AfterViewInit,
  OnDestroy,
  EventEmitter,
  Input,
  Output,
  SimpleChanges,
  ElementRef,
} from '@angular/core';
import { FgComponentBaseService } from './fg-component-base.service';
import {
  FgComponentBaseEvent,
  FgEntityEvent
} from './../../event/fg-events.export';
import { FgEventSubscriber } from './../../service/fg-event/fg-event-subscriber.abstract-class';
// import {
//   IFgComponentEntityInterface,
//   IFgActionProviderInterface,
//   IFgActionEntityInterface
// } from '../../../../../../fg-shared/interface/fg-interfaces.export';
import { FgEvent, FgAction } from '../../class/fg-class.export';
/**
 * CAUTION: This abstract class isn't a real angular-component,
 * as it doesn't use the @Component decorator and is meant to be
 * extended - to provide basic functionallity for forge-components
 */
export class FgComponentBaseComponent // extends FgEventSubscriber
implements /* IFgActionProviderInterface,*/ OnInit, OnChanges, AfterViewInit, OnDestroy {
  /**
   * INJECTED FgLogService provides logging functionallity for component
   */
  protected _$component: FgComponentBaseService;
  /**
   * GETTER for protected member _$component
   */
  get $component(): FgComponentBaseService {
    return this._$component;
  }
  /**
   * Contains the identifier of a components dp-entity
   */
  protected _id: number;
  /**
   * GETTER for protected member _id
   */
  get id(): number {
    return this._id;
  }
  /**
   * Contains the identifier of a components dp-entity
   */
  protected _persist: boolean;
  /**
   * GETTER for protected member _persist
   */
  get persist(): boolean {
    return this._persist || false;
  }
  /**
   * Contains key flagging the current state of a component
   */
  protected _state: string;
  /**
   * GETTER for protected member _state
   */
  get state(): string {
      return this._state;
  }
  /**
   * Contains a reference to a forge-components parent-component
   */
  @Input() parent: any; // IFgComponentEntityInterface;
  /**
   * Contains a EventEmitter instance and uses it to publish
   * a components events to their parent-component
   */
  @Output() event: EventEmitter<FgEvent>;
  /**
   * CAUTION! MAKE SURE THIS IS NOT INITIALIZED IN
   * COMPONENT-BASE-COMPONENT CONSTRUCTOR!
   * actions-property should only be initialized by components
   * which want to provide component-related actions
   */
  public actions: FgAction[]; // IFgActionEntityInterface[];
  /**
   * INPUT To receive a components configuration-object
   */
  @Input() entity: any; // IFgComponentEntityInterface;
  /**
   * Dispatch click event
   */
  @HostListener( 'click', [ '$event' ])
  protected onClick( $event ) {
    event.stopPropagation();
    this.emitEvent( FgComponentBaseEvent.CLICK, this, this.entity );
  }
  /**
   * Dispatch focus-in event
   */
  @HostListener( 'focusin', [ '$event' ])
  protected onFocusIn( $event ) {
    event.stopPropagation();
    /**
     * TODO: Implement selectable propertie to allow ignoring selection
     * on elements
     */
    // if ( this.entity && this.entity.selectable ) {
    //   this.emitEvent( FgComponentBaseEvent.SELECTED, this, this.entity );
    // }
    this.emitEvent( FgComponentBaseEvent.FOCUS_IN, this, this.entity );
  }
  /**
   * Dispatch focus-out event
   */
  @HostListener( 'focusout' , [ '$event' ] )
  protected onFocusout( $event ) {
    event.stopPropagation();
    this.emitEvent( FgComponentBaseEvent.FOCUS_OUT, this, this.entity );
  }
  /**
   * CONSTRUCTOR
   */
  constructor(
    // $el: ElementRef,
    $component: FgComponentBaseService
  ) {
    // super(
    //   $log,
    //   $component.$event
    // );
    this._$component = $component;
    this.event = new EventEmitter<FgEvent>();
    // Default set of component ui-actions
    this.actions = [
      new FgAction( new FgEvent( FgComponentBaseEvent.CREATE ), 'Add', 'add_box', 'Q', /* $component.disableCreateAction */),
      new FgAction( new FgEvent( FgComponentBaseEvent.EDIT ), 'Edit', 'edit', 'E', /* $component.disableEditableAction */),
      new FgAction( new FgEvent( FgComponentBaseEvent.LOCK ), 'Lock', 'lock', 'R', /* $component.disableLockAction */),
      new FgAction( new FgEvent( FgComponentBaseEvent.DELETE ), 'Delete', 'delete_forever', 'F', /* $component.disableDeleteAction */),
      new FgAction( new FgEvent( FgComponentBaseEvent.EXPORT ), 'Export', 'import_export', 'Y', /* $component.disableExportAction */),
      new FgAction( new FgEvent( FgComponentBaseEvent.PRINT ), 'Print', 'print', 'P', /* $component.disablePrintAction */),
    ];
  }
  /**
   * Dispatch an event via global event-service and component event-emitter
   */
  public emitEvent( signature: string , dispatcher: any, data: any = false, options: any = false, bubble = false ) {
    const eventToDispatch: FgEvent = new FgEvent( signature, dispatcher, data, options, bubble );
    // Emit component-event using angular event-emitter
    if ( eventToDispatch.bubble) {
      this.event.emit( eventToDispatch );
    }
    // Emit global-event via event-service
    this.$component.$event.emit( eventToDispatch );
  }
  /**
   * Implements methode for component life-cycle OnInit-Interface.
   */
  public ngOnInit() {
    this.$component.$log.log( 'ngOnInit ' );
    this.logComponentInfoToConsole();
    // this.emitEvent( FgComponentBaseEvent.ON_INIT, this, this.entity );
  }
  /**
   * Implements methode for component life-cycle AfterViewInit-Interface.
   */
  public ngAfterViewInit() {
    this.$component.$log.log( 'ngAfterViewInit' );
    if ( this.parent ) {
      this.entity.parent = this.parent;
    }
    this.logComponentInfoToConsole();
    // this.emitEvent( FgComponentBaseEvent.AFTER_VIEW, this, this.entity );
  }
  /**
   * Implements methode for component life-cycle OnChange-Interface.
   * @param changes
   */
  public ngOnChanges( changes: SimpleChanges ) {
    this.$component.$log.log( 'ngOnChanges' );
    this.logComponentInfoToConsole();
    // this.emitEvent( FgComponentBaseEvent.ON_CHANGES, this, changes );
    // this.emitEvent( FgEntityEvent.SYNC, this, this.entity );
  }
  /**
   * Implements methode for component life-cycle OnInit-Interface.
   */
  public ngOnDestroy() {
    this.$component.$log.log( 'ngOnDestroy' );
    this.logComponentInfoToConsole();
    // this.emitEvent( FgComponentBaseEvent.ON_DESTROY, this.entity );
  }
  /**
   * Methode to handle events emitted from component output event-emmitter
   * @param event Instance of FgEvent
   */
  public handleChildEvents( event: any /* FgEvent */ ): void {
    this.$component.$log.warn( 'handleChildEvents:' );
    this.$component.$log.warn( `
      CAUTION:
      Called from fgComponentBaseComponent -
      but should must likely being overwritten by extending fgComponent!
      Make sure this is not a error!
    ` );
  }
  /**
   * Methode prints value of a components common information to console.
   */
  private logComponentInfoToConsole() {
    // TODO reimplament in a way nglogger can parse this
    // with json.stringify()
    this.$component.$log.log( this.constructor.name );
  }
}
