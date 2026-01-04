import 'zone.js';
import 'zone.js/testing';

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LOCALE_ID, signal } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localeEs from '@angular/common/locales/es';

import HeaderCookies from './header-cookies';

describe('HeaderCookies', () => {
  let fixture: ComponentFixture<HeaderCookies>;

  beforeAll(() => {
    registerLocaleData(localeEs);
  });

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderCookies],
      providers: [{ provide: LOCALE_ID, useValue: 'es' }],
    }).compileComponents();

    fixture = TestBed.createComponent(HeaderCookies);

    fixture.componentInstance.lastUpdated = signal(
      new Date(2025, 0, 15) // enero 2025
    );

    fixture.detectChanges();
  });

  it('should render formatted last updated date', () => {
    const text = fixture.nativeElement.textContent.toLowerCase();
    expect(text).toContain('enero 2025');
  });

  it('should render formatted last updated year', () => {
    const text = fixture.nativeElement.textContent;
    expect(text).toContain('2025');
  });
});
