import { Component, inject, OnInit, PLATFORM_ID, signal } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { MyTicketsService } from '../../service/my-tickets.service';
import { isPlatformBrowser } from '@angular/common';
import { CommonModule } from '@angular/common';
import MyTicketsError from '../../components/error/error';
import MyTicketLoading from '../../components/loading/my-ticket-loading/my-ticket-loading';
import OrderCardMyTicket from '../../components/cards/order-card-my-ticket/order-card-my-ticket';
import SeatsMyTicket from '../../components/seats/seats';

@Component({
  selector: 'app-my-ticket-app',
  imports: [CommonModule, MyTicketsError, RouterLink, MyTicketLoading, OrderCardMyTicket, SeatsMyTicket],
  templateUrl: './my-ticket-app.html',
  styleUrl: './my-ticket-app.scss',
})
export default class MyTicketApp implements OnInit {
  private route = inject(ActivatedRoute);
  private platformId = inject(PLATFORM_ID);
  private isBrowser = isPlatformBrowser(this.platformId);

  private myTicketService = inject(MyTicketsService);

  id = signal<string | null>(null);

  ngOnInit() {
    if (this.isBrowser) {
      this.id.set(this.route.snapshot.paramMap.get('id'));
    }
  }

  myTicketById = this.myTicketService.getMyTicketById(
    () => this.id()!
  );
}
