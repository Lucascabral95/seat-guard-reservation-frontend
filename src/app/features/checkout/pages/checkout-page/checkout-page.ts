import {
  Component,
  signal,
  computed,
  inject,
  OnDestroy,
  OnInit,
  PLATFORM_ID,
} from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { CheckoutService } from '../../service/checkout.service';
import SendMethod from '../../components/checkout-page-components/send-method/send-method';
  import DataCustomer from '../../components/checkout-page-components/data-customer/data-customer';

@Component({
  selector: 'app-checkout-page',
  standalone: true,
  imports: [
    CommonModule,
    SendMethod,
    DataCustomer,
  ],
  templateUrl: './checkout-page.html',
})
export default class CheckoutPage implements OnInit, OnDestroy {
  private platformId = inject(PLATFORM_ID);
  private isBrowser = isPlatformBrowser(this.platformId);

  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private checkoutService = inject(CheckoutService);

  urlStripe = signal<string | null>(null);
  isLoading = signal(false);

  termsAccepted = signal(false);

  checkoutResoursByID = this.checkoutService.getDataCheckout(
    this.route.snapshot.paramMap.get('id')
  );

  checkoutResoursByIDSignal = computed(() => {
  const value = this.checkoutResoursByID.value();
  return value ?? null;
});

  timeLeft = signal(15 * 60);
  private timerInterval: any;

  formattedTime = computed(() => {
    const minutes = Math.floor(this.timeLeft() / 60);
    const seconds = this.timeLeft() % 60;
    return `${minutes.toString().padStart(2, '0')}:${seconds
      .toString()
      .padStart(2, '0')}`;
  });

  constructor() {
    if (!this.isBrowser) return;

    const stripeParam = this.route.snapshot.queryParamMap.get('stripe');
    if (stripeParam) {
      this.urlStripe.set(decodeURIComponent(stripeParam));
    }
  }

  ngOnInit() {
    this.startTimer();
  }

  ngOnDestroy() {
    if (this.timerInterval) clearInterval(this.timerInterval);
  }

  private startTimer() {
    this.timerInterval = setInterval(() => {
      this.timeLeft.update((t) => {
        if (t <= 1) {
          clearInterval(this.timerInterval);
          this.handleTimeout();
          return 0;
        }
        return t - 1;
      });
    }, 1000);
  }

  private handleTimeout() {
    alert('¡El tiempo de reserva ha expirado!');
    this.router.navigate(['/']);
  }

  processPayment() {
    if (!this.termsAccepted()) {
      alert('Debes aceptar los términos y condiciones');
      return;
    }

    if (!this.urlStripe()) {
      console.error('No hay URL de Stripe disponible');
      return;
    }

    this.isLoading.set(true);
    window.location.href = this.urlStripe()!;
  }
}
