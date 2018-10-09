import { TemplateRef } from '@angular/core';

export interface CommonConfigTableColumnInterface {
  name?: string;
  prop?: string;
  display?: boolean;
  width?: number;
  dateFormat?: string;
}
export interface ConfigTableColumnInterface extends CommonConfigTableColumnInterface {
  headerTemplate?: string;
  cellTemplate?: string;
}
export interface RenderTableColumnInterface extends CommonConfigTableColumnInterface {
  headerTemplate?: TemplateRef<any>;
  cellTemplate?: TemplateRef<any>;
}
