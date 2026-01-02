import { Component, EventEmitter, inject, Input, Output, signal } from '@angular/core';
import { Router, RouterLink } from "@angular/router";
import { environment } from '../../../../../../environments/environment';

const URL_BOOKING_SERVICE = environment.apiBookingServiceUrl;

@Component({
  selector: 'component-actions-buttons',
  imports: [RouterLink],
  templateUrl: './component-actions-buttons.html',
  styleUrl: './component-actions-buttons.scss',
})
export default class ComponentActionsButtons {
     @Input({ required: true }) order_id!: string;
     @Input({ required: true }) isLoadingPdf = signal<boolean>(false);
     @Output() viewTicket = new EventEmitter<void>();
     router = inject(Router)

     viewPDF() {
       if (!this.order_id) return;
       const externalUrl = `${URL_BOOKING_SERVICE}/api/v1/tickets/${this.order_id}/download`;

       window.open(externalUrl, '_blank');
     }
}
