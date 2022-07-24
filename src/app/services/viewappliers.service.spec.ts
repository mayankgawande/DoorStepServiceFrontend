import { TestBed } from '@angular/core/testing';

import { ViewappliersService } from './viewappliers.service';

describe('ViewappliersService', () => {
  let service: ViewappliersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ViewappliersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
