import { Component } from '@angular/core';
import { FgComponentBaseComponent } from '../../fg-component-base/fg-component-base.component';
import { FgComponentBaseService } from '../../fg-component-base/fg-component-base.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'pb-tab-logging',
  templateUrl: './tab-logging.component.html',
  styleUrls: ['./tab-logging.component.scss']
})
export class TabLoggingComponent extends FgComponentBaseComponent {
  options: FormGroup;

  constructor(
    $component: FgComponentBaseService,
    $fb: FormBuilder
  ) {
    super(
      $component
    );
    this.options = $fb.group({
      hideRequired: false,
      floatLabel: 'auto',
      logsUrl: [null, [Validators.required, Validators.minLength(5)]],
    });
  }

  createLoggingConfig( $event: Event ): void {

  }

}
