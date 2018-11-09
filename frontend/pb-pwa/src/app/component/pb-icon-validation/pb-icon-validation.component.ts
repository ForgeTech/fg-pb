import { Component, ChangeDetectionStrategy } from '@angular/core';
import { FgComponentBaseComponent } from '../fg-component-base/fg-component-base.component';
import { FgComponentBaseService } from '../fg-component-base/fg-component-base.service';
import { AbstractControl } from '@angular/forms';
import { Observable, Subscription} from 'rxjs';
import { map, filter, switchMap, debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { FgEvent } from 'src/app/class/fg-event.class';
import { FgComponentBaseEvent } from 'src/app/event/fg-events.export';
import { FormValidationState } from './../../enum/enum.export';
/**
 * Pb-Icon-Validation
 */
@Component({
  selector: 'pb-icon-validation',
  templateUrl: './pb-icon-validation.component.html',
  styleUrls: ['./pb-icon-validation.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PbIconValidationComponent extends FgComponentBaseComponent {
  /**
   * Holds passed form-control status-string
   */
  entity: AbstractControl;
  /**
   * Observable to receive icon state
   */
  public icon$: Observable<string>;
  /**
   * Observable to receive icon color
   */
  public color$: Observable<string>;
  /**
   * CONSTRUCTOR
   */
  constructor(
    public $component: FgComponentBaseService
  ) {
    super(
      $component
    );
    const formControlAvailable$ = this.event$.pipe(
      filter( ( event: FgEvent ) => {
        return ( event.signature === FgComponentBaseEvent.AFTER_VIEW_INIT );
      }),
    );
    // Define Observable for Validation-State Icon
    this.icon$ = formControlAvailable$.pipe(
      switchMap( event => this.entity.statusChanges.pipe( distinctUntilChanged() ) ),
      map( val => {
        return this.getFormControlValidationIcon( val );
      })
    );
    // Define Observable for Validation-State Color
    this.color$ = formControlAvailable$.pipe(
      switchMap( event => this.entity.statusChanges.pipe( distinctUntilChanged() ) ),
      map( val => {
        return this.getFormControlValidationColor( val );
      })
    );
    this._subscribtions.push(
      formControlAvailable$.subscribe( result => {
        this.entity.updateValueAndValidity({
          onlySelf: false,
          emitEvent: false
        });
      })
    );
  }
  /**
   * Retun icon according to passed form-control validation
   * state
   * @param state
   */
  getFormControlValidationIcon( state: string ): string {
    let icon: string = 'error_outline';
    switch ( FormValidationState[state] ) {
      case FormValidationState.INVALID:
        icon = 'error_outline';
        break;
      case FormValidationState.PENDING:
        icon = 'cached';
        break;
      case FormValidationState.VALID:
        icon = 'check_circle_outline';
        break;
    }
    return icon;
  }
  /**
   * Retun color according to passed form-control validation state
   * @param state
   */
  getFormControlValidationColor( state: string ): string {
    let color: string = '';
    switch ( FormValidationState[state] ) {
      case FormValidationState.INVALID:
        color = 'warn';
        break;
      case FormValidationState.PENDING:
        color = 'accent';
        break;
      case FormValidationState.VALID:
        color = 'accent';
        break;
    }
    return color;
  }

}
