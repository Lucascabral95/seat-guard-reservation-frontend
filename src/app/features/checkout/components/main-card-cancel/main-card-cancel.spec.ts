import 'zone.js';
import 'zone.js/testing';

import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import MainCardCancel from './main-card-cancel';

describe('MainCardCancel', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        MainCardCancel,
        RouterTestingModule,
      ],
    }).compileComponents();
  });

  it('should create the component', () => {
    const fixture = TestBed.createComponent(MainCardCancel);
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should render cancel title and description', () => {
    const fixture = TestBed.createComponent(MainCardCancel);
    fixture.detectChanges();

    const el: HTMLElement = fixture.nativeElement;

    expect(el.textContent).toContain('El proceso se detuvo');
    expect(el.textContent).toContain(
      'No se ha realizado ningún cargo a tu tarjeta'
    );
  });

  it('should render navigation links', () => {
    const fixture = TestBed.createComponent(MainCardCancel);
    fixture.detectChanges();

    const el: HTMLElement = fixture.nativeElement;
    const links = el.querySelectorAll('a');

    expect(links.length).toBeGreaterThanOrEqual(2);
    expect(links[0].getAttribute('routerLink')).toBe('/dentro');
  });
});
