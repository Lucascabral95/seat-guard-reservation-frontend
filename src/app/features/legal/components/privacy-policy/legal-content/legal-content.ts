import { Component, Input } from '@angular/core';
import { PolicySection } from '../../../interfaces/components';

@Component({
  selector: 'component-privacy-policy-legal-content',
  imports: [],
  templateUrl: './legal-content.html',
  styleUrl: './legal-content.scss',
})
export default class LegalContent {
   @Input({ required: true }) policySections: PolicySection[] = [];
}
