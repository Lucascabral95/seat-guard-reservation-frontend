import { Component, signal, computed, inject, OnDestroy, OnInit, PLATFORM_ID } from '@angular/core';
import { CommonModule, CurrencyPipe, DatePipe, isPlatformBrowser } from '@angular/common';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { CheckoutService } from '../../service/checkout.service';

@Component({
  selector: 'app-checkout-page',
  standalone: true,
  imports: [CommonModule, CurrencyPipe, DatePipe, ReactiveFormsModule, RouterLink],
  templateUrl: './checkout-page.html',
})
export default class CheckoutPage implements OnInit, OnDestroy {
  private platformId = inject(PLATFORM_ID)
  private isBrowser = isPlatformBrowser(this.platformId)
  private fb = inject(FormBuilder);
  private router = inject(Router);
  urlStripe = signal<string | null>(null);
  private route = inject(ActivatedRoute)
  checkoutService = inject(CheckoutService)
  checkoutResoursByID = this.checkoutService.getDataCheckout(this.route.snapshot.paramMap.get("id"))
  subtotalTotal = this.checkoutResoursByID.value()?.amount! / 100

   constructor() {
      if (!this.isBrowser) return;

     const id = this.route.snapshot.paramMap.get('id');
     const stripeParam = this.route.snapshot.queryParamMap.get('stripe');
     if (stripeParam) {
       this.urlStripe.set(decodeURIComponent(stripeParam));
      }

     console.log('ID:', id);
    }
///////
///////
///////
///////
  isLoading = signal(false);

  timeLeft = signal(15 * 60);
  timerInterval: any;

  formattedTime = computed(() => {
    const minutes = Math.floor(this.timeLeft() / 60);
    const seconds = this.timeLeft() % 60;
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  });

  checkoutForm = this.fb.group({
    firstName: ['', [Validators.required, Validators.minLength(2)]],
    lastName: ['', [Validators.required, Validators.minLength(2)]],
    email: ['', [Validators.required, Validators.email]],
    confirmEmail: ['', [Validators.required, Validators.email]],
    termsAccepted: [false, Validators.requiredTrue]
  });

  ngOnInit() {
    this.startTimer();
  }

  ngOnDestroy() {
    if (this.timerInterval) clearInterval(this.timerInterval);
  }

  startTimer() {
    this.timerInterval = setInterval(() => {
      this.timeLeft.update(t => {
        if (t <= 1) {
          clearInterval(this.timerInterval);
          this.handleTimeout();
          return 0;
        }
        return t - 1;
      });
    }, 1000);
  }

  handleTimeout() {
    alert('¡El tiempo de reserva ha expirado!');
    this.router.navigate(['/']);
  }

  async processPayment() {
  if (this.checkoutForm.invalid) {
    this.checkoutForm.markAllAsTouched();
    return;
  }

  if (!this.urlStripe()) {
    console.error('No hay URL de Stripe disponible');
    return;
  }

  this.isLoading.set(true);

  console.log('Redirigiendo a Stripe...', this.urlStripe());
  window.location.href = this.urlStripe()!;
}
}
