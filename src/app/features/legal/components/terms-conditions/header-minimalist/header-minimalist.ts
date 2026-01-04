import { CommonModule } from '@angular/common';
import { Component, Input, Signal } from '@angular/core';

@Component({
  selector: 'component-header-minimalist',
  imports: [CommonModule],
  templateUrl: './header-minimalist.html',
  styleUrl: './header-minimalist.scss',
})
export default class HeaderMinimalist {
@Input({ required: true }) lastUpdated!: Signal<Date>;
}
