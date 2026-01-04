import 'zone.js';
import 'zone.js/testing';

import { ComponentFixture, TestBed } from '@angular/core/testing';
import FooterSocial from './footer-social';

describe('FooterSocial', () => {
  let fixture: ComponentFixture<FooterSocial>;
  let element: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FooterSocial],
    }).compileComponents();

    fixture = TestBed.createComponent(FooterSocial);
    element = fixture.nativeElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should render section title', () => {
    expect(element.textContent).toContain(
      'Desarrollado con ❤️ por Lucas Cabral'
    );
  });

  it('should render LinkedIn link', () => {
    const link = element.querySelector(
      'a[href*="linkedin.com"]'
    );
    expect(link).toBeTruthy();
  });

  it('should render GitHub link', () => {
    const link = element.querySelector(
      'a[href*="github.com"]'
    );
    expect(link).toBeTruthy();
  });

  it('should render Portfolio link', () => {
    const link = element.querySelector(
      'a[href*="vercel.app"]'
    );
    expect(link).toBeTruthy();
  });

  it('should render social icons', () => {
    const svgs = element.querySelectorAll('svg');
    expect(svgs.length).toBeGreaterThan(0);
  });
});
