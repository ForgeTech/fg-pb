import { Component, OnInit } from '@angular/core';
import { PowerBotEntity } from '../../entity/powerbot.entity';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import 'rxjs/add/operator/filter';
import {
  Observable, Subject, asapScheduler, pipe, of, from,
  interval, merge, fromEvent
} from 'rxjs';

@Component({
  selector: 'pb-view-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardViewComponent {
  powerbot: PowerBotEntity; // IFgProjectEntityInterface;
  protected $route: ActivatedRoute;
  protected $router: Router;

  constructor(
    $router: Router,
    $route: ActivatedRoute
  ) {
    this.$router = $router;
    this.$route = $route;
  }

}
