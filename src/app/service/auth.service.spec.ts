import { TestBed } from '@angular/core/testing';

import { AuthService } from './auth.service';//tiene que estar importado

describe('AuthService', () => {
  let service: AuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

//no se toca