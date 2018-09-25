import { Component, TemplateRef, ViewChild, AfterViewInit, OnChanges, SimpleChange, SimpleChanges } from '@angular/core';
import { MatPaginator, MatSort } from '@angular/material';
import { FgComponentBaseComponent } from '../fg-component-base/fg-component-base.component';
import { FgComponentBaseService } from '../fg-component-base/fg-component-base.service';
import { FgEvent } from '../../class/fg-event.class';
import { ConfigTableColumnInterface, ConfigTableInterface } from '../../interface/interface.export';

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
  /**
   * The default column-template to use
   */
  @ViewChild('cellTmpl') cellTmpl: TemplateRef<any>;
  /**
   * The default column-header-template to use
   */
  @ViewChild('headerTmpl') headerTmpl: TemplateRef<any>;
  /**
   * Hold selected table items
   */
  public selected = [];
  /**
   * Holds default table-configuration
   */
  protected default_config_table: ConfigTableInterface = {
    columnMode: 'force',
    headerHeight: 25,
    rowHeight: 25,
    footerHeight: 0,
    scrollbarV: true,
    scrollbarH: true,
    selectionType: 'single'
  };
  /**
   * Holds default column-configuration
   */
  protected default_config_column: ConfigTableColumnInterface = {
    display: true,
    width: 50,
  };
  /**
   * Override default config-object from FgComponentBaseComponent
   */
  config: ConfigTableInterface;
  /**
   * CONSTRUCTOR
   */
  constructor($component: FgComponentBaseService) {
    super(
      $component
    );
  }
  /** Override FgComponentBaseComponent ngOnChanges*/
  ngOnChanges(changes: SimpleChanges): void {
    super.ngOnChanges(changes);
    if ( changes.entity ) {
      // Prepare column-configuration
      // if ( this.selected.length === 0 ) {
      //   this.selected = this.getInitSelected();
      // }
    }
    if ( changes.config ) {
      // Prepare column-configuration
      this.config.columns = this.prepareColumns( this.config.columns );
    }
  }
  /** Override FgComponentBaseComponent ngAfterViewInit*/
  ngOnInit(): void {
    console.log('CHANGES');
    this.config = Object.assign( this.default_config_table, this.config );
    this.default_config_column.headerTemplate = this.headerTmpl;
    this.default_config_column.cellTemplate = this.cellTmpl;
    this.config.columns = this.prepareColumns( this.config.columns );
    console.log(this.default_config_column);
  }
  /**
   * Iterate over passed column-config and update default-values
   * if they aren't set
   * @param columns
   */
  prepareColumns(columns: ConfigTableColumnInterface[]): ConfigTableColumnInterface[] {
    let updateColumns: ConfigTableColumnInterface[] = [];
    // Iterate passed column-config and update it with
    // default values if needed
    columns.forEach( column => {
      // column.cellTemplate = column.cellTemplate ? column.cellTemplate : this.default_config_column.cellTemplate;
      column.headerTemplate = column.headerTemplate ? column.headerTemplate : this.default_config_column.headerTemplate;
      column.display = column.display ? column.display : this.default_config_column.display;
      column.width = column.width ? column.width : this.default_config_column.width;
      updateColumns.push(column);
    });
    console.log('FAAARRARRRKKK');
    console.log(updateColumns);
    return updateColumns;
  }
  // getInitSelected() {
  //   return [ data[0] ];
  // }
  onSelect({ selected }) {
    // console.log('Select Event', selected, this.selected);
    this.selected = [ selected ];
    this.$component.$event.emit(new FgEvent( 'Selected', this, this.selected, false, false ));
  }
  onActivate($event) {
    console.log('Activate Event', event);
  }
}
