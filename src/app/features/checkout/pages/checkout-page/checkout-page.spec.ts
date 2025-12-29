import 'zone.js';
import 'zone.js/testing';

import { TestBed } from '@angular/core/testing';
import { ActivatedRoute, Router } from '@angular/router';
import CheckoutPage from './checkout-page';
import { CheckoutService } from '../../service/checkout.service';

describe('CheckoutPage', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CheckoutPage],
      providers: [
        {
          provide: CheckoutService,
          useClass: class {
            getDataCheckout() {
              return {
                value: () => ({
                  eventName: 'Evento Test',
                  items: [],
                  amount: 1000,
                }),
              };
            }
          },
        },
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: {
              paramMap: {
                get: () => 'order-id-test',
              },
              queryParamMap: {
                get: () => null,
              },
            },
          },
        },
        {
          provide: Router,
          useValue: {
            navigate: jasmine.createSpy('navigate'),
          },
        },
      ],
    }).compileComponents();
  });

  it('should create checkout page', () => {
    const fixture = TestBed.createComponent(CheckoutPage);
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should render checkout child components', () => {
    const fixture = TestBed.createComponent(CheckoutPage);
    fixture.detectChanges();

    const el: HTMLElement = fixture.nativeElement;
    expect(el.querySelector('component-data-customer')).toBeTruthy();
    expect(el.querySelector('component-send-method')).toBeTruthy();
  });
});
