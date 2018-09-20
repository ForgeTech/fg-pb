import { Component, OnInit } from '@angular/core';
import { PowerBotEntity } from '../../entity/powerbot.entity';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import 'rxjs/add/operator/filter';
import {
  Observable, Subject, asapScheduler, pipe, of, from,
  interval, merge, fromEvent
} from 'rxjs';
import { FgComponentBaseComponent } from '../../component/fg-component-base/fg-component-base.component';
import { FgComponentBaseService } from '../../component/fg-component-base/fg-component-base.service';

@Component({
  selector: 'pb-view-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardViewComponent extends FgComponentBaseComponent {
  powerbot: PowerBotEntity; // IFgProjectEntityInterface;
  protected $route: ActivatedRoute;
  protected $router: Router;

  constructor(
    $component: FgComponentBaseService,
    $router: Router,
    $route: ActivatedRoute
  ) {
    super( $component );
    this.$router = $router;
    this.$route = $route;
  }

}
