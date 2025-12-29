import 'zone.js';
import 'zone.js/testing';

import { TestBed } from '@angular/core/testing';
import { HomePage } from './home-page';

describe('HomePage', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomePage],
    }).compileComponents();
  });

  it('should create the page', () => {
    const fixture = TestBed.createComponent(HomePage);
    fixture.detectChanges();

    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should render Hero component', () => {
    const fixture = TestBed.createComponent(HomePage);
    fixture.detectChanges();

    const el: HTMLElement = fixture.nativeElement;
    expect(el.querySelector('hero')).toBeTruthy();
  });

  it('should pass banner data to Hero', () => {
    const fixture = TestBed.createComponent(HomePage);
    fixture.detectChanges();

    const el: HTMLElement = fixture.nativeElement;

    expect(el.textContent).toContain('Eventos en Vivo');
    expect(el.textContent).toContain(
      'Descubrí los recitales más esperados del año'
    );
  });
});
