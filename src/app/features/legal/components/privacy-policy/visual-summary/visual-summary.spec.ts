import 'zone.js';
import 'zone.js/testing';

import { ComponentFixture, TestBed } from '@angular/core/testing';
import VisualSummary from './visual-summary';

describe('PrivacyPolicyVisualSummary', () => {
  let fixture: ComponentFixture<VisualSummary>;
  let component: VisualSummary;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VisualSummary],
    }).compileComponents();

    fixture = TestBed.createComponent(VisualSummary);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should define three visual summary cards', () => {
    expect(component.cardDetails.length).toBe(3);
  });

  it('should render three CardVisualSummary components', () => {
    const el: HTMLElement = fixture.nativeElement;
    const cards = el.querySelectorAll('component-card-visual-summary');

    expect(cards.length).toBe(3);
  });

  it('should render card titles', () => {
    const el: HTMLElement = fixture.nativeElement;

    expect(el.textContent).toContain('Pagos Encriptados');
    expect(el.textContent).toContain('Sin Publicidad');
    expect(el.textContent).toContain('Derecho de Acceso');
  });
});
