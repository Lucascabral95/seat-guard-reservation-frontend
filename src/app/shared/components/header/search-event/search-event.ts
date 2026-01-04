// import { Component, computed, HostListener, inject, signal } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import SearchEventsComponent from '../list-categories/search-event/search-events-component/search-events-component';
// import { EventsService } from '../../../../features/events/service/events.service';
// import { FiltersEventsInterface } from '../../../../features/events/interfaces';

// @Component({
//   selector: 'header-search-event',
//   standalone: true,
//   imports: [CommonModule, SearchEventsComponent],
//   templateUrl: './search-event.html',
//   styleUrl: './search-event.scss',
// })
// export default class SearchEvent {
//   private eventsService = inject(EventsService);

//   searchText = signal('');
//   searchLocation = signal('');
//   visible = signal(false);

//   filters = computed<FiltersEventsInterface | undefined>(() => {
//     const nameValue = this.searchText().trim();
//     const locationValue = this.searchLocation().trim();

//     if (nameValue.length < 2 && locationValue.length < 2) {
//       return undefined;
//     }

//     const filters: FiltersEventsInterface = {};
//     if (nameValue.length >= 2) filters.name = nameValue;
//     if (locationValue.length >= 2) filters.location = locationValue;

//     return filters;
//   });

//   eventsResource = this.eventsService.getEventsByFilter(() => this.filters());

//   onInput(value: string) {
//     this.searchText.set(value);
//     this.updateVisibility();
//   }

//   onLocationInput(value: string) {
//     this.searchLocation.set(value);
//     this.updateVisibility();
//   }

//   private updateVisibility() {
//     const hasName = this.searchText().trim().length >= 2;
//     const hasLocation = this.searchLocation().trim().length >= 2;
//     this.visible.set(hasName || hasLocation);
//   }

//   closeResults() {
//     this.visible.set(false);
//   }

//   @HostListener('document:click')
//   onClickOutside() {
//     this.closeResults();
//   }
// }

import { Component, computed, ElementRef, HostListener, inject, signal } from '@angular/core';
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
  private elementRef = inject(ElementRef);

  searchText = signal('');
  searchLocation = signal('');

  // Controlamos la visibilidad manualmente para evitar parpadeos
  visible = signal(false);

  // Lógica de filtrado estricta
  filters = computed<FiltersEventsInterface | undefined>(() => {
    const name = this.searchText().trim();
    const location = this.searchLocation().trim();

    // Condición estricta: Si no hay mínimo 2 caracteres, es UNDEFINED.
    if (name.length < 2 && location.length < 2) {
      return undefined;
    }

    // Construimos el objeto
    const payload: FiltersEventsInterface = {};
    if (name.length >= 2) payload.name = name;
    if (location.length >= 2) payload.location = location;

    return payload;
  });

  // El resource reacciona al computed
  eventsResource = this.eventsService.getEventsByFilter(this.filters);

  // --- Handlers ---

  onInput(value: string) {
    this.searchText.set(value);
    this.updateVisibility();
  }

  onLocationInput(value: string) {
    this.searchLocation.set(value);
    this.updateVisibility();
  }

  // Lógica centralizada de visibilidad
  private updateVisibility() {
    // Solo mostramos si hay filtros válidos
    const hasFilters = this.filters() !== undefined;
    this.visible.set(hasFilters);
  }

  closeResults() {
    this.visible.set(false);
  }

  // Click Outside
  @HostListener('document:click', ['$event'])
  onClickOutside(event: MouseEvent) {
    if (!this.visible()) return;
    const clickedInside = this.elementRef.nativeElement.contains(event.target);
    if (!clickedInside) {
      this.closeResults();
    }
  }
}
