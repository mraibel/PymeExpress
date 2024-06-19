import { TestBed } from '@angular/core/testing';

import { PymesService } from './pymes.service';

describe('PymesService', () => {
  let service: PymesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PymesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
