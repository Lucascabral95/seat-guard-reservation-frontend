import { Component, Input } from '@angular/core';

@Component({
  selector: 'component-my-tickets-empty',
  imports: [],
  templateUrl: './empty.html',
  styleUrl: './empty.scss',
})
export default class EmptyMyTickets {
  @Input() text: string = 'Aún no tienes compras';
  @Input() detail: string = 'Cuando compres entradas aparecerán aquí';
}
