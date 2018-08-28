import { Component, Inject } from '@angular/core';
import { FgComponentBaseService } from '../fg-component-base/fg-component-base.service';
import { MatDialogRef } from '@angular/material';
import { MAT_DIALOG_DATA } from '@angular/material'
import { ModalComponent } from '../modal/modal.component';
import { PowerBot } from '../../entity/powerbot';

@Component({
  selector: 'app-modal-settings',
  templateUrl: './modal-settings.component.html',
  styleUrls: ['./modal-settings.component.scss']
})
export class ModalSettingsComponent extends ModalComponent {

  constructor(
    public modalRef: MatDialogRef<any>,
    @Inject(MAT_DIALOG_DATA) public data: PowerBot,
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
