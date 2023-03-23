import { TestBed } from '@angular/core/testing';

import { TypeDecomposerService } from './type-decomposer.service';

describe('TypeDecomposerService', () => {
  let service: TypeDecomposerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TypeDecomposerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
