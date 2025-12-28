import { Component, Input, output } from '@angular/core';
import { RouterLink } from '@angular/router';

export interface NavItem {
  name: string;
  url: string;
}

@Component({
  selector: 'component-nav-bar',
  imports: [RouterLink],
  templateUrl: './nav-bar-component.html',
  styleUrl: './nav-bar-component.scss',
})
export default class NavBarComponent {
  @Input({ required: true }) authenticated!: boolean;
  @Input({ required: true }) genders!: NavItem[];

  logout = output<void>();
  goToLogin = output<void>();
  toggleMenu = output<void>();
}
