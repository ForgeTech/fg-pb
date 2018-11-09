import { Component, Inject } from '@angular/core';
import { FgComponentBaseService } from '../fg-component-base/fg-component-base.service';
import { MatDialogRef } from '@angular/material';
import { MAT_DIALOG_DATA } from '@angular/material';
import { ModalComponent } from '../modal/modal.component';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PowerBotEntity} from '../../entity/entity.export';

@Component({
  selector: 'pb-modal-api-key',
  templateUrl: './modal-api-key.component.html',
  styleUrls: ['./modal-api-key.component.scss']
})
export class ModalApiKeyComponent extends ModalComponent {
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
  }
  /**
   * TODO: Find out how to connect market
   * Configure powerbot to pass market-configuration with requests
   * to allow connecting to market, so orders can be placed
   */
  public action( $event: Event ) {
    // if (!this.form.errors && this.form.controls.store.value === true) {
    //   this.storeMarketConfig();
    // }
    // let config = this.getMarketConfig();
  }

}
