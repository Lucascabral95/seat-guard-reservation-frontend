import { Component, inject, OnInit } from '@angular/core';
import { EventsService } from '../../service/events.service';
import EventCarousel from '../../components/event-carousel/event-carousel';
import { EventGrid } from '../../components/event-grid/event-grid';
import { Gender } from '../../interfaces/filter-events.interface';
import { SeoService } from '../../../../core/services/seo.service';
import AppDownloadComingSoon from '../../components/app-download-coming-soon/app-download-coming-soon';
import BannerSponsor from '../../components/banner-sponsor/banner-sponsor';
import Spotlight from '../../components/spotlight/spotlight';
import ContainerCard from '../../components/collection-moods/collection/container-card/container-card';

@Component({
  selector: 'app-event-list',
  imports: [
     EventGrid,
      EventCarousel,
      AppDownloadComingSoon,
      BannerSponsor,
      Spotlight,
      ContainerCard,
    ],
  templateUrl: './events.html',
  styleUrl: './events.scss',
})
export default class EventList implements OnInit {
  eventsService = inject(EventsService);
  private seo = inject(SeoService);

  quantityEventsToShow: number = 9

  firstGenderEvents: Gender = Gender.Varios
  secondGender: Gender = Gender.Rock
  thirdGender: Gender = Gender.Pop

  eventsResource = this.eventsService.getEvents(this.quantityEventsToShow)

   ngOnInit(): void {
    this.seo.setPageMeta({
      title: 'Eventos Disponibles',
      description: 'Explora todos los eventos disponibles y reserva tus asientos',
      noIndex: true,
    });
  }
}
