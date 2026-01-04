import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FAQ } from '../../../interfaces/components';

@Component({
  selector: 'component-faq-collapse',
  imports: [],
  templateUrl: './faq-collapse.html',
  styleUrl: './faq-collapse.scss',
})
export default class FaqCollapse {
   @Input({required: true}) faqs: FAQ[] = [];

    @Output() toggle = new EventEmitter<number>();
}
