import { TestBed, inject } from '@angular/core/testing';

import { SinterkluisApiService } from './sinterkluis-api.service';

describe('SinterkluisApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SinterkluisApiService]
    });
  });

  it('should be created', inject([SinterkluisApiService], (service: SinterkluisApiService) => {
    expect(service).toBeTruthy();
  }));
});
