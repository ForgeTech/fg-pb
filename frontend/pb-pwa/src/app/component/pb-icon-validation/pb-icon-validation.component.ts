import { Component, OnChanges, SimpleChanges, ChangeDetectionStrategy } from '@angular/core';
import { FgComponentBaseComponent } from '../fg-component-base/fg-component-base.component';
import { FgComponentBaseService } from '../fg-component-base/fg-component-base.service';
import { FormControl } from '@angular/forms';
import { Subject } from 'rxjs';
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
   * Holds passed form-control status string
   */
  entity: any;
  /**
   * Observable to receive icon state
   */
  public icon$: Subject<string | null> = new Subject();
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
    super.ngOnChanges( changes );
    this.$component.$log.warn('CHANNGGE');
    console.log(changes);
    // console.log(this.entity);
    this.icon$.next( this.getFormControlValidationIcon( changes.entity.currentValue ) );
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
        icon = 'done_outline';
        break;
    }
    return icon;
  }

}
