import 'zone.js';
import 'zone.js/testing';

import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { By } from '@angular/platform-browser';
import { RouterLink } from '@angular/router';

import ComponentActionsButtons from './component-actions-buttons';

describe('ComponentActionsButtons', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        ComponentActionsButtons,
      ],
    }).compileComponents();
  });

  it('should create the component', () => {
    const fixture = TestBed.createComponent(ComponentActionsButtons);
    const component = fixture.componentInstance;

    component.order_id = 'order-123';

    expect(component).toBeTruthy();
  });

  it('should render "Volver al Inicio" link', () => {
    const fixture = TestBed.createComponent(ComponentActionsButtons);
    fixture.componentInstance.order_id = 'order-123';

    fixture.detectChanges();

    const el: HTMLElement = fixture.nativeElement;
    expect(el.textContent).toContain('Volver al Inicio');
  });

  it('should render "Ver resumen de compra" button', () => {
    const fixture = TestBed.createComponent(ComponentActionsButtons);
    fixture.componentInstance.order_id = 'order-123';

    fixture.detectChanges();

    const el: HTMLElement = fixture.nativeElement;
    expect(el.textContent).toContain('Ver resumen de compra');
  });

  it('should bind order_id to routerLink for purchase summary', () => {
    const fixture = TestBed.createComponent(ComponentActionsButtons);
    fixture.componentInstance.order_id = 'order-123';

    fixture.detectChanges();

    const routerLinks = fixture.debugElement.queryAll(
      By.directive(RouterLink)
    );

    const routerLinkInstance = routerLinks[1].injector.get(RouterLink);

    expect((routerLinkInstance as any).urlTree.toString()).toContain('order-123');
  });
});
