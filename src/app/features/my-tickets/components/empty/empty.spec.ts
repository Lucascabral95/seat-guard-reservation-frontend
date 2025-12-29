import 'zone.js';
import 'zone.js/testing';

import { TestBed } from '@angular/core/testing';
import EmptyMyTickets from './empty';
import { provideRouter } from '@angular/router';

describe('EmptyMyTickets', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmptyMyTickets],
      providers: [provideRouter([])],
    }).compileComponents();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(EmptyMyTickets);
    fixture.detectChanges();

    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should render default text and detail', () => {
    const fixture = TestBed.createComponent(EmptyMyTickets);
    fixture.detectChanges();

    const el: HTMLElement = fixture.nativeElement;

    expect(el.textContent).toContain('Aún no tienes compras');
    expect(el.textContent).toContain('Cuando compres entradas aparecerán aquí');
  });

  it('should render custom text and detail', () => {
    const fixture = TestBed.createComponent(EmptyMyTickets);

    fixture.componentInstance.text = 'Sin resultados';
    fixture.componentInstance.detail = 'No hay tickets disponibles';
    fixture.detectChanges();

    const el: HTMLElement = fixture.nativeElement;

    expect(el.textContent).toContain('Sin resultados');
    expect(el.textContent).toContain('No hay tickets disponibles');
  });

  it('should render link to events', () => {
    const fixture = TestBed.createComponent(EmptyMyTickets);
    fixture.detectChanges();

    const link: HTMLAnchorElement =
      fixture.nativeElement.querySelector('a');

    expect(link).toBeTruthy();
    expect(link.getAttribute('routerLink')).toBe('/dentro/events');
  });
});
