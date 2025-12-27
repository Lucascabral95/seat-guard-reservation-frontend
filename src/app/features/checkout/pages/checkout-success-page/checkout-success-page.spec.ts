import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckoutSuccessPage } from './checkout-success-page';

describe('CheckoutSuccessPage', () => {
  let component: CheckoutSuccessPage;
  let fixture: ComponentFixture<CheckoutSuccessPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CheckoutSuccessPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CheckoutSuccessPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
