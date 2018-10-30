import { Component, OnChanges, SimpleChanges, ChangeDetectionStrategy } from '@angular/core';
import { FgComponentBaseComponent } from '../fg-component-base/fg-component-base.component';
import { FgComponentBaseService } from '../fg-component-base/fg-component-base.service';
import { FormControl, AbstractControl } from '@angular/forms';
import { Subject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { PROVIDERS } from 'apollo-angular/ApolloModule';
export enum ValidationState {
  'INVALID',
  'PENDING',
  'VALID',
}
@Component({
  selector: 'pb-icon-validation',
  templateUrl: './pb-icon-validation.component.html',
  styleUrls: ['./pb-icon-validation.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PbIconValidationComponent extends FgComponentBaseComponent implements OnChanges {
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
  }
  /**
   * Implements methode for component life-cycle OnChange-Interface.
   * @param changes
   */
  public ngOnChanges(changes: SimpleChanges) {
    console.log( changes );
    if ( this.entity && !this.icon$) {
      this.icon$ = this.entity.statusChanges.pipe(
        map( val => {
           return this.getFormControlValidationIcon( val );
        })
      );
    }
    if ( this.entity && !this.color$) {
      this.color$ = this.entity.statusChanges.pipe(
        map( val => {
           return this.getFormControlValidationColor( val );
        })
      );
    }
    super.ngOnChanges( changes );
  }
  /**
   * Retun icon according to passed form-control validation
   * state
   * @param state
   */
  getFormControlValidationIcon( state: string ): string {
    let icon: string = 'error_outline';
    switch ( ValidationState[state] ) {
      case ValidationState.INVALID:
        icon = 'error_outline';
        break;
      case ValidationState.PENDING:
        icon = 'cached';
        break;
      case ValidationState.VALID:
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
    switch ( ValidationState[state] ) {
      case ValidationState.INVALID:
        color = 'warn';
        break;
      case ValidationState.PENDING:
        color = 'accent';
        break;
      case ValidationState.VALID:
        color = 'accent';
        break;
    }
    return color;
  }

}
