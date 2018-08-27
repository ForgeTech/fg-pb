import { Component } from '@angular/core';
import { FgComponentBaseComponent } from '../../fg-component-base/fg-component-base.component';
import { FgComponentBaseService } from '../../fg-component-base/fg-component-base.service';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'pb-tab-production',
  templateUrl: './tab-production.component.html',
  styleUrls: ['./tab-production.component.scss']
})
export class TabProductionComponent extends FgComponentBaseComponent {
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
