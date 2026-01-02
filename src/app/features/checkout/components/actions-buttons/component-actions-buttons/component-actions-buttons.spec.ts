import 'zone.js';
import 'zone.js/testing';

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { provideZoneChangeDetection } from '@angular/core';

import ComponentActionsButtons from './component-actions-buttons';

describe('ComponentActionsButtons', () => {
  let fixture: ComponentFixture<ComponentActionsButtons>;
  let component: ComponentActionsButtons;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        ComponentActionsButtons,
        RouterTestingModule,
      ],
      providers: [
        provideZoneChangeDetection(),
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(ComponentActionsButtons);
    component = fixture.componentInstance;

    component.order_id = 'order-123';

    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should render navigation buttons', () => {
    const el: HTMLElement = fixture.nativeElement;

    const anchorLinks = el.querySelectorAll('a');
    const buttons = el.querySelectorAll('button');

    expect(anchorLinks.length).toBe(1);
    expect(buttons.length).toBe(2);
  });

  it('should open pdf in new tab when clicking the button', () => {
    spyOn(window, 'open');

    const buttons = fixture.nativeElement.querySelectorAll('button');
    const viewTicketButton: HTMLButtonElement = buttons[1];

    viewTicketButton.click();

    expect(window.open).toHaveBeenCalledWith(
      jasmine.stringContaining('/tickets/order-123/download'),
      '_blank'
    );
  });

  it('should disable view ticket button when isLoadingPdf is true', () => {
    component.isLoadingPdf.set(true);
    fixture.detectChanges();

    const buttons = fixture.nativeElement.querySelectorAll('button');
    const viewTicketButton: HTMLButtonElement = buttons[1];

    expect(viewTicketButton.disabled).toBeTrue();
  });

  it('should show loading text when isLoadingPdf is true', () => {
    component.isLoadingPdf.set(true);
    fixture.detectChanges();

    const el: HTMLElement = fixture.nativeElement;
    expect(el.textContent).toContain('Abriendo comprobante');
  });

  it('should show default text when isLoadingPdf is false', () => {
    component.isLoadingPdf.set(false);
    fixture.detectChanges();

    const el: HTMLElement = fixture.nativeElement;
    expect(el.textContent).toContain('Visualizar comprobante');
  });
});
