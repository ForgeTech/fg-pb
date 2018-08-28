import { TestBed, inject } from '@angular/core/testing';

import { PbModalService } from './pb-modal.service';

describe('PbModalService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PbModalService]
    });
  });

  it('should be created', inject([PbModalService], (service: PbModalService) => {
    expect(service).toBeTruthy();
  }));
});
