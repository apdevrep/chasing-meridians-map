import { TestBed, inject } from '@angular/core/testing';

import { MapPopupService } from './map.popup.service';

describe('Map.PopupService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MapPopupService]
    });
  });

  it('should be created', inject([MapPopupService], (service: MapPopupService) => {
    expect(service).toBeTruthy();
  }));
});
