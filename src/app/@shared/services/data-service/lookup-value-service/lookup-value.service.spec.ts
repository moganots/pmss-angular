import { TestBed } from '@angular/core/testing';

import { LookupValueService } from './lookup-value.service';

describe('LookupValueService', () => {
  let service: LookupValueService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LookupValueService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
