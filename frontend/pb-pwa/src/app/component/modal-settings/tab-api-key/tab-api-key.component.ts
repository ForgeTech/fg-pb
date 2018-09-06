import { Component } from '@angular/core';
import { FgComponentBaseComponent } from '../../fg-component-base/fg-component-base.component';
import { FgComponentBaseService } from '../../fg-component-base/fg-component-base.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PbModalTabComponentInterface } from '../../../interface/pb-modal-tab-component.interface';

@Component({
  selector: 'pb-tab-api-key',
  templateUrl: './tab-api-key.component.html',
  styleUrls: ['./tab-api-key.component.scss']
})
export class TabApiKeyComponent extends FgComponentBaseComponent implements PbModalTabComponentInterface {
  /**
   * Form containing input-elements to allow
   * setting data for api-key generation
   */
  form: FormGroup;
  /**
   * CONSTRUCTOR
   */
  constructor(
    protected $fb: FormBuilder,
    protected $component: FgComponentBaseService,
  ) {
    super(
      $component
    );
    this.form = $fb.group({
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
  /**
   * TODO: Generate and return api-key for user
   */
  action(): void {
    console.log('API CONFIG');
  }

}
