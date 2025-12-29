import 'zone.js';
import 'zone.js/testing';

import { TestBed } from '@angular/core/testing';
import { PLATFORM_ID } from '@angular/core';
import { provideRouter } from '@angular/router';
import AllSeatsPages from './all-seats-pages';

import { EventsService } from '../../../events/service/events.service';
import { CheckoutService } from '../../../checkout/service/checkout.service';
import { AuthLoginService } from '../../../../auth/login/service/auth-login-service';

import { Status } from '../../interfaces';
import { createResourceMock } from '../../../../shared/testing/testing-utils';
import { of, throwError } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';

describe('AllSeatsPages', () => {
  let eventsServiceMock: any;
  let checkoutServiceMock: any;
  let authServiceMock: any;

  const mockEvent = {
    id: 'event-1',
    name: 'Rock Festival',
    seats: [
      {
        id: 'seat-1',
        number: '1',
        price: 1000,
        section: 'A',
        status: Status.Available,
      },
      {
        id: 'seat-2',
        number: '2',
        price: 2000,
        section: 'A',
        status: Status.Sold,
      },
    ],
  };

  beforeEach(async () => {
    eventsServiceMock = {
      getEventByIdResource: jasmine
        .createSpy()
        .and.returnValue(createResourceMock({ value: mockEvent })),
    };

    checkoutServiceMock = {
      createSessionStripe: jasmine.createSpy().and.returnValue(
        of({
          url: 'https://stripe.com/session',
          dataCheckout: { orderBookingId: 'order-1' },
        })
      ),
    };

    authServiceMock = {
      getPayloadJWT: jasmine.createSpy().and.returnValue({ id: 'user-1' }),
    };

    await TestBed.configureTestingModule({
      imports: [AllSeatsPages],
      providers: [
        provideRouter([]),
        { provide: PLATFORM_ID, useValue: 'browser' },
        { provide: EventsService, useValue: eventsServiceMock },
        { provide: CheckoutService, useValue: checkoutServiceMock },
        { provide: AuthLoginService, useValue: authServiceMock },
      ],
    }).compileComponents();
  });

  function createComponent() {
    const fixture = TestBed.createComponent(AllSeatsPages);
    fixture.componentRef.setInput('id', 'event-1');
    fixture.detectChanges();
    return fixture;
  }

  it('should create the component', () => {
    const fixture = createComponent();
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should render seats when event loads', () => {
    const fixture = createComponent();
    const el: HTMLElement = fixture.nativeElement;

    expect(el.textContent).toContain('1');
    expect(el.textContent).toContain('2');
  });

  it('should select and unselect seat when clicking', () => {
    const fixture = createComponent();
    const component = fixture.componentInstance;

    component.toggleSeat('seat-1', Status.Available);
    expect(component.selectedSeatsCount()).toBe(1);

    component.toggleSeat('seat-1', Status.Available);
    expect(component.selectedSeatsCount()).toBe(0);
  });

  it('should not allow selecting sold seat', () => {
    const fixture = createComponent();
    const component = fixture.componentInstance;

    component.toggleSeat('seat-2', Status.Sold);
    expect(component.selectedSeatsCount()).toBe(0);
  });

  it('should calculate total price correctly', () => {
    const fixture = createComponent();
    const component = fixture.componentInstance;

    component.toggleSeat('seat-1', Status.Available);
    expect(component.totalPrice()).toBe(1000);
  });

  it('should call checkout service when continuing', () => {
    const fixture = createComponent();
    const component = fixture.componentInstance;

    component.toggleSeat('seat-1', Status.Available);
    component.getData();

    expect(checkoutServiceMock.createSessionStripe).toHaveBeenCalled();
  });
});
