import { Component, AfterViewInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort } from '@angular/material';
import { TableDataSource } from './table-datasource';
import { FgComponentBaseComponent } from '../fg-component-base/fg-component-base.component';
import { FgComponentBaseService } from '../fg-component-base/fg-component-base.service';

@Component({
  selector: 'pb-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent extends FgComponentBaseComponent implements AfterViewInit {
  constructor($component: FgComponentBaseService) {
    super(
      $component
    );
  }

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource: TableDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */

  ngAfterViewInit() {
    this.dataSource = new TableDataSource(this.entity, this.paginator, this.sort);
  }

}
