import { Component } from '@angular/core';
import { FgComponentBaseComponent } from '../fg-component-base/fg-component-base.component';
import { FgComponentBaseService } from '../fg-component-base/fg-component-base.service';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'pb-modal-login',
  templateUrl: './modal-login.component.html',
  styleUrls: ['./modal-login.component.scss']
})
export class ModalLoginComponent extends FgComponentBaseComponent {
  options: FormGroup;

  constructor(
    $component: FgComponentBaseService,
    $fb: FormBuilder
  ) {
    super(
      $component
    );
    this.options = $fb.group({
      hideRequired: false,
      floatLabel: 'auto',
    });
  }

}
