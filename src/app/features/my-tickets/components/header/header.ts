import { Component, Input } from '@angular/core';

@Component({
  selector: 'component-header-my-tickets',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export default class HeaderMyTickets {
     @Input() title: string = 'Mis Tickets';
     @Input() caption: string = 'Historial de compras y entradas adquiridas';
}
