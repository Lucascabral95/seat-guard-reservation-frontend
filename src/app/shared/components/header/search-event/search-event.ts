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
import { EventsService } from '../../../../features/events/service/events.service';
import { FiltersEventsInterface } from '../../../../features/events/interfaces';
import SearchEventsComponent from '../list-categories/search-event/search-events-component/search-events-component';

@Component({
  selector: 'header-search-event',
  standalone: true,
  imports: [CommonModule, SearchEventsComponent],
  templateUrl: './search-event.html',
  styleUrl: './search-event.scss',
})
export default class SearchEvent {
  private eventsService = inject(EventsService);
  // Inyectamos ElementRef para saber si el clic fue dentro de ESTE componente
  private elementRef = inject(ElementRef);

  searchText = signal('');
  searchLocation = signal('');
  visible = signal(false);

  // Computed optimizado (Lógica de negocio pura)
  filters = computed<FiltersEventsInterface | undefined>(() => {
    const name = this.searchText().trim();
    const location = this.searchLocation().trim();

    // Regla: Al menos 2 caracteres en alguno de los inputs
    const hasMinLength = name.length >= 2 || location.length >= 2;

    if (!hasMinLength) {
      return undefined;
    }

    const filtersPayload: FiltersEventsInterface = {};
    if (name.length >= 2) filtersPayload.name = name;
    if (location.length >= 2) filtersPayload.location = location;

    return filtersPayload;
  });

  // Resource conectado a la señal computada
  eventsResource = this.eventsService.getEventsByFilter(this.filters);

  // --- Handlers de Inputs ---
  onInput(value: string) {
    this.searchText.set(value);
    this.checkVisibility();
  }

  onLocationInput(value: string) {
    this.searchLocation.set(value);
    this.checkVisibility();
  }

  private checkVisibility() {
    this.visible.set(this.filters() !== undefined);
  }

  closeResults() {
    this.visible.set(false);
  }

  // --- Click Outside Logic ---

  @HostListener('document:click', ['$event'])
  onClickOutside(event: MouseEvent) {
    // Si el componente no está visible, no gastamos cpu calculando nada
    if (!this.visible()) return;

    const clickedInside = this.elementRef.nativeElement.contains(event.target);

    // Si el clic NO fue dentro de este componente, cerramos los resultados
    if (!clickedInside) {
      this.closeResults();
    }
  }
}
