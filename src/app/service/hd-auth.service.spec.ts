import { TestBed } from '@angular/core/testing';

import { HdAuthService } from './hd-auth.service';

describe('HdAuthService', () => {
  let service: HdAuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HdAuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
