import { Component, Input, signal } from '@angular/core';
import { environment } from '../../../../../environments/environment';

const API_BOOKING_SERVICE = environment.apiBookingServiceUrl;

@Component({
  selector: 'component-footer-my-tickets',
  imports: [],
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
})
export default class FooterComponentMyTickets {
    @Input({ required: true }) order!: any;
    @Input({ required: true }) isLoadingPdf = signal(false);
    @Input({ required: true }) pdfError = signal<string | null>(null);
    @Input({ required: true }) openTicket!: () => void;

    openLinkPDF() {
      if (!this.order.id) return;

      const url = `${API_BOOKING_SERVICE}/api/v1/tickets/${this.order.id}/download`;
      window.open(url, '_blank');
    }
}
