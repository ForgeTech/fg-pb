import { Component, Inject } from '@angular/core';
import { FgComponentBaseService } from '../fg-component-base/fg-component-base.service';
import { MatDialogRef } from '@angular/material';
import { MAT_DIALOG_DATA } from '@angular/material';
import { ModalComponent } from '../modal/modal.component';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PowerBotEntity, ConfigMarketConnection } from '../../entity/entity.export';
import { PbAppStorageConst } from '../../app.storage.const';

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
  marketForm: FormGroup;
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
    this.marketForm = $fb.group({
      hideRequired: false,
      floatLabel: 'auto',
      pwd_epex: [null, [Validators.required, Validators.minLength(5)]],
      cacheForm: [null, []]
    });
  }
  /**
  * Create market-config from form-data
  */
  private getMarketConfig(): ConfigMarketConnection {
    let config: ConfigMarketConnection = new ConfigMarketConnection();
    config.pwd_epex = this.marketForm.controls.pwd_epex.value;
    return config;
  }
  /**
   * Persist market-config in browser
   */
  private storeMarketConfig() {
    this.$component.$data.$storage.setItem(
      PbAppStorageConst.PB_SETTINGS_MARKET,
      this.getMarketConfig()
    );
  }
  /**
   * TODO: Find out how to connect market
   * Configure powerbot to pass market-configuration with requests
   * to allow connecting to market, so orders can be placed
   */
  public connectMarket() {
    if (!this.marketForm.errors && this.marketForm.controls.cacheForm.value === true) {
      this.storeMarketConfig();
    }
    let config = this.getMarketConfig();
  }

}
