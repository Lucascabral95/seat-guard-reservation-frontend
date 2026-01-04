import { HttpClient, HttpParams, httpResource } from '@angular/common/http';
import { computed, inject, Injectable, PLATFORM_ID, Signal, signal } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from '../../../../environments/environment';
import { catchError, Observable, of, tap, throwError } from 'rxjs';
import { EventByIdInterface } from '../interfaces';
import { Events } from '../interfaces/get-event-by-id.interface';
import { FiltersEventsInterface } from '../interfaces/filter-events.interface';
import { isPlatformBrowser } from '@angular/common';

const URL_BOOKING_SERVICE = environment.apiBookingServiceUrl

@Injectable({providedIn: 'root'})
export class EventsService {
  http = inject(HttpClient)
  router = inject(Router)
  private platformId = inject(PLATFORM_ID);
  isBrowser = isPlatformBrowser(this.platformId);

  // Privates signals
  private eventsSignal = signal<Events[]>([])
  private selectedEventSignal = signal<EventByIdInterface | null>(null)

  private isLoadingSignal = signal<boolean>(false)
  private errorMessageSignal = signal<string | null>(null)

  readonly events = this.eventsSignal.asReadonly()
  readonly selectedEvent = this.selectedEventSignal.asReadonly()

  readonly isLoading = this.isLoadingSignal.asReadonly()
  readonly errorMessage = this.errorMessageSignal.asReadonly()

  readonly activeEvents = computed(() =>
    this.events().filter(event => new Date(event.date) >= new Date())
  )

  readonly totalEvents = computed(() => this.eventsSignal().length)

  getEventsByFilter(filtersSignal: () => FiltersEventsInterface | undefined) {
  return httpResource<Events[]>(() => {

    if (!this.isBrowser) {
      return undefined;
    }

    const filters = filtersSignal();

    if (!filters || Object.keys(filters).length === 0) {
      return undefined;
    }

    let params = new HttpParams();
    if (filters.gender) params = params.set('gender', filters.gender);
    if (filters.name) params = params.set('name', filters.name);
    if (filters.location) params = params.set('location', filters.location);

    return {
      url: `${URL_BOOKING_SERVICE}/api/v1/events`,
      method: 'GET',
      params,
    };

  }, {
    defaultValue: [],
  });
}

getEvents(limit?: number) {
  return httpResource<Events[]>(() => {

    if (!this.isBrowser) {
      return undefined;
    }

    return {
      url: `${URL_BOOKING_SERVICE}/api/v1/events`,
      method: 'GET'
    };

  }, {
    defaultValue: [],
    parse: (response: any) => {
      if (!Array.isArray(response)) return [];

      const data = response as Events[];
      return limit ? data.slice(0, limit) : data;
    }
  });
}

  getEventById(id: string): Observable<EventByIdInterface> {
   const cachedEvent = this.eventsSignal().find(event => event.id === id)

   if (cachedEvent) {
      this.selectedEventSignal.set(cachedEvent as EventByIdInterface)
      return of(cachedEvent as EventByIdInterface)
   }

   this.isLoadingSignal.set(true)
    this.errorMessageSignal.set(null)

    return this.http.get<EventByIdInterface>(`${URL_BOOKING_SERVICE}/api/v1/events/${id}`).pipe(
      tap(event => {
        this.selectedEventSignal.set(event)
        this.isLoadingSignal.set(false)
      }),
      catchError(error => {
        console.error("Error al obtener el evento por ID", error)
        this.errorMessageSignal.set("Error al obtener el evento")
        this.isLoadingSignal.set(false)
        return throwError(() => error)
      })
    )
  }

  getEventByIdResource(idSignal: Signal<string>) {
    return httpResource<EventByIdInterface>(() => {
       const url = `${URL_BOOKING_SERVICE}/api/v1/events/${idSignal()}`

      return {
     url,
      method: "GET"
      }
    }, {
      defaultValue: undefined,
    })
  }

  getEventByIdNew(idSignal: Signal<string>) {
    return httpResource<EventByIdInterface>(() => {
       const id = idSignal()

      return {
      url: `${URL_BOOKING_SERVICE}/api/v1/events/${id}`,
      method: 'GET'
    };
    }, {
      defaultValue: undefined
    })
  }
}
