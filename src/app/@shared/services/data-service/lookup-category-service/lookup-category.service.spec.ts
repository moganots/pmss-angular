import { TestBed } from '@angular/core/testing';

import { LookupCategoryService } from './lookup-category.service';

describe('LookupCategoryService', () => {
  let service: LookupCategoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LookupCategoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
