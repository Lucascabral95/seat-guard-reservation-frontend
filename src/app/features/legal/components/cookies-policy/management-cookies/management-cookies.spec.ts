import 'zone.js';
import 'zone.js/testing';

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { signal, LOCALE_ID } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localeEs from '@angular/common/locales/es';

import HeaderCookies from '../header-cookies/header-cookies';

describe('HeaderCookies', () => {
  let fixture: ComponentFixture<HeaderCookies>;
  let component: HeaderCookies;

  beforeAll(() => {
    registerLocaleData(localeEs);
  });

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderCookies],
      providers: [
        { provide: LOCALE_ID, useValue: 'es' }
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(HeaderCookies);
    component = fixture.componentInstance;

    component.lastUpdated = signal(new Date(2025, 0, 15));

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render title', () => {
    const el: HTMLElement = fixture.nativeElement;
    expect(el.textContent).toContain('Política de Cookies');
  });

  it('should render description text', () => {
    const el: HTMLElement = fixture.nativeElement;
    expect(el.textContent).toContain(
      'Transparencia total sobre cómo gestionamos los datos'
    );
  });

  it('should render formatted last updated date', () => {
    const el: HTMLElement = fixture.nativeElement;
    expect(el.textContent.toLowerCase()).toContain('enero 2025');
  });
});
