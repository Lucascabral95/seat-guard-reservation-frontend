import 'zone.js';
import 'zone.js/testing';

import { TestBed, ComponentFixture } from '@angular/core/testing';
import TermsConditionsPage from './terms-conditions-page';

describe('TermsConditionsPage', () => {
  let fixture: ComponentFixture<TermsConditionsPage>;
  let component: TermsConditionsPage;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TermsConditionsPage],
    }).compileComponents();

    fixture = TestBed.createComponent(TermsConditionsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the page', () => {
    expect(component).toBeTruthy();
  });

  it('should render header minimalist', () => {
    const el: HTMLElement = fixture.nativeElement;
    expect(el.querySelector('component-header-minimalist')).toBeTruthy();
  });

  it('should render sidebar content legal', () => {
    const el: HTMLElement = fixture.nativeElement;
    expect(el.querySelector('component-sidebar-content-legal')).toBeTruthy();
  });

  it('should define legal sections', () => {
    expect(component.sections.length).toBeGreaterThan(0);
  });

  it('should scroll to section without throwing', () => {
    expect(() => component.scrollToSection('acceptance')).not.toThrow();
  });

  it('should print page without throwing', () => {
    spyOn(window, 'print');
    component.printPage();
    expect(window.print).toHaveBeenCalled();
  });
});
