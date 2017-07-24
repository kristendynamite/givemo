import { TestBed, inject } from '@angular/core/testing';

import { CharityListApiService } from './charity-list-api.service';

describe('CharityListApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CharityListApiService]
    });
  });

  it('should ...', inject([CharityListApiService], (service: CharityListApiService) => {
    expect(service).toBeTruthy();
  }));
});
