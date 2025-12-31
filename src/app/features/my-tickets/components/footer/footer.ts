import { Component, Input, signal } from '@angular/core';

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
}
