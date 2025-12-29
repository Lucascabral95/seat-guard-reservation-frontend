import 'zone.js';
import 'zone.js/testing';

import { TestBed } from '@angular/core/testing';
import { ActivatedRoute, provideRouter } from '@angular/router';
import { PLATFORM_ID } from '@angular/core';

import MyTicketApp from './my-ticket-app';
import { MyTicketsService } from '../../service/my-tickets.service';
import { CheckoutService } from '../../../checkout/service/checkout.service';
import { createResourceMock } from '../../../../shared/testing/testing-utils';

describe('MyTicketApp', () => {
  let myTicketsServiceMock: any;
  let checkoutServiceMock: any;

  const mockOrder = {
    id: 'order-1',
    eventName: 'Rock Festival',
    eventHour: '21:00',
    items: [{ eventHour: '21:00' }],
  };

  beforeEach(async () => {
    myTicketsServiceMock = {
      getMyTicketById: jasmine
        .createSpy()
        .and.returnValue(createResourceMock({ value: mockOrder })),
    };

    checkoutServiceMock = {
      getDataCustomerByOrderID: jasmine
        .createSpy()
        .and.returnValue(createResourceMock({ value: { name: 'John Doe' } })),
    };

    await TestBed.configureTestingModule({
      imports: [MyTicketApp],
      providers: [
        provideRouter([]),
        { provide: PLATFORM_ID, useValue: 'browser' },
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: {
              paramMap: {
                get: () => 'order-1',
              },
            },
          },
        },
        { provide: MyTicketsService, useValue: myTicketsServiceMock },
        { provide: CheckoutService, useValue: checkoutServiceMock },
      ],
    }).compileComponents();
  });

  function createComponent() {
    const fixture = TestBed.createComponent(MyTicketApp);
    fixture.detectChanges();
    return fixture;
  }

  it('should create the component', () => {
    const fixture = createComponent();
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should read id from route params', () => {
    const fixture = createComponent();
    expect(fixture.componentInstance.id()).toBe('order-1');
  });

  it('should call getMyTicketById', () => {
    createComponent();
    expect(myTicketsServiceMock.getMyTicketById).toHaveBeenCalled();
  });

  it('should set orderId when ticket is loaded', () => {
    const fixture = createComponent();
    const component = fixture.componentInstance;

    expect(component.orderId()).toBe('order-1');
  });

  it('should request customer data when orderId is available', () => {
    createComponent();
    expect(checkoutServiceMock.getDataCustomerByOrderID).toHaveBeenCalled();
  });
});
