import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CookieType } from '../../../interfaces/components';

@Component({
  selector: 'component-cookies-auditory',
  standalone: true,
  templateUrl: './cookies-auditory.html',
  styleUrl: './cookies-auditory.scss',
})
export default class CookiesAuditory {
  @Input({ required: true }) cookies!: CookieType[];
  @Input({ required: true }) filteredCookies!: CookieType[];
  @Input({ required: true }) activeFilter!: 'all' | 'necessary' | 'analytics' | 'functional';
  @Input({ required: true }) definitions!: Record<string, string>;

  @Output() filterChange = new EventEmitter<'all' | 'necessary' | 'analytics' | 'functional'>();

  setFilter(filter: 'all' | 'necessary' | 'analytics' | 'functional') {
    this.filterChange.emit(filter);
  }
}
