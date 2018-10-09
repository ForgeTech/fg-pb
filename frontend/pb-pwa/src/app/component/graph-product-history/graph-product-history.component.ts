import { Component, SimpleChanges } from '@angular/core';
import { FgComponentBaseComponent } from '../fg-component-base/fg-component-base.component';
import { FgComponentBaseService } from '../fg-component-base/fg-component-base.service';
import { GraphDataInterface } from '../../interface/interface.export';
import { ContractInterface } from '../../module/pb-api/model/interfaces.export';

/**
 * PbGraphProductHistoryComponent -
 * Render graph for powerbot product-history api-data
 */
@Component({
  selector: 'pb-graph-product-history',
  templateUrl: './graph-product-history.component.html',
  styleUrls: ['./graph-product-history.component.scss']
})
export class GraphProductHistoryComponent extends FgComponentBaseComponent {
  /**
   * CONSTRUCTOR
   */
  constructor($component: FgComponentBaseService) {
    super(
      $component
    );
  }
  // Override entity with signal-collection interface
  entity: ContractInterface[];
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
  autoScale = true;

  colorScheme = {
    domain: ['#26a69a', '#009688']
  };

  // line, area


  // onSelect(event) {
  //   console.log(event);
  // }

  /**
   * Prepare contracts-data for being displayed in linear graph by ngx-graph-component
   * @param signals
   */
  prepareProductHistoryGraphData(contracts: ContractInterface[]): any[] {
    let graphData: any[] = [];
    let volumeGraph = {
      name: 'volumne',
      series: []
    };
    let lastTrade = {
      name: 'last_price',
      series: []
    };
    let ownTrade = {
      name: 'own_trade',
      series: []
    };
    let bestBid = {
      name: 'best_bid',
      series: []
    };
    contracts.forEach( contract => {
      // console.log( 'contract' );
      // console.log( contract );
        // if (contract.volumne) {
        //   volumeGraph.series.push({
        //     name: contract.as_of ,
        //     value: contract.volumne
        //   });
        // }
        // if (contract.last_price) {
        //   lastTrade.series.push({
        //     name: contract.as_of,
        //     value: contract.last_price
        //   });
        // }
        // if (contract.own_trade) {
        //   ownTrade.series.push({
        //     name: contract.as_of,
        //     value: contract.own_trade
        //   });
        // }
        // if (contract.vwap) {
        //   bestBid.series.push({
        //     name: contract.as_of,
        //     value: contract.vwap
        //   });
        // }
      });
    // if ( signalGroup.label === 'display' ) {
    graphData.push(volumeGraph);
    graphData.push(lastTrade);
    graphData.push(ownTrade);
    graphData.push(bestBid);
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
    if (changes.entity) {
      // console.log('changes.entity')
      // console.log(changes.entity)
      this.data = this.prepareProductHistoryGraphData(this.entity);
    }
  }

}
