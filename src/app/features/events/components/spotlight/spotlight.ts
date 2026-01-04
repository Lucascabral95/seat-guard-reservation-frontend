import { Component, computed, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { EventsService } from '../../service/events.service';

@Component({
  selector: 'component-spotlight',
  imports: [RouterLink],
  templateUrl: './spotlight.html',
  styleUrl: './spotlight.scss',
})
export default class Spotlight {
    eventService = inject(EventsService)
    name = 'Dua Lipa';

eventsResource = this.eventService.getEventsByFilter(() => ({
  name: this.name,
}));

eventSelected = computed(() => {
  const events = this.eventsResource.value();
  return events?.[0] ?? null;
});
}
