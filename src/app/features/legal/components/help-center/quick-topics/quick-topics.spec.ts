import 'zone.js';
import 'zone.js/testing';

import { ComponentFixture, TestBed } from '@angular/core/testing';
import QuickTopics from './quick-topics';
import { QuickTopic } from '../../../interfaces/components';

describe('QuickTopics', () => {
  let fixture: ComponentFixture<QuickTopics>;
  let component: QuickTopics;

  const mockTopics: QuickTopic[] = [
    { icon: 'ticket', title: 'Mis Tickets', desc: 'Accesos a PDF' },
    { icon: 'credit-card', title: 'Pagos', desc: 'Facturación y Stripe' },
    { icon: 'user', title: 'Seguridad', desc: 'Cuenta y contraseñas' },
    { icon: 'calendar', title: 'Eventos', desc: 'Horarios y fechas' },
  ];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QuickTopics],
    }).compileComponents();

    fixture = TestBed.createComponent(QuickTopics);
    component = fixture.componentInstance;
    component.quickTopics = mockTopics;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render all quick topic titles', () => {
    const el: HTMLElement = fixture.nativeElement;

    expect(el.textContent).toContain('Mis Tickets');
    expect(el.textContent).toContain('Pagos');
    expect(el.textContent).toContain('Seguridad');
    expect(el.textContent).toContain('Eventos');
  });

  it('should render correct number of topic cards', () => {
    const cards = fixture.nativeElement.querySelectorAll('.bg-white');
    expect(cards.length).toBe(4);
  });

  it('should render topic descriptions', () => {
    const el: HTMLElement = fixture.nativeElement;

    expect(el.textContent).toContain('Accesos a PDF');
    expect(el.textContent).toContain('Facturación y Stripe');
  });
});
