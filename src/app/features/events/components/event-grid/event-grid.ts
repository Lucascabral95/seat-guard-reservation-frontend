import { Component, Input, ResourceRef } from '@angular/core';
import { Events } from '../../interfaces/get-event-by-id.interface';

@Component({
  selector: 'component-event-grid',
  imports: [],
  templateUrl: './event-grid.html',
  styleUrl: './event-grid.scss',
})
export class EventGrid {
  @Input({ required: true }) eventsResource!: ResourceRef<Events[]>;
}
