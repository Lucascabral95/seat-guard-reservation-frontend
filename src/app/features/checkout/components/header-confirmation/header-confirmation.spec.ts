import 'zone.js';
import 'zone.js/testing';

import { TestBed } from '@angular/core/testing';
import HeaderConfirmation from './header-confirmation';

describe('HeaderConfirmation', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderConfirmation],
    }).compileComponents();
  });

  it('should create the component', () => {
    const fixture = TestBed.createComponent(HeaderConfirmation);
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should render default title and description', () => {
    const fixture = TestBed.createComponent(HeaderConfirmation);
    fixture.detectChanges();

    const el: HTMLElement = fixture.nativeElement;

    expect(el.textContent).toContain('¡Pago Exitoso!');
    expect(el.textContent).toContain(
      'Tu reserva ha sido confirmada y enviada a tu email.'
    );
  });

  it('should render custom title and description when inputs are provided', () => {
    const fixture = TestBed.createComponent(HeaderConfirmation);
    const component = fixture.componentInstance;

    component.title = 'Confirmación enviada';
    component.description = 'Revisá tu correo para más detalles.';

    fixture.detectChanges();

    const el: HTMLElement = fixture.nativeElement;

    expect(el.textContent).toContain('Confirmación enviada');
    expect(el.textContent).toContain('Revisá tu correo para más detalles.');
  });
});
