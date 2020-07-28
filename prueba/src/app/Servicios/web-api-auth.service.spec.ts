import { TestBed } from '@angular/core/testing';

import { WebApiAuthService } from './web-api-auth.service';

describe('WebApiAuthService', () => {
  let service: WebApiAuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WebApiAuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
