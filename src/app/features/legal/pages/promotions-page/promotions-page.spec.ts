import 'zone.js';
import 'zone.js/testing';

import { TestBed, ComponentFixture } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import PromotionsPage from './promotions-page';

describe('PromotionsPage', () => {
  let fixture: ComponentFixture<PromotionsPage>;
  let component: PromotionsPage;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        PromotionsPage
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(PromotionsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the page', () => {
    expect(component).toBeTruthy();
  });

  it('should render Santander hero', () => {
    const el: HTMLElement = fixture.nativeElement;
    expect(el.querySelector('component-santander-hero')).toBeTruthy();
  });

  it('should render Santander benefits', () => {
    const el: HTMLElement = fixture.nativeElement;
    expect(el.querySelector('component-santander-benefits')).toBeTruthy();
  });

  it('should render Santander steps', () => {
    const el: HTMLElement = fixture.nativeElement;
    expect(el.querySelector('component-santander-steps')).toBeTruthy();
  });

  it('should render Santander legal section', () => {
    const el: HTMLElement = fixture.nativeElement;
    expect(el.querySelector('component-santander-legal')).toBeTruthy();
  });
});
