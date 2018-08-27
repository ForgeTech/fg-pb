import { Component, OnInit } from '@angular/core';
import { FgComponentBaseComponent } from '../../fg-component-base/fg-component-base.component';
import { FgComponentBaseService } from '../../fg-component-base/fg-component-base.service';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'pb-tab-test',
  templateUrl: './tab-test.component.html',
  styleUrls: ['./tab-test.component.scss']
})
export class TabTestComponent extends FgComponentBaseComponent {
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
