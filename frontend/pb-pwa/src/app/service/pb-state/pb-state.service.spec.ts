import { TestBed } from '@angular/core/testing';

import { PbStateService } from './pb-state.service';

describe('PbStateService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PbStateService = TestBed.get(PbStateService);
    expect(service).toBeTruthy();
  });
});
