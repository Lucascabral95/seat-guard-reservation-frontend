import 'zone.js';
import 'zone.js/testing';

import { ComponentFixture, TestBed } from '@angular/core/testing';
import AppDownloadComingSoon from './app-download-coming-soon';

describe('AppDownloadComingSoon', () => {
  let fixture: ComponentFixture<AppDownloadComingSoon>;
  let component: AppDownloadComingSoon;
  let nativeElement: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppDownloadComingSoon],
    }).compileComponents();

    fixture = TestBed.createComponent(AppDownloadComingSoon);
    component = fixture.componentInstance;
    nativeElement = fixture.nativeElement;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should render "Próximamente" badge', () => {
    const badge = nativeElement.querySelector('.bg-yellow-100');
    expect(badge?.textContent).toContain('Próximamente');
  });

  it('should render main title', () => {
    const title = nativeElement.querySelector('h2');
    expect(title?.textContent).toContain('Lleva tus tickets en el bolsillo');
  });

  it('should render disabled App Store button', () => {
    const buttons = nativeElement.querySelectorAll('button');
    expect(buttons.length).toBeGreaterThan(0);

    buttons.forEach(button => {
      expect(button.classList).toContain('cursor-not-allowed');
      expect(button.classList).toContain('opacity-60');
    });
  });

  it('should show Coming Soon text on phone mockup', () => {
    expect(nativeElement.textContent).toContain('Coming Soon');
  });
});
