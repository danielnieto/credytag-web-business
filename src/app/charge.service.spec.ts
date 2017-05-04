import { TestBed, inject } from '@angular/core/testing';

import { ChargeService } from './charge.service';

describe('ChargeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ChargeService]
    });
  });

  it('should ...', inject([ChargeService], (service: ChargeService) => {
    expect(service).toBeTruthy();
  }));
});
