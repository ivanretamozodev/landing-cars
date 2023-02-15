import { TestBed } from '@angular/core/testing';

import { CarsDetailService } from './cars-detail.service';

describe('CarsDetailService', () => {
  let service: CarsDetailService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CarsDetailService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
