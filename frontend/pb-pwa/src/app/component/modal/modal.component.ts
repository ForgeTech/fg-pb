import { Component, OnInit } from '@angular/core';
import { FgComponentBaseComponent } from '../fg-component-base/fg-component-base.component';
import { FgComponentBaseService } from '../fg-component-base/fg-component-base.service';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'pb-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent extends FgComponentBaseComponent {

  constructor(
    public modalRef: MatDialogRef<any>,
    $component: FgComponentBaseService) {
    super(
      $component
    );
  }

  closeModal(): void {
    this.modalRef.close('PIZZA!');
  }

}
