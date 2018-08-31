import { Component, Inject } from '@angular/core';
import { FgComponentBaseService } from '../fg-component-base/fg-component-base.service';
import { MatDialogRef } from '@angular/material';
import { MAT_DIALOG_DATA } from '@angular/material'
import { ModalComponent } from '../modal/modal.component';
import { PowerBotEntity } from '../../entity/powerbot.entity';

@Component({
  selector: 'app-modal-help',
  templateUrl: './modal-help.component.html',
  styleUrls: ['./modal-help.component.scss']
})
export class ModalHelpComponent extends ModalComponent {

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
  cancelSettings($event: Event): void {
    console.log('CANCEL');
    console.log(this.entity);
  }
  saveSettings($event: Event): void {
    console.log('Save');
    console.log(this.entity);
  }

}
