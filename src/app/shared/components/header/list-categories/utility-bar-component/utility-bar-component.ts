import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'component-utility-bar',
  imports: [RouterLink],
  templateUrl: './utility-bar-component.html',
  styleUrl: './utility-bar-component.scss',
})
export default class UtilityBarComponent {
     @Input({ required: true }) categories: any[] = [];
}
