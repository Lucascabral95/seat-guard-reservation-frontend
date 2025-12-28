import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { GetMyTicketByIDInterface } from '../../interfaces/get-my-ticket-by-id.interface';

@Component({
  selector: 'component-seats-my-ticket',
  imports: [CommonModule],
  templateUrl: './seats.html',
  styleUrl: './seats.scss',
})
export default class SeatsMyTicket {
  @Input({ required: true }) order!: GetMyTicketByIDInterface;
}
