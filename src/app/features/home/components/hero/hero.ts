import { Component, Input } from '@angular/core';

@Component({
  selector: 'hero',
  imports: [],
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
})
export default class Hero {
  @Input({ required: true }) title!: string;
  @Input({ required: true }) imageUrl!: string;
  @Input({ required: true }) description!: string;
}
