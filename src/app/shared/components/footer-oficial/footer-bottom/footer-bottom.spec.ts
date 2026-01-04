import 'zone.js';
import 'zone.js/testing';

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import FooterBottom from './footer-bottom';

describe('FooterBottom', () => {
  let fixture: ComponentFixture<FooterBottom>;
  let element: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FooterBottom, RouterTestingModule],
    }).compileComponents();

    fixture = TestBed.createComponent(FooterBottom);
    element = fixture.nativeElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should render copyright text', () => {
    expect(element.textContent).toContain('2025 SeatGuard');
  });

  it('should render legal navigation links', () => {
    const links = element.querySelectorAll('a');

    expect(Array.from(links).some(a => a.textContent?.includes('Privacidad'))).toBeTrue();
    expect(Array.from(links).some(a => a.textContent?.includes('Términos'))).toBeTrue();
    expect(Array.from(links).some(a => a.textContent?.includes('Sitemap'))).toBeTrue();
  });

  it('should render country indicator', () => {
    expect(element.textContent).toContain('AR');
  });
});
