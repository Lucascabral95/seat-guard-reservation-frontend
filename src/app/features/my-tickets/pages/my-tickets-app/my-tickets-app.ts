import { CommonModule } from '@angular/common';
import { Component, computed, inject, signal } from '@angular/core';
import { MyTicketsService } from '../../service/my-tickets.service';
import MyTicketsError from '../../components/error/error';
import EmptyMyTickets from '../../components/empty/empty';
import ListMyTickets from '../../components/list/list';
import LoadingMyTickets from '../../components/loading/loading';
import HeaderMyTickets from '../../components/header/header';
import { BuyStatus } from '../../interfaces';
import { ActivatedRoute, Router } from '@angular/router';
import FiltersMyTickets from '../../components/filters/filters';

@Component({
  selector: 'app-my-tickets-app',
  imports: [
    CommonModule,
    MyTicketsError,
    EmptyMyTickets,
    ListMyTickets,
    LoadingMyTickets,
    HeaderMyTickets,
    FiltersMyTickets,
  ],
  templateUrl: './my-tickets-app.html',
})
export default class MyTicketsApp {
  private router = inject(Router);
  private route = inject(ActivatedRoute);
  private myTicketsService = inject(MyTicketsService);

  BuyStatus = BuyStatus;

  myTicketsResource = this.myTicketsService.getMyTickets();

  selectedStatus = signal<BuyStatus | 'all'>('all');

  constructor() {
    this.route.queryParamMap.subscribe(params => {
      const status = params.get('status');

      if (
        status === BuyStatus.PENDING ||
        status === BuyStatus.COMPLETED ||
        status === BuyStatus.FAILED
      ) {
        this.selectedStatus.set(status);
      } else {
        this.selectedStatus.set('all');
      }
    });
  }

  onFilterChange(status: BuyStatus | 'all') {
    this.selectedStatus.set(status);

    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: {
        status: status === 'all' ? null : status,
      },
      queryParamsHandling: 'merge',
    });
  }

  filteredTickets = computed(() => {
    const tickets = this.myTicketsResource.value();
    const status = this.selectedStatus();

    if (status === 'all') return tickets;

    return tickets.filter(t => t.status === status);
  });
}
