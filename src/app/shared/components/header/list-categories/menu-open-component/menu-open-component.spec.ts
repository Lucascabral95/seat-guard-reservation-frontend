import 'zone.js';
import 'zone.js/testing';

import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import MenuOpenComponent from './menu-open-component';

describe('MenuOpenComponent', () => {
  const headerServiceMock = {
    genders: () => [
      { name: 'Conciertos', url: '/events/concerts' },
      { name: 'Teatro', url: '/events/theatre' },
    ],
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        MenuOpenComponent, // standalone
      ],
    }).compileComponents();
  });

  it('should create the component', () => {
    const fixture = TestBed.createComponent(MenuOpenComponent);
    const component = fixture.componentInstance;

    component.authenticated = false;
    component.headerService = headerServiceMock;

    expect(component).toBeTruthy();
  });

  it('should render gender links from headerService', () => {
    const fixture = TestBed.createComponent(MenuOpenComponent);
    const component = fixture.componentInstance;

    component.authenticated = false;
    component.headerService = headerServiceMock;

    fixture.detectChanges();

    const el: HTMLElement = fixture.nativeElement;
    const links = el.querySelectorAll('a');

    expect(links.length).toBe(2);
    expect(links[0].textContent).toContain('Conciertos');
    expect(links[1].textContent).toContain('Teatro');
  });

  it('should show "Mis entradas" when authenticated', () => {
    const fixture = TestBed.createComponent(MenuOpenComponent);
    const component = fixture.componentInstance;

    component.authenticated = true;
    component.headerService = headerServiceMock;

    fixture.detectChanges();

    const el: HTMLElement = fixture.nativeElement;
    expect(el.textContent).toContain('Mis entradas');
  });

  it('should not show "Mis entradas" when not authenticated', () => {
    const fixture = TestBed.createComponent(MenuOpenComponent);
    const component = fixture.componentInstance;

    component.authenticated = false;
    component.headerService = headerServiceMock;

    fixture.detectChanges();

    const el: HTMLElement = fixture.nativeElement;
    expect(el.textContent).not.toContain('Mis entradas');
  });
});
