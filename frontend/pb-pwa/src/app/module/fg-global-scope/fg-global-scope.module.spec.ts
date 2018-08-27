import { FgGlobalScopeModule } from './fg-global-scope.module';

describe('FgGlobalScopeModule', () => {
  let fgGlobalScopeModule: FgGlobalScopeModule;

  beforeEach(() => {
    fgGlobalScopeModule = new FgGlobalScopeModule();
  });

  it('should create an instance', () => {
    expect(fgGlobalScopeModule).toBeTruthy();
  });
});
