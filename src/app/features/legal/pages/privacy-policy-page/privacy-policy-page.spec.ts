import 'zone.js';
import 'zone.js/testing';

import { TestBed, ComponentFixture } from '@angular/core/testing';
import PrivacyPolicyPage from './privacy-policy-page';

describe('PrivacyPolicyPage', () => {
  let fixture: ComponentFixture<PrivacyPolicyPage>;
  let component: PrivacyPolicyPage;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrivacyPolicyPage],
    }).compileComponents();

    fixture = TestBed.createComponent(PrivacyPolicyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the page', () => {
    expect(component).toBeTruthy();
  });

  it('should render hero section', () => {
    const el: HTMLElement = fixture.nativeElement;
    expect(el.querySelector('component-privacy-policy-hero-section')).toBeTruthy();
  });

  it('should render visual summary section', () => {
    const el: HTMLElement = fixture.nativeElement;
    expect(el.querySelector('component-privacy-policy-visual-summary')).toBeTruthy();
  });

  it('should render legal content section', () => {
    const el: HTMLElement = fixture.nativeElement;
    expect(el.querySelector('component-privacy-policy-legal-content')).toBeTruthy();
  });

  it('should define policy sections', () => {
    expect(component.policySections.length).toBeGreaterThan(0);
  });
});
