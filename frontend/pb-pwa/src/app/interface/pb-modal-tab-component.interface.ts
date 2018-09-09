import { FormGroup } from '@angular/forms';

export interface PbModalTabComponentInterface {
  form: FormGroup;
  action( $event?: any ): void;
}
