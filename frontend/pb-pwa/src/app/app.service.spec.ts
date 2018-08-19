import { TestBed, inject } from '@angular/core/testing';

import { FgAppService } from './app.service';

describe('FgInitService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FgAppService]
    });
  });

  it('should ...', inject([FgAppService], (service: FgAppService) => {
    expect(service).toBeTruthy();
  }));
});
