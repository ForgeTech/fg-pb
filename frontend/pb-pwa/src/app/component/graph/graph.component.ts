import { Component } from '@angular/core';
import { Chart } from 'angular-highcharts';

@Component({
  selector: 'pb-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.css']
})
export class GraphComponent {

  constructor() { }

  chart = new Chart({
    chart: {
      type: 'line'
    },
    title: {
      text: 'Linechart'
    },
    credits: {
      enabled: false
    },
    series: [
      {
        name: 'Line 1',
        data: [1, 2, 3]
      }
    ]});

    add() {
      this.chart.addPoint(Math.floor(Math.random() * 10));
    }
}
