import { TestBed, inject } from '@angular/core/testing';

import { FgEventService } from './fg-event.service';

describe('FgEventService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FgEventService]
    });
  });

  it('should ...', inject([FgEventService], (service: FgEventService) => {
    expect(service).toBeTruthy();
  }));
});
