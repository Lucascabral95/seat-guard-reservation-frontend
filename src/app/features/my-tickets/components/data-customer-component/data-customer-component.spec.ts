import 'zone.js';
import 'zone.js/testing';

import { TestBed } from '@angular/core/testing';
import DataCustomerComponent from './data-customer-component';
import { createResourceMock } from '../../../../shared/testing/testing-utils';

describe('DataCustomerComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DataCustomerComponent],
    }).compileComponents();
  });

  function createComponent(resource: any) {
    const fixture = TestBed.createComponent(DataCustomerComponent);
    fixture.componentInstance.dataCustomer = resource;
    fixture.detectChanges();
    return fixture;
  }

  it('should create', () => {
    const fixture = createComponent(createResourceMock());
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should render loading state', () => {
    const fixture = createComponent(
      createResourceMock({ loading: true })
    );

    const el: HTMLElement = fixture.nativeElement;
    expect(el.textContent).toContain('Cargando datos del comprador');
  });

  it('should render error state', () => {
    const fixture = createComponent(
      createResourceMock({ error: true })
    );

    const el: HTMLElement = fixture.nativeElement;
    expect(el.textContent).toContain(
      'los datos del comprador aún no están disponibles'
    );
  });

  it('should render customer data', () => {
    const fixture = createComponent(
      createResourceMock({
        value: {
          customerName: 'Juan Pérez',
          customerEmail: 'juan@test.com',
          paymentProvider: 'Stripe',
          amount: 2500,
        },
      })
    );

    const el: HTMLElement = fixture.nativeElement;

    expect(el.textContent).toContain('Juan Pérez');
    expect(el.textContent).toContain('juan@test.com');
    expect(el.textContent).toContain('Stripe');
    expect(el.textContent).toContain('25'); // USD (2500 / 100)
  });
});
