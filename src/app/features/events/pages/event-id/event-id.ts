import { CommonModule } from '@angular/common';
import { Component, inject, input, signal } from '@angular/core';
import { RouterLink } from "@angular/router";
import { EventsService } from '../../service/events.service';
import { SectionEventId } from '../../interfaces';
import EventIdAbout from '../../components/event-id-components/event-id-about/event-id-about';

@Component({
  selector: 'app-event-id',
  imports: [CommonModule, RouterLink, EventIdAbout],
  templateUrl: './event-id.html',
  styleUrl: './event-id.scss',
})
export default class EventId {
    eventService = inject(EventsService)
    id = input.required<string>();

    sectionEventId = signal<SectionEventId>(SectionEventId.concerts);
    SectionEventId = SectionEventId

    eventByIdResource = this.eventService.getEventByIdNew(this.id);

    changeSectionEventId(sectionEventId: SectionEventId) {
        this.sectionEventId.set(sectionEventId);
    }
}
