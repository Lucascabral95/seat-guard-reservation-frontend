import { Component, ElementRef, inject, input, viewChild, computed, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { EventsService } from '../../service/events.service';
import { Gender } from '../../interfaces/filter-events.interface';
import { ErrorEventCarousel } from "../../../../shared/components/errors/pages/error-event-carousel/error-event-carousel";
import LoadingCarousel from '../../../../shared/components/loading/pages/loading-carousel/loading-carousel';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'component-event-carousel',
  imports: [ErrorEventCarousel, LoadingCarousel, RouterLink],
  templateUrl: './event-carousel.html',
  styleUrl: './event-carousel.scss',
})
export default class EventCarousel {
  title = input.required<string>();
  gender = input.required<Gender>();

  private platformId = inject(PLATFORM_ID);
  private eventsService = inject(EventsService);

  carousel = viewChild<ElementRef>('carousel');

  private filtersSignal = computed(() => {
    if (!isPlatformBrowser(this.platformId)) return undefined;

    return { gender: this.gender() };
  });

  eventsResource = this.eventsService.getEventsByFilter(this.filtersSignal);

  scrollLeft() {
    this.carousel()?.nativeElement.scrollBy({ left: -320, behavior: 'smooth' });
  }

  scrollRight() {
    this.carousel()?.nativeElement.scrollBy({ left: 320, behavior: 'smooth' });
  }
}
