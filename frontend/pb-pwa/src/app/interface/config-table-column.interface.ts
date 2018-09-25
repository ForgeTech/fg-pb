import { TemplateRef } from '@angular/core';

export interface ConfigTableColumnInterface {
  name?: string;
  prop?: string;
  display?: boolean;
  width?: number;
  headerTemplate?: TemplateRef<any>;
  cellTemplate?: TemplateRef<any>;
}
