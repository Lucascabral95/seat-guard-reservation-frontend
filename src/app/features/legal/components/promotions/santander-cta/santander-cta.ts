import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'component-santander-cta',
  imports: [RouterLink],
  templateUrl: './santander-cta.html',
  styleUrl: './santander-cta.scss',
})
export default class SantanderCta {
   @Input({ required: true }) label!: string;
  @Input({ required: true }) link!: string;
}
