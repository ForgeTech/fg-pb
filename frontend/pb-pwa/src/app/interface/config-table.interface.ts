import { ConfigTableColumnInterface } from './interface.export';

export interface ConfigTableInterface {
  columnMode?: string;
  headerHeight?: number;
  rowHeight?: number;
  footerHeight?: number;
  scrollbarV?: boolean;
  scrollbarH?: boolean;
  columns?: ConfigTableColumnInterface[];
  selectionType?: string;
  limit?: number;
}
