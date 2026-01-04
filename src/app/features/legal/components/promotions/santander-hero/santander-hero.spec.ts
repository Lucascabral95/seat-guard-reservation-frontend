import 'zone.js';
import 'zone.js/testing';

import { ComponentFixture, TestBed } from '@angular/core/testing';
import SantanderHero from './santander-hero';

describe('SantanderHero', () => {
  let fixture: ComponentFixture<SantanderHero>;
  let component: SantanderHero;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SantanderHero],
    }).compileComponents();

    fixture = TestBed.createComponent(SantanderHero);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render hero title and subtitle', () => {
    const el: HTMLElement = fixture.nativeElement;

    expect(el.textContent).toContain('Beneficios Exclusivos');
    expect(el.textContent).toContain('Clientes Santander');
    expect(el.textContent).toContain('Strategic Alliance');
  });
});
