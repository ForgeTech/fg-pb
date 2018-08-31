import { Component, Inject } from '@angular/core';
import { FgComponentBaseService } from '../fg-component-base/fg-component-base.service';
import { MatDialogRef } from '@angular/material';
import { MAT_DIALOG_DATA } from '@angular/material';
import { ModalComponent } from '../modal/modal.component';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PowerBotEntity } from '../../entity/entity.export';

@Component({
  selector: 'pb-modal-market',
  templateUrl: './modal-market.component.html',
  styleUrls: ['./modal-market.component.scss']
})
export class ModalMarketComponent extends ModalComponent {
  options: FormGroup;

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
    this.options = $fb.group({
      hideRequired: false,
      floatLabel: 'auto',
      market: [null, [Validators.required, Validators.minLength(5)]],
    });
  }

  createMarketConfig( $event: Event ): void {
    console.log('MARKET CONFIG');
  }

  cancelMarket( $event: Event ): void {
    console.log('CANCEL');
    console.log(this.entity);
  }
  saveMarket( $event: Event ): void {
    console.log('SAVE');
    console.log(this.entity);
  }

}
