import { TestBed } from '@angular/core/testing';

import { CalculateWinnerService } from './calculate-winner.service';

describe('CalculateWinnerService', () => {
  let service: CalculateWinnerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CalculateWinnerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
