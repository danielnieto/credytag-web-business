import { TestBed, inject } from '@angular/core/testing';

import { ChargesService } from './charges.service';

describe('ChargeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ChargesService]
    });
  });

  it('should ...', inject([ChargesService], (service: ChargesService) => {
    expect(service).toBeTruthy();
  }));
});
