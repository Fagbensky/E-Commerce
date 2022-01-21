import { TestBed } from '@angular/core/testing';

import { TodayProductsService } from './today-products.service';

describe('TodayProductsService', () => {
  let service: TodayProductsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TodayProductsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
