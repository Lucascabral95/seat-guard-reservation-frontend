import 'zone.js';
import 'zone.js/testing';

import { ComponentFixture, TestBed } from '@angular/core/testing';
import SantanderBenefits from './santander-benefits';

describe('SantanderBenefits', () => {
  let fixture: ComponentFixture<SantanderBenefits>;
  let component: SantanderBenefits;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SantanderBenefits],
    }).compileComponents();

    fixture = TestBed.createComponent(SantanderBenefits);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render three benefit cards', () => {
    const el: HTMLElement = fixture.nativeElement;
    const cards = el.querySelectorAll('h3');

    expect(cards.length).toBe(3);
    expect(el.textContent).toContain('Cuotas Sin Interés');
    expect(el.textContent).toContain('48hs Preventa');
    expect(el.textContent).toContain('Canje de Puntos');
  });
});
