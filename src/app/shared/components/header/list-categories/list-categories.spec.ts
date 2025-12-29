import 'zone.js';
import 'zone.js/testing';

import { Component } from '@angular/core';
import { TestBed } from '@angular/core/testing';

import ListCategories from './list-categories';
import { ServiceNameService } from '../../../../core/services/header.service';
import { AuthLoginService } from '../../../../auth/login/service/auth-login-service';
import { Router } from '@angular/router';

/* ========= STUBS ========= */

@Component({ selector: 'header-search-event', standalone: true, template: '' })
class SearchEventStub {}

@Component({ selector: 'component-menu-open', standalone: true, template: '' })
class MenuOpenStub {}

@Component({ selector: 'component-utility-bar', standalone: true, template: '' })
class UtilityBarStub {}

@Component({ selector: 'component-nav-bar', standalone: true, template: '' })
class NavBarStub {}

/* ========= MOCKS ========= */

class HeaderServiceMock {
  categories() {
    return [];
  }
  genders() {
    return [];
  }
}

class AuthLoginServiceMock {
  isAuthenticated() {
    return true;
  }
  logout = jasmine.createSpy('logout');
}

class RouterMock {
  navigate = jasmine.createSpy('navigate');
}

describe('ListCategories', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListCategories],
      providers: [
        { provide: ServiceNameService, useClass: HeaderServiceMock },
        { provide: AuthLoginService, useClass: AuthLoginServiceMock },
        { provide: Router, useClass: RouterMock },
      ],
    })
      .overrideComponent(ListCategories, {
        set: {
          imports: [
            SearchEventStub,
            MenuOpenStub,
            UtilityBarStub,
            NavBarStub,
          ],
        },
      })
      .compileComponents();
  });

  it('should create the component', () => {
    const fixture = TestBed.createComponent(ListCategories);
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should toggle menu state', () => {
    const fixture = TestBed.createComponent(ListCategories);
    const component = fixture.componentInstance;

    expect(component.isMenuOpen).toBeFalse();

    component.toggleMenu();
    expect(component.isMenuOpen).toBeTrue();

    component.toggleMenu();
    expect(component.isMenuOpen).toBeFalse();
  });

  it('should call logout on auth service', () => {
    const fixture = TestBed.createComponent(ListCategories);
    const component = fixture.componentInstance;

    component.logout();

    const authService = TestBed.inject(AuthLoginService) as any;
    expect(authService.logout).toHaveBeenCalled();
  });

  it('should navigate to login page', () => {
    const fixture = TestBed.createComponent(ListCategories);
    const component = fixture.componentInstance;

    component.goToLogin();

    const router = TestBed.inject(Router) as any;
    expect(router.navigate).toHaveBeenCalledWith(['/auth/login']);
  });
});
