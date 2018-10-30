import { Injectable } from '@angular/core';
import { AbstractControl, ValidationErrors, Validator, FormGroup } from '@angular/forms';
/**
 * SyncValidator checking that serverUrl and backupUrl are not the same end-point
 */
@Injectable()
export class SyncUrlsEqualValidator implements Validator {
  /**
   * CONSTRUCTOR
   */
  constructor() { }
  /**
   * If serverUrl is available and valid, check that backupUrl
   * differs from serverUrl
   * @param ctrl The form-control to validate
   */
  validate(
    ctrl: AbstractControl
  ): ValidationErrors | null {
    let valid = false;

    const serverUrlCtrl = ctrl.parent.get('serverUrl');
    console.log('Validate Equal');
    console.log(ctrl);
    console.log(serverUrlCtrl);
    // Only compare serverUrl available and valid and validated
    // control doesn't have other errors
    if ( serverUrlCtrl.valid && !ctrl.errors ) {
      return null;
    }
    // console.log(ctrl.value);
    // console.log(serverUrlCtrl.value );
    if ( ctrl.value !== serverUrlCtrl.value ) {
      valid = true;
    }
    return valid ? null : { indifferentUrls: true };
  }
}
