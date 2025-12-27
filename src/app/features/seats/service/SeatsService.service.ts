import { inject, Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { Router } from '@angular/router';
import { httpResource } from '@angular/common/http';
import { GetSeatByIDInterface, GetSeatsInterface } from '../interfaces';
import { tap } from 'rxjs';

const URL_BOOKING_SERVICE = environment.apiBookingServiceUrl;

@Injectable({providedIn: 'root'})
export class SeatsService {
    router = inject(Router)

    // getSeats() {
    //   return httpResource<GetSeatsInterface[]>(() => {
    //        return {
    //         url: `${URL_BOOKING_SERVICE}/api/v1/seats`,
    //         method: "GET"
    //       }
    //     }, {
    //       defaultValue: []
    //     })
    //   }

      getSeatById(id: string) {
        return httpResource<GetSeatByIDInterface>(() => {
      const url = `${URL_BOOKING_SERVICE}/api/v1/seats/${id}`;
          console.log('[getSeatById] GET', { id, url });

          return {
            url,
            method: "GET"
          }
      }, {
        defaultValue: undefined,
      })
    }
}
