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
  DoCheck,
  AfterContentInit,
  AfterViewChecked,
  AfterContentChecked,
} from '@angular/core';
import { FgComponentBaseService } from './fg-component-base.service';
import { FgComponentBaseEvent } from '../../event/fg-events.export';
import { FgEvent, FgAction } from '../../class/fg-class.export';
import { Subscription, BehaviorSubject, Subject } from 'rxjs';
import { Observable } from 'apollo-link';
/**
 * CAUTION: This abstract class isn't a real angular-component,
 * as it doesn't use the @Component decorator and is meant to be
 * extended - to provide basic functionallity for forge-components
 */
export class FgComponentBaseComponent // extends FgEventSubscriber
  implements  OnChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit,
  AfterViewChecked, OnDestroy /*, IFgActionProviderInterface*/ {
  /**
   * On creation push your subscribtions to this array,
   * onDestroy they will be automatically unsubscribed
   */
  protected _subscribtions: Subscription[] = [];
  /**
   * Observable streaming a components events
   */
  readonly event$: Subject<FgEvent> = new Subject();
  /**
   * Should be used to contain actions related to the component
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
   * Contains a EventEmitter instance and uses it to publish
   * a components events to their parent-component
   */
  @Output() event: EventEmitter<FgEvent> = new EventEmitter<FgEvent>();
  /**
   * Dispatch click event
   */
  @HostListener( 'click', [ '$event' ])
  protected onClick( $event ) {
    event.stopPropagation();
    this.emitEvent( new FgEvent( FgComponentBaseEvent.CLICK, this, this.entity ) );
  }
  /**
   * Dispatch focus-in event
   */
  @HostListener( 'focusin', [ '$event' ])
  protected onFocusIn( $event ) {
    event.stopPropagation();
    if ( this.config && this.config.selectable ) {
      this.emitEvent( new FgEvent( FgComponentBaseEvent.SELECTED, this, this.entity ) );
    }
    this.emitEvent( new FgEvent( FgComponentBaseEvent.FOCUS_IN, this, this.entity ) );
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
  protected emitEvent( eventToDispatch: FgEvent ) {
    // Emit component-event using angular event-emitter
    if ( eventToDispatch.bubble ) {
      this.event.emit( eventToDispatch );
    }
    // Emit event via component event-subject
    this.event$.next( eventToDispatch );
    // Emit global-event via event-service
    this.$component.$event.emit( eventToDispatch );
  }
  /**
   * Implements methode for component life-cycle OnChange-Interface.
   */
  public ngOnChanges( changes: SimpleChanges ) {
    this.$component.$log.log( 'ngOnChanges' );
    this.emitEvent( new FgEvent( FgComponentBaseEvent.ON_CHANGES, this, changes ) );
  }
  /**
   * Implements methode for component life-cycle OnInit-Interface.
   */
  public ngOnInit() {
    this.$component.$log.log( 'ngOnInit ' );
    this.emitEvent( new FgEvent( FgComponentBaseEvent.ON_INIT, this, this.entity ) );
  }
  /**
   * Implements methode for component life-cycle DoCheck-Interface.
   */
  public ngDoCheck() {
    this.$component.$log.log( 'ngDoCheckInit' );
    this.emitEvent( new FgEvent( FgComponentBaseEvent.DO_CHECK, this, this.entity ) );
  }
  /**
   * Implements methode for component life-cycle AfterConentInit-Interface.
   */
  public ngAfterContentInit() {
    this.$component.$log.log( 'ngAfterContentInit' );
    this.emitEvent( new FgEvent( FgComponentBaseEvent.AFTER_CONTENT_INIT, this, this.entity ) );
  }
  /**
   * Implements methode for component life-cycle AfterConentChecked-Interface.
   */
  public ngAfterContentChecked() {
    this.$component.$log.log( 'ngAfterContentChecked' );
    this.emitEvent( new FgEvent( FgComponentBaseEvent.AFTER_CONTENT_CHECKED, this, this.entity ) );
  }
  /**
   * Implements methode for component life-cycle AfterViewInit-Interface.
   */
  public ngAfterViewInit() {
    this.$component.$log.log( 'ngAfterViewInit' );
    this.emitEvent( new FgEvent( FgComponentBaseEvent.AFTER_VIEW_INIT, this, this.entity ) );
  }
  /**
   * Implements methode for component life-cycle AfterConentChecked-Interface.
   */
  public ngAfterViewChecked() {
    this.$component.$log.log( 'ngAfterViewChecked' );
    this.emitEvent( new FgEvent( FgComponentBaseEvent.AFTER_VIEW_CHECKED, this, this.entity ) );
  }
  /**
   * Implements methode for component life-cycle OnInit-Interface.
   */
  public ngOnDestroy() {
    this.$component.$log.log( 'ngOnDestroy' );
    this._subscribtions.forEach( subscribtion => {
      subscribtion.unsubscribe();
    });
    this.emitEvent( new FgEvent( FgComponentBaseEvent.ON_DESTROY, this, this.entity ) );
  }
}
