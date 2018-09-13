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
} from '@angular/core';
import { FgComponentBaseService } from './fg-component-base.service';
import {
  FgComponentBaseEvent,
  FgEntityEvent
} from '../../event/fg-events.export';
// import { GlobalRef } from './../../module/fg-global-scope/fg-global-refs.class';
import { FgEvent, FgAction } from '../../class/fg-class.export';
/**
 * CAUTION: This abstract class isn't a real angular-component,
 * as it doesn't use the @Component decorator and is meant to be
 * extended - to provide basic functionallity for forge-components
 */
export class FgComponentBaseComponent // extends FgEventSubscriber
implements /* IFgActionProviderInterface,*/ OnInit, OnChanges, AfterViewInit, OnDestroy {
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
  @Output() event: EventEmitter<FgEvent> = new EventEmitter<FgEvent>();
  /**
   * CAUTION! MAKE SURE THIS IS NOT INITIALIZED IN
   * COMPONENT-BASE-COMPONENT CONSTRUCTOR!
   * actions-property should only be initialized by components
   * which want to provide component-related actions
   */
  public actions: FgAction[]; // IFgActionEntityInterface[];
  /**
   * INPUT To receive a components entity-object
   */
  @Input() entity: any; // IFgComponentEntityInterface;
  /**
   * INPUT To receive a components configuration-object
   */
  @Input() config: any;
  /**
   * Dispatch click event
   */
  @HostListener( 'click', [ '$event' ])
  protected onClick( $event ) {
    event.stopPropagation();
    this.emitEvent( new FgEvent( FgComponentBaseEvent.CLICK, this, this.entity ) );
    this.emitEvent( new FgEvent( FgComponentBaseEvent.SELECTED, this, this.entity ) );
  }
  /**
   * Dispatch focus-in event
   */
  @HostListener( 'focusin', [ '$event' ])
  protected onFocusIn( $event ) {
    event.stopPropagation();
    this.emitEvent( new FgEvent( FgComponentBaseEvent.FOCUS_IN, this, this.entity ) );
    /**
     * TODO: Implement selectable propertie to allow ignoring selection
     * on elements
     */
    // if ( this.entity && this.entity.selectable ) {
      this.emitEvent( new FgEvent( FgComponentBaseEvent.SELECTED, this, this.entity ) );
    // }
  }
  /**
   * Dispatch focus-out event
   */
  @HostListener( 'focusout' , [ '$event' ] )
  protected onFocusout( $event ) {
    event.stopPropagation();
    this.emitEvent( new FgEvent( FgComponentBaseEvent.FOCUS_OUT, this, this.entity ) );
  }
  /**
   * CONSTRUCTOR
   */
  constructor(
    public $component: FgComponentBaseService,
  ) {}
  /**
   * Dispatch an event via global event-service and component event-emitter
   */
  public emitEvent( eventToDispatch: FgEvent ) {
    // Emit component-event using angular event-emitter
    if ( eventToDispatch.bubble ) {
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
    this.emitEvent( new FgEvent( FgComponentBaseEvent.ON_INIT, this, this.entity ) );
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
    this.emitEvent( new FgEvent( FgComponentBaseEvent.AFTER_VIEW, this, this.entity ) );
  }
  /**
   * Implements methode for component life-cycle OnChange-Interface.
   * @param changes
   */
  public ngOnChanges( changes: SimpleChanges ) {
    this.$component.$log.log( 'ngOnChanges' );
    this.logComponentInfoToConsole();
    this.emitEvent( new FgEvent( FgComponentBaseEvent.ON_CHANGES, this, changes ) );
    this.emitEvent( new FgEvent( FgEntityEvent.SYNC, this, this.entity ) );
  }
  /**
   * Implements methode for component life-cycle OnInit-Interface.
   */
  public ngOnDestroy() {
    this.$component.$log.log( 'ngOnDestroy' );
    this.logComponentInfoToConsole();
    this.emitEvent( new FgEvent( FgComponentBaseEvent.ON_DESTROY, this.entity ) );
  }
  /**
   * Methode prints value of a components common information to console.
   */
  private logComponentInfoToConsole() {
    // TODO reimplament in a way nglogger can parse this
    // with json.stringify()
    this.$component.$log.info( this.constructor.name );
  }
}
