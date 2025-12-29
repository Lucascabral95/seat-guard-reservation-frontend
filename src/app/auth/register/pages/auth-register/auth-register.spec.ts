import 'zone.js';
import 'zone.js/testing';

import { TestBed } from '@angular/core/testing';
import AuthRegister from './auth-register';
import { AuthLoginService } from '../../../login/service/auth-login-service';
import { provideRouter } from '@angular/router';
import { of, throwError } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';

describe('AuthRegister', () => {
  let authServiceMock: any;

  beforeEach(async () => {
    authServiceMock = {
      register: jasmine.createSpy().and.returnValue(of({}))
    };

    await TestBed.configureTestingModule({
      imports: [AuthRegister],
      providers: [
        provideRouter([]),
        { provide: AuthLoginService, useValue: authServiceMock }
      ]
    }).compileComponents();
  });

  function createComponent() {
    const fixture = TestBed.createComponent(AuthRegister);
    fixture.detectChanges();
    return fixture;
  }

  it('should create', () => {
    const fixture = createComponent();
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should call register when form is valid', () => {
    const fixture = createComponent();
    const component = fixture.componentInstance;

    component.myForm.setValue({
      email: 'test@test.com',
      password: 'Password1!',
      name: 'Test User'
    });

    component.onSubmit();

    expect(authServiceMock.register).toHaveBeenCalled();
  });

  it('should show error message when register fails', () => {
    authServiceMock.register.and.returnValue(
      throwError(() => new HttpErrorResponse({
        error: { message: 'Error de registro' }
      }))
    );

    const fixture = createComponent();
    const component = fixture.componentInstance;

    component.myForm.setValue({
      email: 'test@test.com',
      password: 'Password1!',
      name: 'Test User'
    });

    component.onSubmit();

    expect(component.errorMessage()).toBe('Error de registro');
  });

  it('should not submit if form is invalid', () => {
    const fixture = createComponent();
    const component = fixture.componentInstance;

    component.onSubmit();

    expect(authServiceMock.register).not.toHaveBeenCalled();
    expect(component.myForm.invalid).toBeTrue();
  });
});
