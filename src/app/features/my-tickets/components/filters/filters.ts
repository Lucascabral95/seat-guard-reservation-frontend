import { Component, Input, Output, Signal, EventEmitter } from '@angular/core';
import { BuyStatus } from '../../interfaces';

@Component({
  selector: 'component-filters-my-tickets',
  imports: [],
  templateUrl: './filters.html',
  styleUrl: './filters.scss',
})
export default class FiltersMyTickets {
   BuyStatus = BuyStatus;

  @Input({ required: true }) selectedStatus!: Signal<BuyStatus | 'all'>;
  @Output() filterChange = new EventEmitter<BuyStatus | 'all'>();

  setFilter(status: BuyStatus | 'all') {
    this.filterChange.emit(status);
  }
}
