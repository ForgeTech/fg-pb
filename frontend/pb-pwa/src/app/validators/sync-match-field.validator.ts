import { Directive, Input, Injectable } from '@angular/core';
import { AbstractControl, ValidationErrors, Validator, NG_VALIDATORS, ValidatorFn } from '@angular/forms';
import { NGXLogger as FgLogService } from 'ngx-logger';

/**
 * Directive to validate if two formcontrols contain matching values -
 * If so - error is returned
 */
@Directive({
  selector: '[pbMatchField]',
  // We add our directive to the list of existing validators
  providers: [
    { provide: NG_VALIDATORS, useExisting: SyncMatchFieldlValidator, multi: true }
  ]
})
export class SyncMatchFieldlValidator implements Validator {
  /**
   * Input used to provide form-fields to validate when used
   * as directive
   */
  @Input('pbMatchField') fieldName: string;
  /**
  *  The validation-function to use for this validator
  */
  public static matchField(fieldName: string ): ValidatorFn {
    return ( ctrl: AbstractControl ) => {
      try {

        let matching = false;
        matching = ctrl.value === ctrl.parent.get( fieldName ).value ? true : false;
        console.log( matching );
        return matching ? { pbMatchField: true } : null;
      } catch ( error ) {
        // Return null if an error occures, which occures when ctrl.parent isn't
        // available or initialized
        return null;
      }
    };
  }
  /**
   * CONSTRUCTOR
   */
  constructor(
  ) {}
  /**
   * Validation-methode used for use with directive-validation
   * @param ctrl The form-control to validate
   */
  validate(
    ctrl: AbstractControl
    ): ValidationErrors | null {
      return SyncMatchFieldlValidator.matchField( this.fieldName )( ctrl );
    }


}
