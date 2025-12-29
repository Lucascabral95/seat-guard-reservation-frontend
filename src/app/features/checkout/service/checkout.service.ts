import { inject, Injectable, PLATFORM_ID } from '@angular/core';
import { CreateSessionCheckoutStripeInterface, ResponseCreateSessionCheckoutInterface } from '../interfaces/stripe';
import { environment } from '../../../../environments/environment';
import { HttpClient, httpResource } from '@angular/common/http';
import { GetOrderBookingByIDInterface } from '../interfaces/orders-booking';
import { CreateCheckoutCustomerInterface } from '../interfaces/checkout';
import { isPlatformBrowser } from '@angular/common';

const URL_BOOKING_SERVICE = environment.apiBookingServiceUrl

@Injectable({providedIn: 'root'})
export class CheckoutService {
  http = inject(HttpClient)
  platformId = inject(PLATFORM_ID)
  isBrowser = isPlatformBrowser(this.platformId)

   createSessionStripe(payload: CreateSessionCheckoutStripeInterface) {
       const url = `${URL_BOOKING_SERVICE}/api/v1/stripe/create/checkout/session`;
      return this.http.post<ResponseCreateSessionCheckoutInterface>(url, payload)
  }

  getDataCheckout(id: string | null) {
    return httpResource<GetOrderBookingByIDInterface>(() => {
       const url = `${URL_BOOKING_SERVICE}/api/v1/booking-orders/${id}`

       if (!this.isBrowser) return;

      return {
      url,
      method: "GET"
      }
    }, {
      defaultValue: undefined,
    })
  }

  createCheckoutCustomer(payload: CreateCheckoutCustomerInterface) {
    const url = `${URL_BOOKING_SERVICE}/api/v1/checkouts`;
    return this.http.post(url, payload)
  }

  getDataCustomerByOrderID(orderId: () => string | null) {
  return httpResource<CreateCheckoutCustomerInterface>(() => {
    const id = orderId();
    if (!id || !this.isBrowser) return;

    return {
      url: `${URL_BOOKING_SERVICE}/api/v1/checkouts/${id}`,
      method: 'GET',
    };
  }, {
    defaultValue: undefined,
  });
}

}
