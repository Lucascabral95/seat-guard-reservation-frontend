import { Component, inject, OnInit } from '@angular/core';
import { EventsService } from '../../service/events.service';
import { HomePage } from "../../../home/pages/home-page/home-page";
import EventCarousel from '../../components/event-carousel/event-carousel';
import { EventGrid } from '../../components/event-grid/event-grid';
import { Gender } from '../../interfaces/filter-events.interface';
import { SeoService } from '../../../../core/services/seo.service';

@Component({
  selector: 'app-event-list',
  imports: [HomePage, EventGrid, EventCarousel],
  templateUrl: './events.html',
  styleUrl: './events.scss',
})
export default class EventList implements OnInit {
  eventsService = inject(EventsService);
  private seo = inject(SeoService);

  quantityEventsToShow: number = 9

  firstGenderEvents: Gender = Gender.Varios
  secondGender: Gender = Gender.Rock
  thirdGender: Gender = Gender.Jazz

  eventsResource = this.eventsService.getEvents(this.quantityEventsToShow)

   ngOnInit(): void {
    this.seo.setPageMeta({
      title: 'Eventos Disponibles',
      description: 'Explora todos los eventos disponibles y reserva tus asientos',
      noIndex: true,
    });
  }
}
