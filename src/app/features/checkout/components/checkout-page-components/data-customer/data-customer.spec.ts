import 'zone.js';
import 'zone.js/testing';

import { TestBed } from '@angular/core/testing';
import DataCustomer from './data-customer';

describe('DataCustomer', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DataCustomer],
    }).compileComponents();
  });

  it('should create the component', () => {
    const fixture = TestBed.createComponent(DataCustomer);
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should render title "Datos del Comprador"', () => {
    const fixture = TestBed.createComponent(DataCustomer);
    fixture.detectChanges();

    const el: HTMLElement = fixture.nativeElement;
    expect(el.textContent).toContain('Datos del Comprador');
  });

  it('should mention Stripe payment flow', () => {
    const fixture = TestBed.createComponent(DataCustomer);
    fixture.detectChanges();

    const el: HTMLElement = fixture.nativeElement;
    expect(el.textContent).toContain('Stripe');
    expect(el.textContent).toContain('pago');
  });

  it('should render email usage list', () => {
    const fixture = TestBed.createComponent(DataCustomer);
    fixture.detectChanges();

    const el: HTMLElement = fixture.nativeElement;
    expect(el.textContent).toContain('Enviar el comprobante de pago');
    expect(el.textContent).toContain('Enviar tus tickets');
    expect(el.textContent).toContain('Identificar al titular de la compra');
  });
});
