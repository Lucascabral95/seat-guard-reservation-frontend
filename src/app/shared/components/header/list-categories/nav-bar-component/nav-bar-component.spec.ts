import 'zone.js';
import 'zone.js/testing';

import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import NavBarComponent, { NavItem } from './nav-bar-component';

describe('NavBarComponent', () => {
  const gendersMock: NavItem[] = [
    { name: 'Conciertos', url: '/events/concerts' },
    { name: 'Teatro', url: '/events/theatre' },
  ];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        NavBarComponent, // standalone
      ],
    }).compileComponents();
  });

  it('should create the component', () => {
    const fixture = TestBed.createComponent(NavBarComponent);
    const component = fixture.componentInstance;

    component.authenticated = false;
    component.genders = gendersMock;

    expect(component).toBeTruthy();
  });

  it('should render gender navigation links', () => {
    const fixture = TestBed.createComponent(NavBarComponent);
    const component = fixture.componentInstance;

    component.authenticated = false;
    component.genders = gendersMock;

    fixture.detectChanges();

    const el: HTMLElement = fixture.nativeElement;
    const links = el.querySelectorAll('nav a');

    expect(links.length).toBe(2);
    expect(links[0].textContent).toContain('Conciertos');
    expect(links[1].textContent).toContain('Teatro');
  });

  it('should emit goToLogin when user is not authenticated and button is clicked', () => {
    const fixture = TestBed.createComponent(NavBarComponent);
    const component = fixture.componentInstance;

    component.authenticated = false;
    component.genders = gendersMock;

    const spy = jasmine.createSpy('goToLogin');
    component.goToLogin.subscribe(spy);

    fixture.detectChanges();

    const button = fixture.nativeElement.querySelector(
      'button'
    ) as HTMLButtonElement;

    button.click();

    expect(spy).toHaveBeenCalled();
  });

  it('should emit logout when user is authenticated and logout button is clicked', () => {
    const fixture = TestBed.createComponent(NavBarComponent);
    const component = fixture.componentInstance;

    component.authenticated = true;
    component.genders = gendersMock;

    const spy = jasmine.createSpy('logout');
    component.logout.subscribe(spy);

    fixture.detectChanges();

    const buttons = fixture.nativeElement.querySelectorAll('button');
    const logoutButton = buttons[0] as HTMLButtonElement;

    logoutButton.click();

    expect(spy).toHaveBeenCalled();
  });

  it('should emit toggleMenu when menu button is clicked', () => {
    const fixture = TestBed.createComponent(NavBarComponent);
    const component = fixture.componentInstance;

    component.authenticated = false;
    component.genders = gendersMock;

    const spy = jasmine.createSpy('toggleMenu');
    component.toggleMenu.subscribe(spy);

    fixture.detectChanges();

    const menuButton = fixture.nativeElement.querySelector(
      'button.lg\\:hidden'
    ) as HTMLButtonElement;

    menuButton.click();

    expect(spy).toHaveBeenCalled();
  });
});
