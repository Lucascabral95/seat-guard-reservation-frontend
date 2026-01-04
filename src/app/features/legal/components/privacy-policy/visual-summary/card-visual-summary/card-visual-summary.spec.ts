import 'zone.js';
import 'zone.js/testing';

import { ComponentFixture, TestBed } from '@angular/core/testing';
import CardVisualSummary from './card-visual-summary';
import { CardPropertiesInterface } from '../../../../interfaces/components';

describe('CardVisualSummary', () => {
  let fixture: ComponentFixture<CardVisualSummary>;
  let component: CardVisualSummary;

  const mockCard: CardPropertiesInterface = {
    title: 'Pagos Encriptados',
    content: 'Contenido seguro',
    svg: '<svg></svg>',
    colorSvg: 'text-green-600',
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardVisualSummary],
    }).compileComponents();

    fixture = TestBed.createComponent(CardVisualSummary);
    component = fixture.componentInstance;
    component.cardDetails = mockCard;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render title and content', () => {
    const el: HTMLElement = fixture.nativeElement;

    expect(el.textContent).toContain('Pagos Encriptados');
    expect(el.textContent).toContain('Contenido seguro');
  });

  it('should compute background color correctly', () => {
    expect(component.bgColor).toBe('bg-green-50');
  });

  it('should sanitize svg content', () => {
    const safeSvg = component.safeSvg as any;
    expect(safeSvg).toBeTruthy();
  });
});
