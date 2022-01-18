import { TestBed } from '@angular/core/testing';

import { AdsbannerService } from './adsbanner.service';

describe('AdsbannerService', () => {
  let service: AdsbannerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdsbannerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
