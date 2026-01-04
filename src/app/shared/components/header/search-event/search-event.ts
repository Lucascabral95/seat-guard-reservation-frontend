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

import { Component, ElementRef, HostListener, inject, signal, effect, untracked } from '@angular/core';
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

  // Inputs del usuario
  searchText = signal('');
  searchLocation = signal('');

  // Visibilidad del dropdown
  visible = signal(false);

  // 1. CAMBIO CLAVE: Usamos un signal dedicado para los filtros activos
  // Lo inicializamos en undefined para que el servicio NO haga nada al inicio.
  activeFilters = signal<FiltersEventsInterface | undefined>(undefined);

  // 2. Resource conectado al signal 'activeFilters' en lugar de un computed directo
  eventsResource = this.eventsService.getEventsByFilter(this.activeFilters);

  constructor() {
    // 3. EFFECT: El puente seguro.
    // Esto corre asíncronamente. En SSR no afectará el estado inicial crítico.
    // En el cliente, asegura que los filtros se actualicen solo ante cambios reales.
    effect(() => {
      const name = this.searchText().trim();
      const location = this.searchLocation().trim();

      // Lógica de negocio: Si no cumple el largo mínimo, "apagamos" los filtros.
      if (name.length < 2 && location.length < 2) {
        // untracked es opcional pero buena práctica aquí para evitar loops,
        // aunque con set directo no suele pasar.
        this.activeFilters.set(undefined);
        return;
      }

      // Si cumple, seteamos el objeto.
      this.activeFilters.set({
        name: name.length >= 2 ? name : undefined,
        location: location.length >= 2 ? location : undefined
      });
    }, { allowSignalWrites: true });
  }

  // --- Handlers (Solo actualizan los inputs visuales) ---

  onInput(value: string) {
    this.searchText.set(value);
    this.checkVisibility();
  }

  onLocationInput(value: string) {
    this.searchLocation.set(value);
    this.checkVisibility();
  }

  private checkVisibility() {
    // La visibilidad depende de si el usuario ha escrito algo válido
    const hasInput = this.searchText().length >= 2 || this.searchLocation().length >= 2;
    this.visible.set(hasInput);
  }

  closeResults() {
    this.visible.set(false);
  }

  // --- Click Outside ---
  @HostListener('document:click', ['$event'])
  onClickOutside(event: MouseEvent) {
    if (!this.visible()) return;
    const clickedInside = this.elementRef.nativeElement.contains(event.target);
    if (!clickedInside) {
      this.closeResults();
    }
  }
}
