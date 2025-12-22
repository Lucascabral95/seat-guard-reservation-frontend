import { Component, Input, ResourceRef } from '@angular/core';
import { Events } from '../../interfaces/get-event-by-id.interface';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'component-event-grid',
  imports: [RouterLink],
  templateUrl: './event-grid.html',
  styleUrl: './event-grid.scss',
})
export class EventGrid {
  @Input({ required: true }) eventsResource!: ResourceRef<Events[]>;
}
