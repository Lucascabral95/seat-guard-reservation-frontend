import { Component, inject, OnInit } from '@angular/core';
import MainCardCancel from '../../components/main-card-cancel/main-card-cancel';
import { SeoService } from '../../../../core/services/seo.service';

@Component({
  selector: 'app-checkout-error-page',
  imports: [MainCardCancel],
  templateUrl: './checkout-error-page.html',
  styleUrl: './checkout-error-page.scss',
})
export default class CheckoutErrorPage implements OnInit {
private seo = inject(SeoService);

  ngOnInit(): void {
    this.seo.setPageMeta({
      title: 'Error en el Pago',
      description: 'Ha ocurrido un error al procesar tu pago',
      noIndex: true,
    });
  }
}
