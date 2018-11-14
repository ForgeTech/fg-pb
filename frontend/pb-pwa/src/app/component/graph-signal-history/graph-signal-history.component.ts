import { Component, SimpleChanges } from '@angular/core';
import { formatDate } from '@angular/common';
import { FgComponentBaseComponent } from '../fg-component-base/fg-component-base.component';
import { FgComponentBaseService } from '../fg-component-base/fg-component-base.service';
import { GraphDataInterface, SignalEntityInterface } from '../../interface/interface.export';
import { sortArrayByTime } from '../../app.utils';

/**
 * PbGraphSignalHistoryComponent -
 * Render graph for powerbot signal-history api-data
 */
@Component({
  selector: 'pb-graph-signal-history',
  templateUrl: './graph-signal-history.component.html',
  styleUrls: ['./graph-signal-history.component.scss']
})
export class GraphSignalHistoryComponent extends FgComponentBaseComponent {
  // Override entity with signal-collection interface
  entity: { label: string, values: any[] }[];
  // Hold graph-data parsed from enity
  data: GraphDataInterface[] = [];

  view: any[] = undefined; // [600, 400];

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Received';
  showYAxisLabel = true;
  yAxisLabel = 'Euro';

  colorScheme = {
    domain: ['#26a69a', '#009688']
  };

  // line, area
  autoScale = true;


  // onSelect(event) {
  //   console.log(event);
  // }
  /**
   * CONSTRUCTOR
   */
  constructor($component: FgComponentBaseService) {
    super(
      $component
    );
  }
  /**
   * Prepare signals-data for being displayed in linear graph by ngx-graph-component
   * @param signals
   */
  prepareSignalHistoryGraphData( signals: { label: string, values: SignalEntityInterface[] }[] ): GraphDataInterface[] {
      let graphData: GraphDataInterface[] = [];
      let signalImbalance = {
        name: 'imbalance',
        series: []
      };
      let signalMarginalPrice = {
        name: 'marginal-price',
        series: []
      };
      // console.log( 'signals' )
      // console.log( signals )
      signals.forEach( signalGroup => {
        signalGroup.values.sort( ( signal1, signal2 ) => {
          return sortArrayByTime( signal1.received_at, signal2.received_at );
        }).forEach( signal => {
          // console.log(signal);
          if ( signal.value.imbalance && signal.received_at ) {
            signalImbalance.series.push({
              name: formatDate(signal.received_at, 'h:mm:ss', 'en'),
              value: signal.value.imbalance
            });
          }
          if ( signal.value.marginal_price && signal.received_at ) {
            signalMarginalPrice.series.push({
              name: formatDate(signal.received_at, 'h:mm:ss', 'en'),
              value: signal.value.marginal_price
            });
          }
        });
      });
      // if ( signalGroup.label === 'display' ) {
        graphData.push(signalImbalance);
        graphData.push(signalMarginalPrice);
      // }
      // console.log('graphData');
      // console.log(graphData);
      return graphData;
  }
  /**
   * React to component input-changes
   * @param changes
   */
  ngOnChanges(changes: SimpleChanges): void {
    super.ngOnChanges(changes);
    // console.log(changes);
    if (changes.entity) {
      this.data = this.prepareSignalHistoryGraphData( this.entity );
    }
  }

}
