import { Component, Input } from '@angular/core';

@Component({
  selector: 'event-id-about',
  imports: [],
  templateUrl: './event-id-about.html',
  styleUrl: './event-id-about.scss',
})
export default class EventIdAbout {
   @Input() description: string = "¡No posee descripcion!";
}
