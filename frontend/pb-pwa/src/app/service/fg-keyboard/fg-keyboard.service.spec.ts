import { TestBed } from '@angular/core/testing';

import { FgKeyboardService } from './fg-keyboard.service';

describe('FgKeyboardService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FgKeyboardService = TestBed.get(FgKeyboardService);
    expect(service).toBeTruthy();
  });
});
