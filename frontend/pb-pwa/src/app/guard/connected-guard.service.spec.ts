import { TestBed } from '@angular/core/testing';

import { ConnectedGuard } from './connected-guard.service';

describe('ConnectedGuard', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ConnectedGuard = TestBed.get(ConnectedGuard);
    expect(service).toBeTruthy();
  });
});
