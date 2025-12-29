import 'zone.js';
import 'zone.js/testing';

import { TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import CheckoutSuccessPage from './checkout-success-page';
import { CheckoutService } from '../../service/checkout.service';

type ResourceMock<T = any> = {
  isLoading: () => boolean;
  error: () => any;
  value: () => T | null;
};

function createResourceMock<T>({
  loading = false,
  error = null,
  value = null,
}: {
  loading?: boolean;
  error?: any;
  value?: T | null;
} = {}): ResourceMock<T> {
  return {
    isLoading: () => loading,
    error: () => error,
    value: () => value,
  };
}

describe('CheckoutSuccessPage', () => {
  let checkoutServiceMock: any;

  beforeEach(async () => {
    checkoutServiceMock = {
      getDataCheckout: jasmine.createSpy(),
    };

    await TestBed.configureTestingModule({
      imports: [CheckoutSuccessPage],
      providers: [
        {
          provide: CheckoutService,
          useValue: checkoutServiceMock,
        },
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: {
              queryParamMap: {
                get: () => 'order-123',
              },
            },
          },
        },
      ],
    }).compileComponents();
  });

  it('should create the page', () => {
    checkoutServiceMock.getDataCheckout.and.returnValue(
      createResourceMock({ loading: true })
    );

    const fixture = TestBed.createComponent(CheckoutSuccessPage);
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should render loading state', () => {
    checkoutServiceMock.getDataCheckout.and.returnValue(
      createResourceMock({ loading: true })
    );

    const fixture = TestBed.createComponent(CheckoutSuccessPage);
    fixture.detectChanges();

    const el: HTMLElement = fixture.nativeElement;
    expect(el.querySelector('component-loading-success')).toBeTruthy();
  });

  it('should render error state', () => {
    checkoutServiceMock.getDataCheckout.and.returnValue(
      createResourceMock({ error: true })
    );

    const fixture = TestBed.createComponent(CheckoutSuccessPage);
    fixture.detectChanges();

    const el: HTMLElement = fixture.nativeElement;
    expect(el.querySelector('component-error-success')).toBeTruthy();
  });

  it('should render success state', () => {
    checkoutServiceMock.getDataCheckout.and.returnValue(
      createResourceMock({
        value: {
          id: 'order-123',
          createdAt: new Date(),
          status: 'PAID',
          amount: 10000,
          paymentProviderId: 'stripe_123',
          items: [],
        },
      })
    );

    const fixture = TestBed.createComponent(CheckoutSuccessPage);
    fixture.detectChanges();

    const el: HTMLElement = fixture.nativeElement;

    expect(el.querySelector('component-header-confirmation')).toBeTruthy();
    expect(el.querySelector('component-main-card')).toBeTruthy();
    expect(el.querySelector('component-actions-buttons')).toBeTruthy();
  });
});
