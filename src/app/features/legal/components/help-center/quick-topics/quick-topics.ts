import { Component } from '@angular/core';
import { QuickTopic } from '../../../interfaces/components';
import { Input } from '@angular/core';

@Component({
  selector: 'component-quick-topics',
  imports: [],
  templateUrl: './quick-topics.html',
  styleUrl: './quick-topics.scss',
})
export default class QuickTopics {
 @Input({required: true}) quickTopics: QuickTopic[] = [];
}
