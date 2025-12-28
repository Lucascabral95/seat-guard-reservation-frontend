import { Component, Input } from '@angular/core';

@Component({
  selector: 'component-my-tickets-error',
  imports: [],
  templateUrl: './error.html',
  styleUrl: './error.scss',
})
export default class MyTicketsError {
  @Input({ required: true }) retry!: () => void;
}
