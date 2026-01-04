import { CommonModule } from '@angular/common';
import { Component, Input, Signal, signal } from '@angular/core';

@Component({
  selector: 'component-header-cookies',
  imports: [CommonModule],
  templateUrl: './header-cookies.html',
  styleUrl: './header-cookies.scss',
})
export default class HeaderCookies {
   @Input({ required: true }) lastUpdated!: Signal<Date>;
}
