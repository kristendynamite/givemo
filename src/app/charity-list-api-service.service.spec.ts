import { TestBed, inject } from '@angular/core/testing';

import { CharityListApiServiceService } from './charity-list-api-service.service';

describe('CharityListApiServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CharityListApiServiceService]
    });
  });

  it('should ...', inject([CharityListApiServiceService], (service: CharityListApiServiceService) => {
    expect(service).toBeTruthy();
  }));
});
