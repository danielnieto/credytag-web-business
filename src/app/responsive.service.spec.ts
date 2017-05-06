import { TestBed, inject } from '@angular/core/testing';

import { ResponsiveService } from './responsive.service';

describe('ResponsiveService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ResponsiveService]
    });
  });

  it('should ...', inject([ResponsiveService], (service: ResponsiveService) => {
    expect(service).toBeTruthy();
  }));
});
