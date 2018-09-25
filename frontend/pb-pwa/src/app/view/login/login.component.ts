import { Component, OnInit } from '@angular/core';
import { FgComponentBaseComponent } from '../../component/fg-component-base/fg-component-base.component';
import { FgComponentBaseService } from '../../component/fg-component-base/fg-component-base.service';

@Component({
  selector: 'pb-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginViewComponent extends FgComponentBaseComponent {

  constructor($component: FgComponentBaseService) {
    super($component);
  }

}
