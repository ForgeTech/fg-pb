import { Component } from '@angular/core';
import { FgComponentBaseComponent } from '../../fg-component-base/fg-component-base.component';
import { FgComponentBaseService } from '../../fg-component-base/fg-component-base.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'pb-tab-api-key',
  templateUrl: './tab-api-key.component.html',
  styleUrls: ['./tab-api-key.component.scss']
})
export class TabApiKeyComponent extends FgComponentBaseComponent {
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
