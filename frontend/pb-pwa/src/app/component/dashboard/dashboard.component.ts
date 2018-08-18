import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointState, BreakpointObserver } from '@angular/cdk/layout';

@Component({
  selector: 'pb-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  /** Based on the screen size, switch from standard to one column per row */
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          { title: 'Orders', cols: 1, rows: 1 },
          { title: 'Orderbook', cols: 2, rows: 2 },
          { title: 'Bids', cols: 1, rows: 1 },
          { title: 'Trades', cols: 1, rows: 1 },
          { title: 'Asks', cols: 1, rows: 1 },
          { title: 'Portfolio', cols: 1, rows: 1 },
          { title: 'Product History', cols: 2, rows: 1 },
          { title: 'Signals', cols: 1, rows: 1 },
        ];
      }

      return [
        { title: 'Orders', cols: 1, rows: 1 },
        { title: 'Orderbook', cols: 2, rows: 2 },
        { title: 'Bids', cols: 1, rows: 1 },
        { title: 'Trades', cols: 1, rows: 1 },
        { title: 'Asks', cols: 1, rows: 1 },
        { title: 'Portfolio', cols: 1, rows: 1 },
        { title: 'Product History', cols: 2, rows: 1 },
        { title: 'Signals', cols: 1, rows: 1 },
      ];
    })
  );

  constructor(private breakpointObserver: BreakpointObserver) {}
}
