import { Component, effect, inject, OnInit, PLATFORM_ID, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MyTicketsService } from '../../service/my-tickets.service';
import { isPlatformBrowser } from '@angular/common';
import { CommonModule } from '@angular/common';
import MyTicketsError from '../../components/error/error';
import MyTicketLoading from '../../components/loading/my-ticket-loading/my-ticket-loading';
import OrderCardMyTicket from '../../components/cards/order-card-my-ticket/order-card-my-ticket';
import SeatsMyTicket from '../../components/seats/seats';
import { CheckoutService } from '../../../checkout/service/checkout.service';
import DataCustomerComponent from '../../components/data-customer-component/data-customer-component';
import { PdfService } from '../../service/pdf.service';
import { openPdf } from '../../../../shared/utils/open-pdf.utils';
import FooterComponentMyTickets from '../../components/footer/footer';

@Component({
  selector: 'app-my-ticket-app',
  imports: [
    CommonModule,
    MyTicketsError,
    MyTicketLoading,
    OrderCardMyTicket,
    SeatsMyTicket,
    DataCustomerComponent,
    FooterComponentMyTickets,
  ],
  templateUrl: './my-ticket-app.html',
  styleUrl: './my-ticket-app.scss',
})
export default class MyTicketApp implements OnInit {
  private route = inject(ActivatedRoute);
  private platformId = inject(PLATFORM_ID);
  private isBrowser = isPlatformBrowser(this.platformId);

  private myTicketService = inject(MyTicketsService);
  private checkoutService = inject(CheckoutService);
  private pdfService = inject(PdfService);

  id = signal<string | null>(null);
  orderId = signal<string | null>(null);

  isLoadingPdf = signal(false);
  isDownloadingPdf = signal(false);
  pdfError = signal<string | null>(null);

  ngOnInit() {
    if (this.isBrowser) {
      this.id.set(this.route.snapshot.paramMap.get('id'));
    }
  }

  myTicketById = this.myTicketService.getMyTicketById(
    () => this.id()!
  );

  constructor() {
    effect(() => {
      const order = this.myTicketById.value();
      if (order?.id) {
        this.orderId.set(order.id);
      }
    });
  }

  dataCustomerResource = this.checkoutService.getDataCustomerByOrderID(
    () => this.orderId()!
  );

openTicket() {
  openPdf({
    orderId: this.orderId(),
    download$: (id) => this.pdfService.downloadTicket(id),
    setLoading: this.isLoadingPdf,
    setError: this.pdfError
  });
}
}
