import { Component, Inject } from '@angular/core';
import { FgComponentBaseComponent } from '../fg-component-base/fg-component-base.component';
import { FgComponentBaseService } from '../fg-component-base/fg-component-base.service';
import { MatDialogRef } from '@angular/material';
import { MAT_DIALOG_DATA } from '@angular/material';
import { PowerBotEntity } from '../../entity/powerbot.entity';

/**
 * ModalComponent - Meant as base component to be extendet
 * by other Powerbot modal-dialogs
 */
@Component({
  selector: 'pb-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent extends FgComponentBaseComponent {
  /**
   * The color that should be used for input-labels -
   * it's set to accent color for dark-theme instead
   * of primary for default-theme
   */
  public inputThemeColor: string;
  /**
   * CONSTRUCTOR
   * @param modalRef Ref to the modal-dialog Component
   * @param data The optional data-object that can be passed via dialog-config
   */
  constructor(
    /**
     * Reference to this modal-dialog
     */
    public modalRef: MatDialogRef<any>,
    /**
     * Injects reference to modal data passed when opening modal-window
     */
    @Inject(MAT_DIALOG_DATA) public data: PowerBotEntity,
    /**
     * Reference to component base-service
     */
    public $component: FgComponentBaseService
  ) {
    super(
      $component
    );
    this.inputThemeColor = 'accent';
  }
  /**
   * Methode to be called when the user wants to close the
   * modal-dialog window
   */
  closeModal($event?: Event ): void {
    this.modalRef.close('CLOSE MODAL');
  }
}
