import 'zone.js';
import 'zone.js/testing';

import { TestBed } from '@angular/core/testing';
import ComponentErrorSuccess from './component-error-success';

describe('ComponentErrorSuccess', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComponentErrorSuccess],
    }).compileComponents();
  });

  it('should create the component', () => {
    const fixture = TestBed.createComponent(ComponentErrorSuccess);
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should render default title and description', () => {
    const fixture = TestBed.createComponent(ComponentErrorSuccess);
    fixture.detectChanges();

    const el: HTMLElement = fixture.nativeElement;

    expect(el.textContent).toContain('No pudimos cargar tu orden');
    expect(el.textContent).toContain(
      'Hubo un problema verificando el estado del pago'
    );
  });

  it('should render custom title and description when inputs are provided', () => {
    const fixture = TestBed.createComponent(ComponentErrorSuccess);
    const component = fixture.componentInstance;

    component.title = 'Pago rechazado';
    component.description = 'La tarjeta fue rechazada por el banco.';

    fixture.detectChanges();

    const el: HTMLElement = fixture.nativeElement;

    expect(el.textContent).toContain('Pago rechazado');
    expect(el.textContent).toContain('La tarjeta fue rechazada por el banco.');
  });
});
