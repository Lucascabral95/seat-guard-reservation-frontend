import { Component, computed, HostListener, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import SearchEventsComponent from '../list-categories/search-event/search-events-component/search-events-component';
import { EventsService } from '../../../../features/events/service/events.service';
import { FiltersEventsInterface } from '../../../../features/events/interfaces';

@Component({
  selector: 'header-search-event',
  standalone: true,
  imports: [CommonModule, SearchEventsComponent],
  templateUrl: './search-event.html',
  styleUrl: './search-event.scss',
})
export default class SearchEvent {
  private eventsService = inject(EventsService);

  searchText = signal('');
  visible = signal(false);

  filters = computed<FiltersEventsInterface | undefined>(() => {
    const value = this.searchText().trim();
    if (value.length < 2) return undefined;
    return { name: value };
  });

  eventsResource = this.eventsService.getEventsByFilter(() => this.filters());

  onInput(value: string) {
    this.searchText.set(value);
    this.visible.set(value.trim().length >= 2);
  }

  closeResults() {
    this.visible.set(false);
  }

  @HostListener('document:click')
  onClickOutside() {
    this.closeResults();
  }
}
