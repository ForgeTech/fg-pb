import { Component, TemplateRef, ViewChild, AfterViewInit, OnChanges, SimpleChange, SimpleChanges, Input } from '@angular/core';
import { MatPaginator, MatSort } from '@angular/material';
import { FgComponentBaseComponent } from '../fg-component-base/fg-component-base.component';
import { FgComponentBaseService } from '../fg-component-base/fg-component-base.service';
import { FgEvent } from '../../class/fg-event.class';
import { ConfigTableColumnInterface, RenderTableColumnInterface, ConfigTableInterface } from '../../interface/interface.export';

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
   * Override entity for table-component with correct type
   */
  public entity: any[] = [];
  /**
   * Override default config-object from FgComponentBaseComponent
   */
  public config: ConfigTableInterface;
  /**
   * Table-Column Config containing the custom templates to render
   */
  public columns: RenderTableColumnInterface[];
  /**
   * Hold selected table items
   */
  @Input() public selected: any[];
  /**
   * The default column-header-template to use
   */
  @ViewChild('headerTmpl') headerTmpl: TemplateRef<any>;
  /**
   * The default column-template to use
   */
  @ViewChild('cellTmpl') cellTmpl: TemplateRef<any>;
  /**
   * The default column-template to use
   */
  @ViewChild('dateCellTmpl') dateCellTmpl: TemplateRef<any>;
  /**
   * The default column-template to use
   */
  @ViewChild('sideCellTmpl') sideCellTmpl: TemplateRef<any>;
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
   * CONSTRUCTOR
   */
  constructor($component: FgComponentBaseService) {
    super(
      $component
    );
  }
  /**
   * Override FgComponentBaseComponent ngOnChanges
   */
  ngOnChanges(changes: SimpleChanges): void {
    super.ngOnChanges(changes);
    if (changes.config) {
      // Prepare column-configuration
      this.columns = this.prepareColumns(this.config.columns);
    }
  }
  /**
   * Override FgComponentBaseComponent ngAfterViewInit
   */
  ngOnInit(): void {
    this.config = Object.assign(this.default_config_table, this.config);
    this.columns = this.prepareColumns(this.config.columns);
  }
  /**
   * Iterate over passed column-config and update default-values
   * if they aren't set
   * @param columns
   */
  prepareColumns(columnConfigs: ConfigTableColumnInterface[]): RenderTableColumnInterface[] {
    let renderColumns: RenderTableColumnInterface[] = [];
    // Iterate passed column-config and update it with
    // default values if needed
    columnConfigs.forEach( columnConfig => {
      let renderColumn: any = {}
      renderColumn.headerTemplate = this.getHeaderTemplate( columnConfig.headerTemplate  );
      renderColumn.cellTemplate = this.getColumnTemplate( columnConfig.cellTemplate );
      renderColumn.display = columnConfig.display ? columnConfig.display : this.default_config_column.display;
      renderColumn.width = columnConfig.width ? columnConfig.width : this.default_config_column.width;
      renderColumn.dateFormat = columnConfig.dateFormat ? columnConfig.dateFormat : this.default_config_column.dateFormat;
      renderColumn.prop = columnConfig.prop;
      renderColumn.name = columnConfig.name;
      renderColumns.push(renderColumn);
    });

    return renderColumns;
  }
  /**
   * Return the header-template according to passed identifier-string
   */
  getHeaderTemplate(cellTemplate: string = ''): TemplateRef<any> {
    let tmpl: TemplateRef<any> = this.headerTmpl;;
    switch (cellTemplate) {
      default:
        tmpl = this.headerTmpl;
        break;
    }
    return tmpl;
  }
  /**
   * Return the column-template according to passed identifier-string
   */
  getColumnTemplate(cellTemplate: string = ''): TemplateRef<any> {
    let tmpl: TemplateRef<any> = this.cellTmpl;
      switch (cellTemplate) {
        case 'side':
          tmpl = this.sideCellTmpl;
          break;
        case 'date':
          tmpl = this.dateCellTmpl;
          break;
        default:
          tmpl = this.cellTmpl;
          break;
      }
    return tmpl;
  }
  /**
   * Dispatches event when row-selection appears
   * @param param0
   */
  onSelect(selected) {
    this.$component.$log.warn('EMIT: SELECTED CONTRACT');
    this.emitEvent(new FgEvent('Selected', this, selected, false, true));
  }
  /**
   * Handles events appearing with table-interaction
   * @param $event
   */
  // onActivate($event) {
  // console.log('Activate Event', event);
  // }
  /**
   * Methode for decorating data-table rows with css classes
   * @param row
   */
  getRowClass( row ) {
    return {
      'inactive-row': row.state && ( row.state === 'IACT' ),
    };
  }
}
