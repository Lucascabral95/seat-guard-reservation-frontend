import 'zone.js';
import 'zone.js/testing';

import { TestBed } from '@angular/core/testing';
import SendMethod from './send-method';

describe('SendMethod', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SendMethod],
    }).compileComponents();
  });

  it('should create the component', () => {
    const fixture = TestBed.createComponent(SendMethod);
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should render delivery method title', () => {
    const fixture = TestBed.createComponent(SendMethod);
    fixture.detectChanges();

    const el: HTMLElement = fixture.nativeElement;
    expect(el.textContent).toContain('Método de Entrega');
  });

  it('should render e-ticket description', () => {
    const fixture = TestBed.createComponent(SendMethod);
    fixture.detectChanges();

    const el: HTMLElement = fixture.nativeElement;
    expect(el.textContent).toContain('E-Ticket (Móvil) - Próximamente');
  });

  it('should render delivery details', () => {
    const fixture = TestBed.createComponent(SendMethod);
    fixture.detectChanges();

    const el: HTMLElement = fixture.nativeElement;
    expect(el.textContent).toContain('Gratis');
    expect(el.textContent).toContain('Envío inmediato');
  });
});
