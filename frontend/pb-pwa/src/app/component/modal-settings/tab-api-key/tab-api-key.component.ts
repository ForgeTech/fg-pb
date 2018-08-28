import { Component } from '@angular/core';
import { FgComponentBaseComponent } from '../../fg-component-base/fg-component-base.component';
import { FgComponentBaseService } from '../../fg-component-base/fg-component-base.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'pb-tab-api-key',
  templateUrl: './tab-api-key.component.html',
  styleUrls: ['./tab-api-key.component.scss']
})
export class TabApiKeyComponent extends FgComponentBaseComponent {
  options: FormGroup;
  generalPanel = true;

  constructor(
    protected $fb: FormBuilder,
    $component: FgComponentBaseService,
  ) {
    super(
      $component
    );
    this.options = $fb.group({
      hideRequired: false,
      floatLabel: 'auto',
      roboCompPass: [null, [Validators.required, Validators.minLength(5)]],
      epexPass: [null, [Validators.required]],
      apiKey: [null, [Validators.required]],
      canTrade: [null, []],
      canSignal: [null, []],
      envProd: [null, []],
      envTest: [null, []],
    });
  }

  createApiConfig( $event: Event ): void {
    console.log('API CONFIG');
  }

}
