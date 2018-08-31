import { Component, OnInit } from '@angular/core';
import { FgComponentBaseComponent } from '../fg-component-base/fg-component-base.component';
import { FgComponentBaseService } from '../fg-component-base/fg-component-base.service';
import { PowerBotEntity } from '../../entity/powerbot.entity';

@Component({
  selector: 'pb-switch-day-night',
  templateUrl: './switch-day-night.component.html',
  styleUrls: ['./switch-day-night.component.scss']
})
export class SwitchDayNightComponent extends FgComponentBaseComponent {
  entity: PowerBotEntity;
  constructor($component: FgComponentBaseService) {
    super(
      $component
    );
  }
  toggleTheme($event: Event): void {
    this.entity.darkTheme = !this.entity.darkTheme;
  }

}
