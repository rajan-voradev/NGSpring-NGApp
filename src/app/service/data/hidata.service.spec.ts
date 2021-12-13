import { TestBed } from '@angular/core/testing';

import { HidataService } from './hidata.service';

describe('HidataService', () => {
  let service: HidataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HidataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
