import { Component, signal, computed, ChangeDetectionStrategy, inject, effect, PLATFORM_ID, input } from '@angular/core';
import { CurrencyPipe, isPlatformBrowser, CommonModule } from '@angular/common';
import { EventsService } from '../../../events/service/events.service';
import { Status } from '../../interfaces';
import { AuthLoginService } from '../../../../auth/login/service/auth-login-service';
import { CheckoutService } from '../../../checkout/service/checkout.service';
import { CreateSessionCheckoutStripeInterface, Currency } from '../../../checkout/interfaces/stripe';
import { HttpErrorResponse } from '@angular/common/http';
import Toasts from '../../../../shared/components/toasts/toasts';
import { Router } from '@angular/router';

const TIME_VISIBLE_TOAST = 1800;

@Component({
  selector: 'all-seats-pages',
  standalone: true,
  imports: [CurrencyPipe, CommonModule, Toasts],
  templateUrl: './all-seats-pages.html',
  styleUrl: './all-seats-pages.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export default class AllSeatsPages {
  id = input.required<string>();
  private eventsService = inject(EventsService);
  private authService = inject(AuthLoginService)
  private router = inject(Router)
  private platformId = inject(PLATFORM_ID);
  isBrowser = isPlatformBrowser(this.platformId);

  eventByIdResource = this.eventsService.getEventByIdResource(this.id);
  selectedSeatIds = signal<Set<string>>(new Set());

  checkoutService = inject(CheckoutService)
  isLoadingReservation = signal<boolean>(false)
  messageError = signal<string | null>(null)
  toastType = signal<'error' | 'success'>('error');
  visibleToast = signal<boolean>(false)

  displaySeats = computed(() => {
    const event = this.eventByIdResource.value();
    if (!event || !event.seats) return [];

    const selectedIds = this.selectedSeatIds();

    const sortedSeats = [...event.seats].sort((a, b) =>
      parseInt(a.number) - parseInt(b.number)
    );

    return sortedSeats.map(seat => {
  let visualStatus: 'available' | 'selected' | 'sold' | 'locked' = 'available';

  if (seat.status === Status.Sold) {
    visualStatus = 'sold';
  } else if ((seat.status as any) === Status.Locked) {
    visualStatus = 'locked';
  } else if (selectedIds.has(seat.id)) {
    visualStatus = 'selected';
  }

  return {
    ...seat,
    visualStatus
  };
});
  });

  selectedSeatsList = computed(() => {
    const allSeats = this.eventByIdResource.value()?.seats || [];
    const selectedIds = this.selectedSeatIds(); return allSeats.filter(s => selectedIds.has(s.id));
  });

  selectedSeatsCount = computed(() => this.selectedSeatIds().size);

  totalPrice = computed(() => {
    return this.selectedSeatsList().reduce((total, seat) => total + seat.price, 0);
  });

  constructor() {
    effect(() => {
      if (this.isBrowser) {
        if (this.eventByIdResource.error()) {
          console.error('Error cargando evento:', this.eventByIdResource.error());
        }
        if (this.selectedSeatIds().size > 0) {
           console.log('IDs seleccionados:', [...this.selectedSeatIds()]);
        }
      }
    });
  }

  toggleSeat(id: string, currentStatus: Status) {
    if (currentStatus === Status.Sold || (currentStatus as any) === Status.Locked) return;

     this.messageError.set(null)

    this.selectedSeatIds.update(prevSet => {
      const newSet = new Set(prevSet);
      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        newSet.add(id);
      }
      return newSet;
    });
  }

  getData() {
    const userId = this.authService.getToken();
    const selectedIds = [...this.selectedSeatIds()];

    this.isLoadingReservation.set(true)
    this.messageError.set(null)
    this.visibleToast.set(false)

    if (selectedIds.length === 0) {
      console.warn("No hay asientos seleccionados");
      return;
    }

    const data: CreateSessionCheckoutStripeInterface = {
      userId: userId!,
      currency: Currency.usd,
      items: selectedIds.map(seatId => ({
        seatIds: {
          id: seatId
        }
      }))
    }

    this.checkoutService.createSessionStripe(data).subscribe({
  next: (res) => {
    this.isLoadingReservation.set(false);
    this.router.navigate(['/dentro/checkout', res.dataCheckout?.orderBookingId], {
      queryParams: {
        stripe: res.url
      }
    })
  },
  error: (err: HttpErrorResponse) => {
    this.visibleToast.set(true)
    setTimeout(() => {
      this.visibleToast.set(false)
    }, TIME_VISIBLE_TOAST);
    this.isLoadingReservation.set(false);
    this.messageError.set('Error al procesar el pago');
    console.error('Error en checkout:', err);
    throw err
  }
});
  }
}
