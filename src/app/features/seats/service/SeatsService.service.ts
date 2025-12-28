import { inject, Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { Router } from '@angular/router';
import { httpResource } from '@angular/common/http';
import { GetSeatByIDInterface } from '../interfaces';

const URL_BOOKING_SERVICE = environment.apiBookingServiceUrl;

@Injectable({providedIn: 'root'})
export class SeatsService {
    router = inject(Router)

      getSeatById(id: string) {
        return httpResource<GetSeatByIDInterface>(() => {
      const url = `${URL_BOOKING_SERVICE}/api/v1/seats/${id}`;

          return {
            url,
            method: "GET"
          }
      }, {
        defaultValue: undefined,
      })
    }
}
