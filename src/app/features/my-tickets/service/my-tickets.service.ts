import { inject, Injectable } from '@angular/core';
import { httpResource } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { GetMyTicketsInterface } from '../interfaces';
import { AuthLoginService } from '../../../auth/login/service/auth-login-service';
import { GetMyTicketByIDInterface } from '../interfaces/get-my-ticket-by-id.interface';

const API_BASE_URL = environment.apiBookingServiceUrl;

@Injectable({providedIn: 'root'})
export class MyTicketsService {
   private authService = inject(AuthLoginService)

   getMyTickets() {
    return httpResource<GetMyTicketsInterface[]>(() => {
      const myUserID = this.authService.getPayloadJWT()?.id;

      if (!myUserID) {
        return undefined;
      }

      return {
        url: `${API_BASE_URL}/api/v1/booking-orders/user/${myUserID}`,
        method: 'GET',
      };
    }, {
      defaultValue: [],
    });
  }

  getMyTicketById(id: () => string | null) {
  return httpResource<GetMyTicketByIDInterface | undefined>(() => {
    const ticketId = id();
    const myUserID = this.authService.getPayloadJWT()?.id;

    if (!ticketId || !myUserID) {
      return undefined;
    }

    return {
      url: `${API_BASE_URL}/api/v1/booking-orders/${ticketId}`,
      method: 'GET',
    };
  });
}
}
