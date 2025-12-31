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
  searchLocation = signal('');
  visible = signal(false);

  filters = computed<FiltersEventsInterface | undefined>(() => {
    const nameValue = this.searchText().trim();
    const locationValue = this.searchLocation().trim();

    if (nameValue.length < 2 && locationValue.length < 2) {
      return undefined;
    }

    const filters: FiltersEventsInterface = {};
    if (nameValue.length >= 2) filters.name = nameValue;
    if (locationValue.length >= 2) filters.location = locationValue;

    return filters;
  });

  eventsResource = this.eventsService.getEventsByFilter(() => this.filters());

  onInput(value: string) {
    this.searchText.set(value);
    this.updateVisibility();
  }

  onLocationInput(value: string) {
    this.searchLocation.set(value);
    this.updateVisibility();
  }

  private updateVisibility() {
    const hasName = this.searchText().trim().length >= 2;
    const hasLocation = this.searchLocation().trim().length >= 2;
    this.visible.set(hasName || hasLocation);
  }

  closeResults() {
    this.visible.set(false);
  }

  @HostListener('document:click')
  onClickOutside() {
    this.closeResults();
  }
}
