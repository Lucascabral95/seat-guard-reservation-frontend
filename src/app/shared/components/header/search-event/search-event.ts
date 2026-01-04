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
  private elementRef = inject(ElementRef); // Necesario para detectar click inside

  searchText = signal('');
  searchLocation = signal('');
  visible = signal(false);

  // Lógica de negocio reactiva
  filters = computed<FiltersEventsInterface | undefined>(() => {
    const name = this.searchText().trim();
    const location = this.searchLocation().trim();

    // Si ambos están vacíos o muy cortos, retornamos undefined
    // Esto hace que el signal "filters" sea undefined y el servicio aborte.
    if (name.length < 2 && location.length < 2) {
      return undefined;
    }

    return {
      name: name.length >= 2 ? name : undefined,
      location: location.length >= 2 ? location : undefined
    };
  });

  // Pasamos la señal (sin ejecutarla aquí) al resource
  eventsResource = this.eventsService.getEventsByFilter(this.filters);

  // --- Handlers ---

  onInput(value: string) {
    this.searchText.set(value);
    this.checkVisibility();
  }

  onLocationInput(value: string) {
    this.searchLocation.set(value);
    this.checkVisibility();
  }

  private checkVisibility() {
    // Solo mostramos el dropdown si hay filtros válidos
    this.visible.set(this.filters() !== undefined);
  }

  closeResults() {
    this.visible.set(false);
  }

  // --- Click Outside (Funcionalidad Preservada) ---
  @HostListener('document:click', ['$event'])
  onClickOutside(event: MouseEvent) {
    // Si ya está cerrado, no hacemos nada
    if (!this.visible()) return;

    // Verificamos si el clic fue DENTRO del componente
    const clickedInside = this.elementRef.nativeElement.contains(event.target);

    // Si fue afuera, cerramos
    if (!clickedInside) {
      this.closeResults();
    }
  }
}
