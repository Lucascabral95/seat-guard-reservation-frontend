import 'zone.js';
import 'zone.js/testing';

import { ComponentFixture, TestBed } from '@angular/core/testing';
import HeroSection from './hero-section';

describe('PrivacyPolicyHeroSection', () => {
  let fixture: ComponentFixture<HeroSection>;
  let component: HeroSection;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeroSection],
    }).compileComponents();

    fixture = TestBed.createComponent(HeroSection);
    component = fixture.componentInstance;

    component.lastUpdated = new Date(2025, 0, 15);

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render page title', () => {
    const el: HTMLElement = fixture.nativeElement;
    expect(el.textContent).toContain('Política de Privacidad');
  });

  it('should render description text', () => {
    const el: HTMLElement = fixture.nativeElement;
    expect(el.textContent).toContain('Tu privacidad no es negociable');
  });

  it('should render last updated date', () => {
    const el: HTMLElement = fixture.nativeElement;
    expect(el.textContent).toContain('2025');
  });
});
