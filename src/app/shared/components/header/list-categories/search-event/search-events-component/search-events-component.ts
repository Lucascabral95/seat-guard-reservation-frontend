import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'component-search-events',
  imports: [CommonModule, RouterLink],
  templateUrl: './search-events-component.html',
  styleUrl: './search-events-component.scss',
})
export default class SearchEventsComponent {
    @Input({ required: true }) resource!: any;
  @Input({ required: true }) visible!: boolean;
  @Output() close = new EventEmitter<void>();

  onSelect() {
    this.close.emit();
  }
}
