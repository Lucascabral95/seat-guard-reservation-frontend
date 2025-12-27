import { Component, Input } from '@angular/core';

@Component({
  selector: 'component-header-confirmation',
  imports: [],
  templateUrl: './header-confirmation.html',
  styleUrl: './header-confirmation.scss',
})
export default class HeaderConfirmation {
   @Input() title: string = '¡Pago Exitoso!';
   @Input() description: string = 'Tu reserva ha sido confirmada y enviada a tu email.';
}
