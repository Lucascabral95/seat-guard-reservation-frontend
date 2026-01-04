import 'zone.js';
import 'zone.js/testing';

import { TestBed, ComponentFixture } from '@angular/core/testing';
import HelpCenterPage from './help-center-page';

describe('HelpCenterPage', () => {
  let fixture: ComponentFixture<HelpCenterPage>;
  let component: HelpCenterPage;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HelpCenterPage],
    }).compileComponents();

    fixture = TestBed.createComponent(HelpCenterPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the page', () => {
    expect(component).toBeTruthy();
  });

  it('should render hero section', () => {
    const el: HTMLElement = fixture.nativeElement;
    expect(el.querySelector('component-hero-section-help')).toBeTruthy();
  });

  it('should render quick topics', () => {
    const el: HTMLElement = fixture.nativeElement;
    expect(el.querySelector('component-quick-topics')).toBeTruthy();
  });

  it('should render faq collapse component', () => {
    const el: HTMLElement = fixture.nativeElement;
    expect(el.querySelector('component-faq-collapse')).toBeTruthy();
  });

  it('should toggle FAQ open state correctly', () => {
    component.toggleFaq(0);
    expect(component.faqs[0].isOpen).toBeTrue();

    component.toggleFaq(1);
    expect(component.faqs[0].isOpen).toBeFalse();
    expect(component.faqs[1].isOpen).toBeTrue();
  });

  it('should close FAQ if clicking the same one', () => {
    component.toggleFaq(0);
    component.toggleFaq(0);
    expect(component.faqs[0].isOpen).toBeFalse();
  });
});
