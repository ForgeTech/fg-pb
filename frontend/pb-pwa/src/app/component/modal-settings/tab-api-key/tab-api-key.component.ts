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
    public $component: FgComponentBaseService,
  ) {
    super(
      $component
    );
    this.form = $fb.group({
      hideRequired: false,
      floatLabel: 'auto',
      masterPwd: [null, [Validators.required, Validators.minLength(5)]],
      epexPass: [null, [Validators.required]],
      name: [null, [Validators.required]],
      canTrade: [null, []],
      canSignal: [null, []],
      envProd: [null, [Validators.required]],
    });
  }
  // Implement to satisfy tab interface, but do not
  public setFormData(): void {
    if (this.$component.$data.app.config.authConfig) {
      this.form.patchValue(
        this.$component.$data.app.config.authConfig
      );
      // this.form.markAsDirty();
    }
  }
  /**
   * TODO: Generate and return api-key for user
   */
  action( $event: any = false ): void {
    console.log('API CONFIG');
    let params = {
      'name': this.form.controls.name.value,
      'epex_password': this.form.controls.masterPwd.value,
      'can_trade': this.form.controls.can_trade.value,
      'can_signal': this.form.controls.can_signal.value
    }
    const subscription = this.$component.$data.$auth.addApiKey(params, 'body', true).subscribe( response => {
      console.log( 'API_KEY: ' + response );
    },
    error => {
      console.log( 'Api Key Error' );
      console.log( error );
    });
    this._subscribtions.push( subscription );
  }

}
