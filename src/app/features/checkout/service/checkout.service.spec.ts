import 'zone.js';
import 'zone.js/testing';

import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { PLATFORM_ID } from '@angular/core';
import { CheckoutService } from './checkout.service';

describe('CheckoutService', () => {
  let service: CheckoutService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        CheckoutService,
        { provide: PLATFORM_ID, useValue: 'browser' },
      ],
    });

    service = TestBed.inject(CheckoutService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should create the service', () => {
    expect(service).toBeTruthy();
  });

  it('should POST createSessionStripe', () => {
    const payload: any = { userId: '1', currency: 'USD', items: [] };

    service.createSessionStripe(payload).subscribe();

    const req = httpMock.expectOne(req =>
      req.method === 'POST' &&
      req.url.includes('/stripe/create/checkout/session')
    );

    expect(req.request.method).toBe('POST');
    expect(req.request.body).toEqual(payload);

    req.flush({});
  });

  it('should POST createCheckoutCustomer', () => {
    const payload: any = { orderId: 'order-1' };

    service.createCheckoutCustomer(payload).subscribe();

    const req = httpMock.expectOne(req =>
      req.method === 'POST' &&
      req.url.includes('/checkouts')
    );

    // ✅ EXPECTACIÓN QUE FALTABA
    expect(req.request.method).toBe('POST');
    expect(req.request.body).toEqual(payload);

    req.flush({});
  });
});
