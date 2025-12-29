import 'zone.js';
import 'zone.js/testing';

import { TestBed } from '@angular/core/testing';
import { of, throwError } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';

import AuthLogin from './auth-login';
import { AuthLoginService } from '../../service/auth-login-service';

describe('AuthLogin (safe)', () => {
  let authServiceMock: jasmine.SpyObj<AuthLoginService>;

  beforeEach(async () => {
    authServiceMock = jasmine.createSpyObj<AuthLoginService>('AuthLoginService', [
      'login',
    ]);

    await TestBed.configureTestingModule({
      imports: [AuthLogin],
      providers: [
        { provide: AuthLoginService, useValue: authServiceMock },
      ],
    })
      // 🚨 ESTO ES LA CLAVE
      .overrideComponent(AuthLogin, {
        set: {
          template: '', // ❌ NO RouterLink, NO ActivatedRoute
        },
      })
      .compileComponents();
  });

  function createComponent() {
    const fixture = TestBed.createComponent(AuthLogin);
    fixture.detectChanges();
    return fixture;
  }

  it('should create', () => {
    const fixture = createComponent();
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should not submit if form is invalid', () => {
    const component = createComponent().componentInstance;

    component.onSubmit();

    expect(authServiceMock.login).not.toHaveBeenCalled();
  });

  it('should call login when form is valid', () => {
    authServiceMock.login.and.returnValue(of({} as any));

    const component = createComponent().componentInstance;

    component.myForm.setValue({
      email: 'test@test.com',
      password: '123456',
    });

    component.onSubmit();

    expect(authServiceMock.login).toHaveBeenCalled();
  });

  it('should set error message when login fails', () => {
    authServiceMock.login.and.returnValue(
      throwError(() =>
        new HttpErrorResponse({
          error: { message: 'Credenciales inválidas' },
        })
      )
    );

    const component = createComponent().componentInstance;

    component.myForm.setValue({
      email: 'test@test.com',
      password: '123456',
    });

    component.onSubmit();

    expect(component.errorMessage()).toBe('Credenciales inválidas');
  });
});
