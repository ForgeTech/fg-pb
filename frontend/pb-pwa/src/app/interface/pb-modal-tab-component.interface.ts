import { FormGroup } from '@angular/forms';

export interface PbModalTabComponentInterface {
  form: FormGroup;
  setFormData(): void;
  action( $event?: any ): void;
}
