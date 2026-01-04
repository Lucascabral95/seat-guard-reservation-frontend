import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'component-privacy-policy-hero-section',
  imports: [CommonModule],
  templateUrl: './hero-section.html',
  styleUrl: './hero-section.scss',
})
export default class HeroSection {
   @Input() lastUpdated: Date = new Date();
}
