import { Component, Inject } from '@angular/core';
import { FgComponentBaseService } from '../fg-component-base/fg-component-base.service';
import { MatDialogRef } from '@angular/material';
import { MAT_DIALOG_DATA } from '@angular/material'
import { ModalComponent } from '../modal/modal.component';
import { PowerBotEntity } from '../../entity/powerbot.entity';
/**
 * ModalAddOrderComponent -
 * This modal dialog is used to create sets
 * of new orders within the powerbot application
 */
@Component({
  selector: 'pb-modal-add-order',
  templateUrl: './modal-add-order.component.html',
  styleUrls: ['./modal-add-order.component.scss']
})
export class ModalAddOrderComponent extends ModalComponent {
  /**
   * CONSTRUCTOR
   */
  constructor(
    public modalRef: MatDialogRef<any>,
    @Inject(MAT_DIALOG_DATA) public data: PowerBotEntity,
    $component: FgComponentBaseService
  ) {
    super(
      modalRef,
      data,
      $component
    );
  }
  /**
   * Methode to call when add-orders modal-dialog
   * should be canceled
   */
  cancelSettings($event: Event): void {
    console.log('CANCEL');
    this.closeModal();
  }
  /**
   * Methode to be called when created orders
   * should be stored to the server and the modal-dialog
   * should be closed
   */
  saveSettings($event: Event): void {
    console.log('Save');
  }

}
