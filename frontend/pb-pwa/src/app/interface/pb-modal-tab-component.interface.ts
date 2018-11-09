import { FormGroup } from '@angular/forms';

export interface PbModalTabComponentInterface {
  form: FormGroup;
  actionLabel: string;
  action( $event?: any ): void;
}
