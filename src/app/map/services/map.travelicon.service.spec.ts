import { TestBed, inject } from '@angular/core/testing';

import { MapTravelIconService } from './map.travelicon.service';

describe('MapService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MapTravelIconService]
    });
  });

  it('should be created', inject([MapTravelIconService], (service: MapTravelIconService) => {
    expect(service).toBeTruthy();
  }));
});
