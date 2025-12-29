import 'zone.js';
import 'zone.js/testing';

import { TestBed } from '@angular/core/testing';
import OrderCardMyTicket from './order-card-my-ticket';

describe('OrderCardMyTicket', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrderCardMyTicket],
    }).compileComponents();
  });

  function createComponent(order: any) {
    const fixture = TestBed.createComponent(OrderCardMyTicket);
    fixture.componentInstance.order = order;
    fixture.detectChanges();
    return fixture;
  }

  it('should create', () => {
    const fixture = createComponent({
      createdAt: new Date(),
      status: 'completed',
      amount: 5000,
      paymentProviderId: 'stripe_123',
    });

    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should render order status', () => {
    const fixture = createComponent({
      createdAt: new Date(),
      status: 'pending',
      amount: 3000,
      paymentProviderId: 'stripe_456',
    });

    const el: HTMLElement = fixture.nativeElement;
    expect(el.textContent).toContain('pending');
  });

  it('should render formatted amount', () => {
    const fixture = createComponent({
      createdAt: new Date(),
      status: 'completed',
      amount: 5000,
      paymentProviderId: 'stripe_789',
    });

    const el: HTMLElement = fixture.nativeElement;

    // ✔ forma segura (currency pipe real)
    expect(el.textContent).toContain('$5,000');
  });

  it('should render fallback when paymentProviderId is missing', () => {
    const fixture = createComponent({
      createdAt: new Date(),
      status: 'failed',
      amount: 2000,
      paymentProviderId: null,
    });

    const el: HTMLElement = fixture.nativeElement;
    expect(el.textContent).toContain('Pago aún no realizado');
  });
});
