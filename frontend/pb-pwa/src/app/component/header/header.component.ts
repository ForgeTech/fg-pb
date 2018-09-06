import { Component } from '@angular/core';
import { FgComponentBaseComponent } from '../fg-component-base/fg-component-base.component';
import { FgComponentBaseService } from '../fg-component-base/fg-component-base.service';
import { ModalHelpComponent } from '../modal-help/modal-help.component';
import { FgEvent } from '../../class/fg-event.class';
import { PbAppEvent } from '../../event/pb-app.event';

@Component({
  selector: 'pb-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent extends FgComponentBaseComponent {

  constructor($component: FgComponentBaseService) {
    super(
      $component
    );
  }

  openHelpModal($event: Event): void {
    this.$component.$event.emit( new FgEvent( PbAppEvent.OPEN_HELP_MODAL ) );
  }

}
