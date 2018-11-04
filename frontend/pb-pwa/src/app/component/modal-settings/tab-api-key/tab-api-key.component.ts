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
  public actionLabel = 'button_label_generate_api_key';
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
      epexPwd: [null, [Validators.required]],
      name: [null, [Validators.required]],
      canTrade: [null, []],
      canSignal: [null, []],
      envProd: [null, [Validators.required]],
      genApiKey: [null, []],
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
      name: this.form.controls.name.value,
      epex_password: this.form.controls.epexPwd.value,
      can_trade: this.form.controls.canTrade.value,
      can_signal: this.form.controls.canSignal.value,
    };
// {
//       'masterPwd': this.form.controls.masterPwd.value,
//       'epexPwd': this.form.controls.epexPwd.value,
//       'name': this.form.controls.name.value,
//       'canTrade': this.form.controls.canTrade.value,
//       'canSignal': this.form.controls.canSignal.value,
//       'envProd': this.form.controls.envProd.value,
    // };
    this.$component.$data.$auth.configuration.basePath = 'https://playground.powerbot-trading.com/api/v0';
    this.$component.$data.$auth.configuration.apiKeys = { api_key: '44fc8162-d2c6-432a-8279-d8d40e5c0e1b' };
    const subscription = this.$component.$data.$auth.addApiKey(params, 'body', true).subscribe( response => {
      console.log( 'API_KEY: ' + response );
      this.form.get('genApiKey').setValue('RECEIVED VALID');
    },
    error => {
      console.log( 'Api Key Error' );
      console.log( error );
      this.form.get('genApiKey').setValue(error.message);
    });
    this._subscribtions.push( subscription );
  }

}
