import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Component, inject, PLATFORM_ID } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CheckoutService } from '../../service/checkout.service';
import LoadingSuccessPage from '../../components/loading/loading-success-page/loading-success-page';
import ComponentErrorSuccess from '../../components/errors/component-error-success/component-error-success';
import MainCard from '../../components/main-card/main-card';
import ComponentActionsButtons from '../../components/actions-buttons/component-actions-buttons/component-actions-buttons';
import HeaderConfirmation from '../../components/header-confirmation/header-confirmation';

@Component({
  selector: 'app-checkout-success-page',
  standalone: true,
  imports: [CommonModule, LoadingSuccessPage, ComponentErrorSuccess, MainCard, ComponentActionsButtons, HeaderConfirmation],
  templateUrl: './checkout-success-page.html',
  styles: ``
})
export default class CheckoutSuccessPage {
    private platformId = inject(PLATFORM_ID);
    private isBrowser = isPlatformBrowser(this.platformId);
    private serviceCheckout = inject(CheckoutService);
    private route = inject(ActivatedRoute);

    order_id = this.route.snapshot.queryParamMap.get('order_id');

    checkoutSuccessOrderBookingResource = this.serviceCheckout.getDataCheckout(this.order_id);

    constructor() {
        if (this.isBrowser) {
           console.log(`Procesando orden: ${this.order_id}`);
        }
    }
}
