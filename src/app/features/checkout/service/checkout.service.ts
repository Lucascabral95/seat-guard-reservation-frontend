import { inject, Injectable } from '@angular/core';
import { CreateSessionCheckoutStripeInterface, ResponseCreateSessionCheckoutInterface } from '../interfaces/stripe';
import { environment } from '../../../../environments/environment';
import { HttpClient, httpResource } from '@angular/common/http';
import { GetOrderBookingByIDInterface } from '../interfaces/orders-booking';

const URL_BOOKING_SERVICE = environment.apiBookingServiceUrl

@Injectable({providedIn: 'root'})
export class CheckoutService {
  http = inject(HttpClient)

   createSessionStripe(payload: CreateSessionCheckoutStripeInterface) {
       const url = `${URL_BOOKING_SERVICE}/api/v1/stripe/create/checkout/session`;
      return this.http.post<ResponseCreateSessionCheckoutInterface>(url, payload)
  }

  getDataCheckout(id: string | null) {
    return httpResource<GetOrderBookingByIDInterface>(() => {
       const url = `${URL_BOOKING_SERVICE}/api/v1/booking-orders/${id}`

      return {
      url,
      method: "GET"
      }
    }, {
      defaultValue: undefined,
    })
  }
}
