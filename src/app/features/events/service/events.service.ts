import { HttpClient } from '@angular/common/http';
import { computed, inject, Injectable, signal } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from '../../../../environments/environment';
import { catchError, Observable, of, tap, throwError } from 'rxjs';
import { EventByIdInterface } from '../interfaces';
import { Events } from '../interfaces/get-event-by-id.interface';

const URL_BOOKING_SERVICE = environment.apiBookingServiceUrl

@Injectable({providedIn: 'root'})
export class EventsService {
  http = inject(HttpClient)
  router = inject(Router)

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

  getEvents() {
     this.isLoadingSignal.set(true)
     this.errorMessageSignal.set(null)

     this.http.get<Events[]>(`${URL_BOOKING_SERVICE}/api/v1/events`).pipe(
      tap(events => {
        this.isLoadingSignal.set(false)
        this.eventsSignal.set(events)
      }),
      catchError(error => {
        console.error("Error al obtener los eventos", error)
        this.errorMessageSignal.set("Error al obtener los eventos")
        this.isLoadingSignal.set(false)
        return throwError(() => error)
      })
     ).subscribe()
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

}
