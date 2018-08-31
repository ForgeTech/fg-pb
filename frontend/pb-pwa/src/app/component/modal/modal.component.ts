import { Component, Inject } from '@angular/core';
import { FgComponentBaseComponent } from '../fg-component-base/fg-component-base.component';
import { FgComponentBaseService } from '../fg-component-base/fg-component-base.service';
import { MatDialogRef } from '@angular/material';
import { MAT_DIALOG_DATA } from '@angular/material'
import { PowerBotEntity } from '../../entity/powerbot.entity';


@Component({
  selector: 'pb-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent extends FgComponentBaseComponent {
  public color: string;
  public colorInvert: string;

  constructor(
    public modalRef: MatDialogRef<any>,
    @Inject(MAT_DIALOG_DATA) public data: PowerBotEntity,
    $component: FgComponentBaseService) {
    super(
      $component
    );
    this.color = this.data.darkTheme ? 'accent' : 'primary';
    // console.log('DATA MODAL');
    // console.log( this.data.darkTheme );
  }

  closeModal(): void {
    this.modalRef.close('CLOSE MODAL');
  }

}
