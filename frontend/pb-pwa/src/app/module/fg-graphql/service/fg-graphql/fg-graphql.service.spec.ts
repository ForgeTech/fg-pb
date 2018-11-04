import { TestBed, inject } from '@angular/core/testing';

import { FgGraphqlService } from './fg-graphql.service';

describe('FgGraphqlClientService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FgGraphqlService]
    });
  });

  it('should be created', inject([FgGraphqlService], (service: FgGraphqlService) => {
    expect(service).toBeTruthy();
  }));
});
