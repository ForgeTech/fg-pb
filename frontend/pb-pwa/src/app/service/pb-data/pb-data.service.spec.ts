import { TestBed, inject } from '@angular/core/testing';

import { PbDataService } from './pb-data.service';

describe('PbDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PbDataService]
    });
  });

  it('should be created', inject([PbDataService], (service: PbDataService) => {
    expect(service).toBeTruthy();
  }));
});
