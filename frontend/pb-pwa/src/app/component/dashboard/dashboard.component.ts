import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointState, BreakpointObserver } from '@angular/cdk/layout';
import { FgComponentBaseComponent } from '../fg-component-base/fg-component-base.component';
import { FgComponentBaseService } from '../fg-component-base/fg-component-base.service';
import { _ } from './../../app.utils';
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
        title: _('component_label_orders'),
        template: 'orders',
        cols: 16, rows: 7
      },
      {
        title: _('component_label_trades'),
        template: 'trades',
        cols: 16, rows: 7
      },
      {
        title: _('component_label_orderbook'),
        template: 'orderbook',
        cols: 24, rows: 14
      },
      {
        title: _('component_label_bids'),
        template: 'bids',
        cols: 8, rows: 7
      },
      {
        title: _('component_label_asks'),
        template: 'asks',
        cols: 8, rows: 7
      },
      {
        title: _('component_label_portfolio'),
        template: 'portfolio',
        cols: 16, rows: 7
      },
      {
        title: _('component_label_contract_details'),
        template: 'contractdetails',
        cols: 16, rows: 7
      },
      {
        title: _('component_label_production_history'),
        template: 'producthistory',
        cols: 16, rows: 7
      },
      {
        title: _('component_label_signals'),
        template: 'signals',
        cols: 16, rows: 7
      },
      {
        title: _('component_label_logs'),
        template: 'logs',
        cols: 16, rows: 7
      },
      {
        title: _('component_label_signal_history'),
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
    ) {
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
