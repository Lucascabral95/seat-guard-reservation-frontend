import 'zone.js';
import 'zone.js/testing';

import { TestBed } from '@angular/core/testing';
import { HttpClient } from '@angular/common/http';
import { of, throwError } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { PLATFORM_ID } from '@angular/core';

import { AuthLoginService } from './auth-login-service';

describe('AuthLoginService (safe)', () => {
  let service: AuthLoginService;
  let httpMock: jasmine.SpyObj<HttpClient>;
  let routerMock: jasmine.SpyObj<Router>;

  beforeEach(() => {
    httpMock = jasmine.createSpyObj('HttpClient', ['post']);
    routerMock = jasmine.createSpyObj('Router', ['navigate']);

    TestBed.configureTestingModule({
      providers: [
        AuthLoginService,
        { provide: HttpClient, useValue: httpMock },
        { provide: Router, useValue: routerMock },
        { provide: PLATFORM_ID, useValue: 'browser' },
      ],
    });

    service = TestBed.inject(AuthLoginService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should login successfully and navigate', () => {
    httpMock.post.and.returnValue(
      of({ access_token: 'fake-token' } as any)
    );

    service.login({ email: 'a@a.com', password: '123456' }).subscribe();

    expect(httpMock.post).toHaveBeenCalled();
    expect(routerMock.navigate).toHaveBeenCalledWith(['/dentro']);
    expect(service.checkAuth()).toBeTrue();
  });

  it('should set auth false on login error', () => {
    httpMock.post.and.returnValue(
      throwError(() => new HttpErrorResponse({ status: 401 }))
    );

    service.login({ email: 'a@a.com', password: '123456' }).subscribe({
      error: () => {}
    });

    expect(service.checkAuth()).toBeFalse();
  });

  it('should logout correctly', () => {
    service.logout();

    expect(routerMock.navigate).toHaveBeenCalledWith(['/auth/login']);
    expect(service.checkAuth()).toBeFalse();
  });
});
