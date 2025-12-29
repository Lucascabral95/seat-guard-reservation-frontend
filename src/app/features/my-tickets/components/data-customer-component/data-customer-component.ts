import { CommonModule } from '@angular/common';
import { HttpResourceRef } from '@angular/common/http';
import { Component, Input } from '@angular/core';
import { CreateCheckoutCustomerInterface } from '../../../checkout/interfaces/checkout';

@Component({
  selector: 'component-data-customer',
  imports: [CommonModule],
  templateUrl: './data-customer-component.html',
  styleUrl: './data-customer-component.scss',
})
export default class DataCustomerComponent {
   @Input({required: true}) dataCustomer!: HttpResourceRef<CreateCheckoutCustomerInterface | undefined>;
}
