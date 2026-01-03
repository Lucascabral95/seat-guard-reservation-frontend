import { CommonModule } from '@angular/common';
import { Component, effect, inject, input, OnInit, signal } from '@angular/core';
import { RouterLink } from "@angular/router";
import { EventsService } from '../../service/events.service';
import { SectionEventId } from '../../interfaces';
import EventIdAbout from '../../components/event-id-components/event-id-about/event-id-about';
import { SeoService } from '../../../../core/services/seo.service';

@Component({
  selector: 'app-event-id',
  imports: [CommonModule, RouterLink, EventIdAbout],
  templateUrl: './event-id.html',
  styleUrl: './event-id.scss',
})
export default class EventId implements OnInit {
    eventService = inject(EventsService)
    id = input.required<string>();
    private seo = inject(SeoService);

    sectionEventId = signal<SectionEventId>(SectionEventId.concerts);
    SectionEventId = SectionEventId

    eventByIdResource = this.eventService.getEventByIdNew(this.id);

    changeSectionEventId(sectionEventId: SectionEventId) {
        this.sectionEventId.set(sectionEventId);
    }

     constructor() {
    effect(() => {
      const event = this.eventByIdResource.value?.();
      if (event) {
        this.seo.setPageMeta({
          title: event.name || 'Detalle del Evento',
          description: event.description || `Reserva tu asiento para ${event.name}`,
          image: event.posterUrl || 'https://seatguard.com/assets/images/event-default.jpg',
          noIndex: true,
        });
      }
    });
  }

  ngOnInit(): void {
    this.seo.setPageMeta({
      title: 'Detalle del Evento',
      description: 'Información detallada del evento',
      noIndex: true,
    });
  }
}
