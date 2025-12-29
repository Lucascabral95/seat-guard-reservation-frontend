import 'zone.js';
import 'zone.js/testing';

import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import CheckoutErrorPage from './checkout-error-page';

describe('CheckoutErrorPage', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        CheckoutErrorPage,
        RouterTestingModule,
      ],
    }).compileComponents();
  });

  it('should create the page', () => {
    const fixture = TestBed.createComponent(CheckoutErrorPage);
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should render main cancel card', () => {
    const fixture = TestBed.createComponent(CheckoutErrorPage);
    fixture.detectChanges();

    const el: HTMLElement = fixture.nativeElement;
    expect(el.querySelector('component-main-card-cancel')).toBeTruthy();
  });
});
