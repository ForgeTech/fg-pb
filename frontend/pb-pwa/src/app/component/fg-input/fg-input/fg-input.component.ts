import { Component } from '@angular/core';
import { FgComponentBaseComponent } from '../../fg-component-base/fg-component-base.component';
import { FgComponentBaseService } from '../../fg-component-base/fg-component-base.service';

@Component({
  selector: 'fg-input',
  templateUrl: './fg-input.component.html',
  styleUrls: ['./fg-input.component.scss']
})
export class FgInputComponent extends FgComponentBaseComponent {

  constructor( $component: FgComponentBaseService ) {
    super( $component );
  }

}
