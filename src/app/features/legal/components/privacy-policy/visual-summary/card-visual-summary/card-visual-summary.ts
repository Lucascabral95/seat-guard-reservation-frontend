import { Component, Input, inject } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { NgClass } from '@angular/common';
import { CardPropertiesInterface } from '../../../../interfaces/components';

@Component({
  selector: 'component-card-visual-summary',
  standalone: true,
  imports: [NgClass],
  templateUrl: './card-visual-summary.html',
})
export default class CardVisualSummary {
  private sanitizer = inject(DomSanitizer);

  @Input({ required: true }) cardDetails!: CardPropertiesInterface;

  get safeSvg(): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(this.cardDetails.svg);
  }

  get bgColor(): string {
    return this.cardDetails.colorSvg.replace('text-', 'bg-').replace('600', '50');
  }
}
