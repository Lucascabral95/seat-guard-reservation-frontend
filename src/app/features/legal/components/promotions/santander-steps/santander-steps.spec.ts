import 'zone.js';
import 'zone.js/testing';

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import SantanderSteps from './santander-steps';
import SantanderCta from '../santander-cta/santander-cta';
import { RouterTestingModule } from '@angular/router/testing';

describe('SantanderSteps', () => {
  let fixture: ComponentFixture<SantanderSteps>;
  let component: SantanderSteps;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        SantanderSteps,
        SantanderCta,
        RouterTestingModule,
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(SantanderSteps);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render main title', () => {
    const el: HTMLElement = fixture.nativeElement;
    expect(el.textContent).toContain('Cómo acceder al beneficio');
  });

  it('should render the three steps', () => {
    const el: HTMLElement = fixture.nativeElement;

    expect(el.textContent).toContain('Elegí tu evento');
    expect(el.textContent).toContain('Checkout Santander');
    expect(el.textContent).toContain('¡Listo!');
  });

  it('should render Santander CTA with correct label and link', () => {
    const ctaDebug = fixture.debugElement.query(
      By.directive(SantanderCta)
    );

    expect(ctaDebug).toBeTruthy();

    const ctaComponent = ctaDebug.componentInstance as SantanderCta;

    expect(ctaComponent.label).toBe('Volver a Cartelera');
    expect(ctaComponent.link).toBe('/dentro/events');
  });
});
