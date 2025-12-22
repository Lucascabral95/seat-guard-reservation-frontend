import { Component, inject, input, computed, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import Hero from '../../../home/components/hero/hero';
import { EventGrid } from "../../components/event-grid/event-grid";
import { BlackErrorComponent } from '../../../../shared/components/black-error/black-error';
import { EventsService } from '../../service/events.service';
import { Gender } from '../../interfaces/filter-events.interface';
import { BannerDataInterface } from '../../../home/interfaces';

@Component({
  selector: 'component-event-gender',
  imports: [Hero, EventGrid, BlackErrorComponent],
  templateUrl: './event-gender.html',
  styleUrl: './event-gender.scss',
})
export default class EventGender {
   gender = input.required<Gender>();
   private eventsService = inject(EventsService);
   private platformId = inject(PLATFORM_ID);

   bannerHeroTitle = computed(() => this.gender());

   normalizedGender = computed(() => String(this.gender()).toUpperCase());

   isValidGender = computed(() =>
     Object.values(Gender).includes(this.normalizedGender() as Gender)
   );

   bannerHero: BannerDataInterface = {
    title: 'Eventos en Vivo',
     description: 'Diversión al más alto nivel asegurada.',
     imageUrl: 'https://images.unsplash.com/photo-1553101497-d1cd9d74660b?q=80&w=1170&auto=format&fit=crop'
   };


   private eventFilters = computed(() => {
       if (!isPlatformBrowser(this.platformId)) return undefined;
       if (!this.isValidGender()) return undefined;

      return {
        gender: this.normalizedGender() as Gender
      };
  });

   eventsResource = this.eventsService.getEventsByFilter(this.eventFilters);
}
