import { Component, Input } from '@angular/core';
import { BuyStatus, GetMyTicketsInterface } from '../../interfaces';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'component-list-my-tickets',
  imports: [CommonModule, RouterLink],
  templateUrl: './list.html',
  styleUrl: './list.scss',
})
export default class ListMyTickets {
  @Input({ required: true }) myTicketsResource!: GetMyTicketsInterface[];

  BuyStatus = BuyStatus;
}
