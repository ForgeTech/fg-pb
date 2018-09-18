import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointState, BreakpointObserver } from '@angular/cdk/layout';
import { FgComponentBaseComponent } from '../fg-component-base/fg-component-base.component';
import { FgComponentBaseService } from '../fg-component-base/fg-component-base.service';
import { I18n } from '@ngx-translate/i18n-polyfill';
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
  config = {
    grid: {
      cols: 32,
      rowHeight: '25px',
      gutterSize: '10px'
    },
    cards: [
      {
        title: this.$I18n('Orders'),
        template: 'orders',
        cols: 16, rows: 7
      },
      {
        title: this.$I18n('Trades'),
        template: 'trades',
        cols: 16, rows: 7
      },
      {
        title: this.$I18n('Orderbook'),
        template: 'orderbook',
        cols: 24, rows: 14
      },
      {
        title: this.$I18n('Bids'),
        template: 'bids',
        cols: 8, rows: 7
      },
      {
        title: this.$I18n('Asks'),
        template: 'asks',
        cols: 8, rows: 7
      },
      {
        title: this.$I18n('Portfolio'),
        template: 'portfolio',
        cols: 16, rows: 7
      },
      {
        title: this.$I18n('Contract Details'),
        template: 'contractdetails',
        cols: 16, rows: 7
      },
      {
        title: this.$I18n('Product history'),
        template: 'producthistory',
        cols: 16, rows: 7
      },
      {
        title: this.$I18n('Signals'),
        template: 'signals',
        cols: 16, rows: 7
      },
      {
        title: this.$I18n('Logs'),
        template: 'logs',
        cols: 16, rows: 7
      },
      {
        title: this.$I18n('Signal History'),
        template: 'signalhistory',
        cols: 16, rows: 7
      },
    ]
  };
  configLarge = {
    grid: {
      cols: 32,
      rowHeight: '25px',
      gutterSize: '10px'
    },
    cards: [
      {
        title: 'Orders',
        template: 'orders',
        cols: 7, rows: 7
      },
      {
        title: 'Orderbook',
        template: 'orderbook',
        cols: 14, rows: 14
      },
      {
        title: 'Contract Details',
        template: 'contractdetails',
        cols: 7, rows: 7
      },
      {
        title: 'Bids',
        template: 'bids',
        cols: 4, rows: 7
      },
      {
        title: 'Trades',
        template: 'trades',
        cols: 7, rows: 7
      },
      {
        title: 'Signals',
        template: 'signals',
        cols: 7, rows: 7
      },
      {
        title: 'Asks',
        template: 'asks',
        cols: 4, rows: 7
      },
      {
        title: 'Portfolio',
        template: 'portfolio',
        cols: 7, rows: 7
      },
      {
        title: 'Product history',
        template: 'producthistory',
        cols: 14, rows: 14
      },
      {
        title: 'Signal History',
        template: 'signalhistory',
        cols: 11, rows: 14
      },
      {
        title: 'Logs',
        template: 'logs',
        cols: 7, rows: 7
      },
    ]
  };
  /**
   * CONSTRUCTOR
   */
  constructor(
    private breakpointObserver: BreakpointObserver,
    $component: FgComponentBaseService,
    protected $I18n: I18n) {
    super(
      $component
    );
  }
  /** Based on the screen size, switch from standard to one column per row */
  // cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
  //   map(({ matches }) => {
  //     if (matches) {
  //       return [
  //         {
  //           title: 'Orders',
  //           template: 'orders',
  //           cols: 32, rows: 7 },
  //         {
  //           title: 'Orderbook',
  //           template: 'orderbook',
  //           cols: 32, rows: 14 },
  //         {
  //           title: 'Bids',
  //           template: 'bids',
  //           cols: 32, rows: 7 },
  //         {
  //           title: 'Trades',
  //           template: 'trades',
  //           cols: 32, rows: 7 },
  //         {
  //           title: 'Asks',
  //           template: 'asks',
  //           cols: 32, rows: 7 },
  //         {
  //           title: 'Portfolio',
  //           template: 'portfolio',
  //           cols: 32, rows: 7 },
  //         {
  //           title: 'Product History',
  //           template: 'productHistory',
  //           cols: 32, rows: 7 },
  //         {
  //           title: 'Signals',
  //           template: 'signals',
  //           cols: 32, rows: 7 },
  //       ];
  //     }

  //     return [
  //       {
  //         title: 'Orders',
  //         template: 'orders',
  //         cols: 7, rows: 7 },
  //       {
  //         title: 'Orderbook',
  //         template: 'orderbook',
  //         cols: 14, rows: 14 },
  //       {
  //         title: 'Contract Details',
  //         template: 'contractdetails',
  //         cols: 7, rows: 7 },
  //       {
  //         title: 'Bids',
  //         template: 'bids',
  //         cols: 4, rows: 7 },
  //       {
  //         title: 'Trades',
  //         template: 'trades',
  //         cols: 7, rows: 7 },
  //       {
  //         title: 'Signals',
  //         template: 'Signals',
  //         cols: 7, rows: 7 },
  //       {
  //         title: 'Asks',
  //         template: 'asks',
  //         cols: 4, rows: 7 },
  //       {
  //         title: 'Portfolio',
  //         template: 'portfolio',
  //         cols: 7, rows: 7 },
  //         {
  //           title: 'Product history',
  //           template: 'producthistory',
  //           cols: 14, rows: 14 },
  //         {
  //           title: 'Signal History',
  //           template: 'signalhistory',
  //           cols: 11, rows: 14 },
  //         {
  //           title: 'Logs',
  //           template: 'logs',
  //           cols: 7, rows: 7 },
  //     ];
  //   })
  // );
}
