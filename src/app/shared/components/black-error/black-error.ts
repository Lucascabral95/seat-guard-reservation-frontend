import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-black-error',
  standalone: true,
  templateUrl: './black-error.html',
  styleUrl: './black-error.scss',
})
export class BlackErrorComponent {
  @Input() title: string = 'ERROR';
  @Input() message: string = 'Ha ocurrido un error inesperado.';
}
