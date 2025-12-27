import { Component, Input } from '@angular/core';
import { GetOrderBookingByIDInterface } from '../../interfaces/orders-booking';
import { CurrencyPipe, DatePipe } from '@angular/common';

@Component({
  selector: 'component-main-card',
  imports: [CurrencyPipe, DatePipe],
  templateUrl: './main-card.html',
  styleUrl: './main-card.scss',
})
export default class MainCard {
   @Input({ required: true }) order!: GetOrderBookingByIDInterface;
}
