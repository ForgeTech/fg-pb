import { Component, ViewChild, TemplateRef } from '@angular/core';
import { LowerCasePipe, NgTemplateOutlet } from '@angular/common';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointState, BreakpointObserver } from '@angular/cdk/layout';
import { FgComponentBaseComponent } from '../fg-component-base/fg-component-base.component';
import { FgComponentBaseService } from '../fg-component-base/fg-component-base.service';
import { FgComponentBaseEvent } from '../../event/fg-events.export';
import { FgAction } from '../../class/fg-action.class';
import { FgEvent } from '../../class/fg-event.class';

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
  templates: any = {
    orders: this.orders,
    orderbook: this.orderbook,
    bids: this.bids,
    trades: this.trades,
    asks: this.asks,
    portfolio: this.portfolio,
    producthistory: this.productHistory,
    signals: this.signals,
  };

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
