import { Component, AfterViewInit, OnChanges, SimpleChange, SimpleChanges } from '@angular/core';
import { MatPaginator, MatSort } from '@angular/material';
import { TableDataSource } from './table-datasource';
import { FgComponentBaseComponent } from '../fg-component-base/fg-component-base.component';
import { FgComponentBaseService } from '../fg-component-base/fg-component-base.service';

@Component({
  selector: 'pb-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent extends FgComponentBaseComponent implements OnChanges {

  rows: any[] = [{
    name: 'test',
    gender: 'mandi'
  },
  {
    name: 'test2',
    gender: 'weibi'
  }];

  constructor($component: FgComponentBaseService) {
    super(
      $component
    );
  }

  ngOnChanges($changes: SimpleChanges): void {
    console.log('CHANGES');
    console.log($changes);
    console.log($changes.entity.currentValue);
    // if ($changes.entity) {
    //   this.rows = this.entity;
    // }
  }

  // @ViewChild(MatPaginator) paginator: MatPaginator;
  // @ViewChild(MatSort) sort: MatSort;
  // dataSource: TableDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */

  // ngAfterViewInit() {
  //   // this.dataSource = new TableDataSource(this.entity, this.paginator, this.sort);
  // }

  getRowHeight(row) {
    return row.height;
  }

}
