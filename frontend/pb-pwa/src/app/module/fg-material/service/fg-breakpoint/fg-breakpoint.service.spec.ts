import { TestBed } from '@angular/core/testing';

import { FgBreakpointService } from './fg-breakpoint.service';

describe('FgBreakpointService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FgBreakpointService = TestBed.get(FgBreakpointService);
    expect(service).toBeTruthy();
  });
});
