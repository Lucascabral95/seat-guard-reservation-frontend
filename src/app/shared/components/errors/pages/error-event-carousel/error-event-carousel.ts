import { Component, Input, output } from '@angular/core';

@Component({
  selector: 'componense-error-event-carousel',
  imports: [],
  templateUrl: './error-event-carousel.html',
  styleUrl: './error-event-carousel.scss',
})
export class ErrorEventCarousel {
    retry = output();
}
