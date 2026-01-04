import { Component, computed, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { EventsService } from '../../service/events.service';

@Component({
  selector: 'component-spotlight',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './spotlight.html',
  styleUrl: './spotlight.scss',
})
export default class Spotlight {
  private eventsService = inject(EventsService);

  readonly artistName = 'Dua Lipa';

  readonly eventsResource = this.eventsService.getEventsByFilter(() => ({
    name: this.artistName,
  }));

  readonly eventSelected = computed(() => {
    const events = this.eventsResource.value();
    return events.length > 0 ? events[0] : null;
  });
}
