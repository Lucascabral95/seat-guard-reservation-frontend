import 'zone.js';
import 'zone.js/testing';

import { TestBed, ComponentFixture } from '@angular/core/testing';
import CookiesPolicyPage from './cookies-policy-page';

describe('CookiesPolicyPage', () => {
  let fixture: ComponentFixture<CookiesPolicyPage>;
  let component: CookiesPolicyPage;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CookiesPolicyPage],
    }).compileComponents();

    fixture = TestBed.createComponent(CookiesPolicyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the page', () => {
    expect(component).toBeTruthy();
  });

  it('should render header cookies component', () => {
    const el: HTMLElement = fixture.nativeElement;
    expect(el.querySelector('component-header-cookies')).toBeTruthy();
  });

  it('should render cookies auditory component', () => {
    const el: HTMLElement = fixture.nativeElement;
    expect(el.querySelector('component-cookies-auditory')).toBeTruthy();
  });

  it('should filter cookies by category', () => {
    component.setFilter('necessary');
    expect(component.filteredCookies.every(c => c.category === 'necessary')).toBeTrue();
  });

  it('should reset filter to all', () => {
    component.setFilter('functional');
    component.setFilter('all');
    expect(component.filteredCookies.length).toBe(component.auditTable.length);
  });
});
