import { Component, ViewChild, TemplateRef } from '@angular/core';
import { LowerCasePipe, NgTemplateOutlet } from '@angular/common';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointState, BreakpointObserver } from '@angular/cdk/layout';
import { FgComponentBaseComponent } from '../fg-component-base/fg-component-base.component';
import { FgComponentBaseService } from '../fg-component-base/fg-component-base.service';

@Component({
  selector: 'pb-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent extends FgComponentBaseComponent {

  constructor(private breakpointObserver: BreakpointObserver, $component: FgComponentBaseService) {
    super(
      $component
    );
  }

  @ViewChild('orders') orders: TemplateRef<any>;
  @ViewChild('orderbook') orderbook: TemplateRef<any>;
  @ViewChild('bids') bids: TemplateRef<any>;
  @ViewChild('trades') trades: TemplateRef<any>;
  @ViewChild('asks') asks: TemplateRef<any>;
  @ViewChild('portfolio') portfolio: TemplateRef<any>;
  @ViewChild('producthistory') productHistory: TemplateRef<any>;
  @ViewChild('signals') signals: TemplateRef<any>;

  /** Based on the screen size, switch from standard to one column per row */
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          { title: 'orders', cols: 4, rows: 1 },
          { title: 'orderbook', cols: 4, rows: 2 },
          { title: 'bids', cols: 4, rows: 1 },
          { title: 'trades', cols: 4, rows: 1 },
          { title: 'asks', cols: 4, rows: 1 },
          { title: 'portfolio', cols: 4, rows: 1 },
          { title: 'productHistory', cols: 4, rows: 1 },
          { title: 'signals', cols: 4, rows: 1 },
        ];
      }

      return [
        { title: 'orders', cols: 1, rows: 1 },
        { title: 'orderbook', cols: 2, rows: 2 },
        { title: 'bids', cols: 1, rows: 1 },
        { title: 'trades', cols: 1, rows: 1 },
        { title: 'asks', cols: 1, rows: 1 },
        { title: 'portfolio', cols: 1, rows: 1 },
        { title: 'producthistory', cols: 2, rows: 1 },
        { title: 'signals', cols: 1, rows: 1 },
      ];
    })
  );
}
