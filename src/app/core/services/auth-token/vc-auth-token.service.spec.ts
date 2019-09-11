import { TestBed } from '@angular/core/testing';

import { VcAuthTokenService } from './vc-auth-token.service';

describe('VcAuthTokenService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: VcAuthTokenService = TestBed.get(VcAuthTokenService);
    expect(service).toBeTruthy();
  });
});
