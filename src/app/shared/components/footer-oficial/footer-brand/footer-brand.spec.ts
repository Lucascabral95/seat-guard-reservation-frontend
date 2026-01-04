import 'zone.js';
import 'zone.js/testing';

import { ComponentFixture, TestBed } from '@angular/core/testing';
import FooterBrand from './footer-brand';

describe('FooterBrand', () => {
  let fixture: ComponentFixture<FooterBrand>;
  let element: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FooterBrand],
    }).compileComponents();

    fixture = TestBed.createComponent(FooterBrand);
    element = fixture.nativeElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should render SeatGuard branding', () => {
    expect(element.textContent).toContain('SeatGuard');
  });

  it('should render description text', () => {
    expect(element.textContent).toContain(
      'La plataforma más segura para reservar tus asientos'
    );
  });

  it('should render brand icon svg', () => {
    const svg = element.querySelector('svg');
    expect(svg).toBeTruthy();
  });
});
