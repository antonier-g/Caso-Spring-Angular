import { TestBed } from '@angular/core/testing';

import { DepempsService } from './depemps.service';

describe('DepempsService', () => {
  let service: DepempsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DepempsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
