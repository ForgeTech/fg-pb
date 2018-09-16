import { Component, TemplateRef, ViewChild, AfterViewInit, OnChanges, SimpleChange, SimpleChanges } from '@angular/core';
import { MatPaginator, MatSort } from '@angular/material';
import { FgComponentBaseComponent } from '../fg-component-base/fg-component-base.component';
import { FgComponentBaseService } from '../fg-component-base/fg-component-base.service';

/**
 * FgTableComponent -
 * Component is used to render datatables within powerbot
 * application.
 */
@Component({
  selector: 'pb-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent extends FgComponentBaseComponent implements OnChanges {
  // @ViewChild('editTmpl') editTmpl: TemplateRef<any>;
  // @ViewChild('hdrTpl') hdrTpl: TemplateRef<any>;
  // template = {
  //   cellTemplate: this.editTmpl,
  //   headerTemplate: this.hdrTpl
  // };
  constructor($component: FgComponentBaseService) {
    super(
      $component
    );
  }
  joinRow( row ) {
    console.log( row );
    return row;
  }
  // joinColumn( column ) {
  //   column = Object.assign( column, this.template );
  //   console.log( column );
  //   return column;
  // }
  // getRowHeight( row ): number {
  //   if(this.config) {
  //     if (!row) { return this.config.rowHeight || 50; }
  //     if (row.height === undefined) { return this.config.rowHeight || 50; }
  //     return row.height;
  //   }
  // }

  // ngOnChanges($changes: SimpleChanges): void {
  //   console.log('CHANGES');
  //   console.log($changes);
  //   console.log($changes.entity.currentValue);
  //   if ($changes.entity) {
  //     this.rows = this.entity;
  //   }
  // }

  // @ViewChild(MatPaginator) paginator: MatPaginator;
  // @ViewChild(MatSort) sort: MatSort;
  // dataSource: TableDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */

  // ngAfterViewInit() {
  //   // this.dataSource = new TableDataSource(this.entity, this.paginator, this.sort);
  // }


}
