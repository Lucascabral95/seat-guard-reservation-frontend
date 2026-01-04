import 'zone.js';
import 'zone.js/testing';

import { ComponentFixture, TestBed } from '@angular/core/testing';
import HeroSectionHelp from './hero-section-help';

describe('HeroSectionHelp', () => {
  let fixture: ComponentFixture<HeroSectionHelp>;
  let component: HeroSectionHelp;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeroSectionHelp],
    }).compileComponents();

    fixture = TestBed.createComponent(HeroSectionHelp);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render hero title and subtitle', () => {
    const el: HTMLElement = fixture.nativeElement;

    expect(el.textContent).toContain('Centro de Soporte');
    expect(el.textContent).toContain('Preguntas Frecuentes');
  });

  it('should render description text', () => {
    const el: HTMLElement = fixture.nativeElement;

    expect(el.textContent).toContain('Encuentra respuestas rápidas');
  });
});
