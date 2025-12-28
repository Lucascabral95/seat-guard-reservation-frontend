import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'component-menu-open',
  imports: [RouterLink],
  templateUrl: './menu-open-component.html',
  styleUrl: './menu-open-component.scss',
})
export default class MenuOpenComponent {
    @Input({ required: true }) authenticated!: boolean;
    @Input({ required: true }) headerService!: any;
}
