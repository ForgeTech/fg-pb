import { FormGroup } from '@angular/forms';

export interface PbModalTabComponentInterface {
  form: FormGroup;
  actionLabel: string;
  setFormData(): void;
  action( $event?: any ): void;
}
