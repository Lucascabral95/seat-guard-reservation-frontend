import 'zone.js';
import 'zone.js/testing';

import { ComponentFixture, TestBed } from '@angular/core/testing';
import LegalContent from './legal-content';
import { PolicySection } from '../../../interfaces/components';

describe('PrivacyPolicyLegalContent', () => {
  let fixture: ComponentFixture<LegalContent>;
  let component: LegalContent;

  const mockSections: PolicySection[] = [
    {
      title: '1. Recopilación de Datos',
      content: 'Recopilamos datos necesarios para procesar tu compra.',
    },
    {
      title: '2. Datos de Pago',
      content: 'Los pagos son procesados por Stripe.',
    },
  ];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LegalContent],
    }).compileComponents();

    fixture = TestBed.createComponent(LegalContent);
    component = fixture.componentInstance;
    component.policySections = mockSections;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render all policy section titles', () => {
    const el: HTMLElement = fixture.nativeElement;

    expect(el.textContent).toContain('1. Recopilación de Datos');
    expect(el.textContent).toContain('2. Datos de Pago');
  });

  it('should render policy section content', () => {
    const el: HTMLElement = fixture.nativeElement;

    expect(el.textContent).toContain('procesar tu compra');
    expect(el.textContent).toContain('Stripe');
  });

  it('should render data protection contact section', () => {
    const el: HTMLElement = fixture.nativeElement;

    expect(el.textContent).toContain('Delegado de Protección de Datos');
    expect(el.textContent).toContain('privacy@seatguard.com');
  });
});
