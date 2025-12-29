import 'zone.js';
import 'zone.js/testing';

import { TestBed } from '@angular/core/testing';
import HeaderMyTickets from './header';

describe('HeaderMyTickets', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderMyTickets],
    }).compileComponents();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(HeaderMyTickets);
    fixture.detectChanges();

    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should render default title and caption', () => {
    const fixture = TestBed.createComponent(HeaderMyTickets);
    fixture.detectChanges();

    const el: HTMLElement = fixture.nativeElement;

    expect(el.textContent).toContain('Mis Tickets');
    expect(el.textContent).toContain('Historial de compras');
  });

  it('should render custom title and caption', () => {
    const fixture = TestBed.createComponent(HeaderMyTickets);
    fixture.componentInstance.title = 'Compras';
    fixture.componentInstance.caption = 'Listado';
    fixture.detectChanges();

    const el: HTMLElement = fixture.nativeElement;

    expect(el.textContent).toContain('Compras');
    expect(el.textContent).toContain('Listado');
  });
});
