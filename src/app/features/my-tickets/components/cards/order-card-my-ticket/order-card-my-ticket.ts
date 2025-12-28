import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { GetMyTicketByIDInterface } from '../../../interfaces/get-my-ticket-by-id.interface';

@Component({
  selector: 'component-order-card-my-ticket',
  imports: [CommonModule],
  templateUrl: './order-card-my-ticket.html',
  styleUrl: './order-card-my-ticket.scss',
})
export default class OrderCardMyTicket {
  @Input({ required: true }) order!: GetMyTicketByIDInterface;
}
