import 'zone.js';
import 'zone.js/testing';

import { TestBed } from '@angular/core/testing';
import MainCard from './main-card';

describe('MainCard', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MainCard],
    }).compileComponents();
  });

  it('should create the component', () => {
    const fixture = TestBed.createComponent(MainCard);
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should render order information correctly', () => {
    const fixture = TestBed.createComponent(MainCard);
    const component = fixture.componentInstance;

    component.order = {
      id: 'order-123456',
      createdAt: new Date('2025-01-01'),
      status: 'PAID',
      amount: 5000,
      paymentProviderId: 'stripe_abc_123',
      items: [
        {
          id: 'item-1',
          section: 'Platea Alta',
          number: 'A12',
          price: 2500,
        },
        {
          id: 'item-2',
          section: 'Platea Baja',
          number: 'B3',
          price: 2500,
        },
      ],
    } as any;

    fixture.detectChanges();

    const el: HTMLElement = fixture.nativeElement;

    // Orden ID (solo parte visible)
    expect(el.textContent).toContain('#order');

    // Cantidad de entradas
    expect(el.textContent).toContain('Tus Entradas (2)');

    // Items
    expect(el.textContent).toContain('Platea Alta');
    expect(el.textContent).toContain('Asiento A12');
    expect(el.textContent).toContain('Platea Baja');
    expect(el.textContent).toContain('Asiento B3');

    // Estado
    expect(el.textContent).toContain('PAID');

    // Total
    expect(el.textContent).toContain('Total Pagado');

    // Referencia
    expect(el.textContent).toContain('stripe_abc_123');
  });
});
