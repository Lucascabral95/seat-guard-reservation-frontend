import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'component-toasts',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './toasts.html',
  styleUrl: './toasts.scss',
})
export default class Toasts {
   @Input() type: 'error' | 'success' = 'error';
   @Input() message: string = 'Internal Server Error';
}
