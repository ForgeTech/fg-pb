import { Component, Inject } from '@angular/core';
import { FgComponentBaseService } from '../fg-component-base/fg-component-base.service';
import { MatDialogRef } from '@angular/material';
import { MAT_DIALOG_DATA } from '@angular/material';
import { ModalComponent } from '../modal/modal.component';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PowerBotEntity, ConfigMarketConnection } from '../../entity/entity.export';
import { PbAppStorageConst } from '../../app.const';

@Component({
  selector: 'pb-modal-market',
  templateUrl: './modal-market.component.html',
  styleUrls: ['./modal-market.component.scss']
})
export class ModalMarketComponent extends ModalComponent {
  /**
   * The Form containing input-elements
   * for setting market configuration
   */
  form: FormGroup;
  /**
   * CONSTRUCTOR
   */
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: PowerBotEntity,
    public modalRef: MatDialogRef<any>,
    public $fb: FormBuilder,
    $component: FgComponentBaseService
  ) {
    super(
      modalRef,
      data,
      $component
    );
    this.form = $fb.group({
      hideRequired: false,
      floatLabel: 'auto',
      epexPass: [null, [Validators.required, Validators.minLength(5)]],
      store: [null, []]
    });
    this.setFormData();
  }
  /**
   * Set form-data from powerbot storage
   */
  private setFormData(): void {
    if ( this.$component.$data.app.config.marketConfig ) {
      this.form.patchValue(
        this.$component.$data.app.config.marketConfig
      );
    }
  }
  /**
  * Create market-config from form-data
  */
  private getMarketConfig(): ConfigMarketConnection {
    let config: ConfigMarketConnection = new ConfigMarketConnection();
    config.epexPass = this.form.controls.epexPass.value;
    return config;
  }
  /**
   * Persist market-config in browser
   */
  private storeMarketConfig() {
    this.$component.$data.$storage.setItem(
      PbAppStorageConst.CONFIG_MARKET,
      this.getMarketConfig()
    );
  }
  /**
   * TODO: Find out how to connect market
   * Configure powerbot to pass market-configuration with requests
   * to allow connecting to market, so orders can be placed
   */
  public action( $event: Event ) {
    if (!this.form.errors && this.form.controls.store.value === true) {
      this.storeMarketConfig();
    }
    let config = this.getMarketConfig();
  }

}
