import 'zone.js';
import 'zone.js/testing';

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import FooterComponentMyTickets from './footer';

describe('FooterComponentMyTickets', () => {
  let fixture: ComponentFixture<FooterComponentMyTickets>;
  let component: FooterComponentMyTickets;

  const mockOrder = {
    id: 'order-123',
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        FooterComponentMyTickets,
        RouterTestingModule,
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(FooterComponentMyTickets);
    component = fixture.componentInstance;

    component.order = mockOrder;

    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should render order id', () => {
    const el: HTMLElement = fixture.nativeElement;
    expect(el.textContent).toContain('order-123');
  });

  it('should open pdf when button is clicked', () => {
    spyOn(window, 'open');

    const button: HTMLButtonElement =
      fixture.nativeElement.querySelector('button');

    button.click();

    expect(window.open).toHaveBeenCalledWith(
      jasmine.stringContaining('/tickets/order-123/download'),
      '_blank'
    );
  });

  it('should disable button when isLoadingPdf is true', () => {
    component.isLoadingPdf.set(true);
    fixture.detectChanges();

    const button: HTMLButtonElement =
      fixture.nativeElement.querySelector('button');

    expect(button.disabled).toBeTrue();
  });

  it('should show pdf error message when pdfError is set', () => {
    component.pdfError.set('Error downloading PDF');
    fixture.detectChanges();

    const el: HTMLElement = fixture.nativeElement;
    expect(el.textContent).toContain('Error downloading PDF');
  });
});
