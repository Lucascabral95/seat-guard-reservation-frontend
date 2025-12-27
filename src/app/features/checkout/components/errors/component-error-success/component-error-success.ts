import { Component, Input } from '@angular/core';

@Component({
  selector: 'component-error-success',
  imports: [],
  templateUrl: './component-error-success.html',
  styleUrl: './component-error-success.scss',
})
export default class ComponentErrorSuccess {
     @Input() title: string = 'No pudimos cargar tu orden';
     @Input() description: string = 'Hubo un problema verificando el estado del pago. Por favor contacta a soporte con tu ID de orden.';
}
