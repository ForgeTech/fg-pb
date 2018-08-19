import { Component } from '@angular/core';
import { FgComponentBaseComponent } from '../fg-component-base/fg-component-base.component';
import { FgComponentBaseService } from './../fg-component-base/fg-component-base.service';

@Component({
  selector: 'pb-bar-status',
  templateUrl: './bar-status.component.html',
  styleUrls: ['./bar-status.component.scss']
})
export class BarStatusComponent  extends FgComponentBaseComponent {

  constructor( $component: FgComponentBaseService ) {
    super(
      $component
    );
  }

}
