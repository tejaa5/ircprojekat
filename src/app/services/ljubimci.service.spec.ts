import { TestBed } from '@angular/core/testing';

import { LjubimciService } from './ljubimci.service';

describe('LjubimciService', () => {
  let service: LjubimciService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LjubimciService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
