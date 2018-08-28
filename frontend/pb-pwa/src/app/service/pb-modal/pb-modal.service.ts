import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ModalMarketComponent } from '../../component/modal-market/modal-market.component';
import { ModalSettingsComponent } from '../../component/modal-settings/modal-settings.component';
import { PbDataService } from '../pb-data/pb-data.service';
// import { PbDataService } from '../pb-data/pb-data.service';

@Injectable()
export class PbModalService {
  /**
   * CONSTRUCTOR
   */
  constructor(
    /**
     * Reference to MatDialog-service
     */
    public $dialog: MatDialog,
    /**
     * Reference to Powerbot data-service
     */
    public $data: PbDataService
  ) { }
  /**
   * Open Market-Modal
   */
  openMarketModal($event: Event): void {
    this.$dialog.open(ModalMarketComponent, {
      panelClass: 'pb-panel',
      height: '90vh',
      width: '90vw',
      data: this.$data.$powerbot
    });
  }
  /**
   * Open Settings-Modal
   */
  openSettingsModal($event: Event): void {
    this.$dialog.open(ModalSettingsComponent, {
      panelClass: 'pb-panel',
      height: '90vh',
      width: '90vw',
      data: this.$data.$powerbot
    });
  }
    /**
   * Open Help-Modal
   */
  openHelpModal($event: Event): void {
    // this.$dialog.open(ModalHelpComponent, {
    //   panelClass: 'pb-panel',
    //   height: '90vh',
    //   width: '90vw',
    //   // data: this.$data.$powerbot
    // });
  }
  /**
   * Open Order-Modal
   */
  openAddOrderModal($event: Event): void {
    // this.$dialog.open(ModalAddOrderComponent, {
    //   panelClass: 'pb-panel',
    //   height: '90vh',
    //   width: '90vw',
    //   // data: this.$data.$powerbot
    // });
  }
}
