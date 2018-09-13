import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointState, BreakpointObserver } from '@angular/cdk/layout';
import { FgComponentBaseComponent } from '../fg-component-base/fg-component-base.component';
import { FgComponentBaseService } from '../fg-component-base/fg-component-base.service';
/**
 * DashboardComponent -
 * Render dashboard displaying collected set of powerbot api-data
 */
@Component({
  selector: 'pb-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent extends FgComponentBaseComponent {
  /**
   * CONSTRUCTOR
   */
  constructor(private breakpointObserver: BreakpointObserver, $component: FgComponentBaseService) {
    super(
      $component
    );
  }
  /** Based on the screen size, switch from standard to one column per row */
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          {
            title: 'Orders',
            template: 'orders',
            cols: 4, rows: 1 },
          {
            title: 'Orderbook',
            template: 'orderbook',
            cols: 4, rows: 2 },
          {
            title: 'Bids',
            template: 'bids',
            cols: 4, rows: 1 },
          {
            title: 'Trades',
            template: 'trades',
            cols: 4, rows: 1 },
          {
            title: 'Asks',
            template: 'asks',
            cols: 4, rows: 1 },
          {
            title: 'Portfolio',
            template: 'portfolio',
            cols: 4, rows: 1 },
          {
            title: 'Product History',
            template: 'productHistory',
            cols: 4, rows: 1 },
          {
            title: 'Signals',
            template: 'signals',
            cols: 4, rows: 1 },
        ];
      }

      return [
        {
          title: 'Orders',
          template: 'orders',
          cols: 1, rows: 1 },
        {
          title: 'Orderbook',
          template: 'orderbook',
          cols: 2, rows: 2 },
        {
          title: 'Bids',
          template: 'bids',
          cols: 1, rows: 1 },
        {
          title: 'Trades',
          template: 'trades',
          cols: 1, rows: 1 },
        {
          title: 'Asks',
          template: 'asks',
          cols: 1, rows: 1 },
        {
          title: 'Portfolio',
          template: 'portfolio',
          cols: 1, rows: 1 },
        {
          title: 'Product history',
          template: 'producthistory',
          cols: 2, rows: 1 },
        {
          title: 'Signals',
          template: 'signals',
          cols: 1, rows: 1 },
      ];
    })
  );
}
