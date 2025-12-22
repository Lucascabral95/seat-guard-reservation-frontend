import { Component, inject } from '@angular/core';
import { EventsService } from '../../service/events.service';
import { HomePage } from "../../../home/pages/home-page/home-page";
import EventCarousel from '../../components/event-carousel/event-carousel';
import { EventGrid } from '../../components/event-grid/event-grid';
import { Gender } from '../../interfaces/filter-events.interface';

@Component({
  selector: 'app-event-list',
  imports: [HomePage, EventGrid, EventCarousel],
  templateUrl: './events.html',
  styleUrl: './events.scss',
})
export default class EventList {
  eventsService = inject(EventsService);

  quantityEventsToShow: number = 9

  firstGenderEvents: Gender = Gender.Varios
  secondGender: Gender = Gender.Rock
  thirdGender: Gender = Gender.Jazz

  eventsResource = this.eventsService.getEvents(this.quantityEventsToShow)
}
