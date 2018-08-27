import { NgModule, ModuleWithProviders } from '@angular/core';
import {
  GlobalRef,
  BrowserGlobalRef,
  NodeGlobalRef
} from './fg-global-refs.class';

@NgModule({})
export class FgGlobalScopeModule {

  static forBrowser(): ModuleWithProviders {
    return {
      ngModule: FgGlobalScopeModule,
      providers: [
        { provide: GlobalRef, useClass: BrowserGlobalRef }
      ]
    };
  }

  static forNode(): ModuleWithProviders {
    return {
      ngModule: FgGlobalScopeModule,
      providers: [
        { provide: GlobalRef, useClass: NodeGlobalRef }
      ]
    };
  }
}
