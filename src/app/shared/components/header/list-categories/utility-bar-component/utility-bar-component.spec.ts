import 'zone.js';
import 'zone.js/testing';

import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import UtilityBarComponent from './utility-bar-component';

describe('UtilityBarComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        UtilityBarComponent,
      ],
    }).compileComponents();
  });

  it('should create the component', () => {
    const fixture = TestBed.createComponent(UtilityBarComponent);
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should render country code AR', () => {
    const fixture = TestBed.createComponent(UtilityBarComponent);
    fixture.detectChanges();

    const el: HTMLElement = fixture.nativeElement;
    expect(el.textContent).toContain('AR');
  });

  it('should render categories links', () => {
    const fixture = TestBed.createComponent(UtilityBarComponent);
    const component = fixture.componentInstance;

    component.categories = [
      { name: 'Conciertos', url: '/events/concerts' },
      { name: 'Teatro', url: '/events/theatre' },
    ];

    fixture.detectChanges();

    const el: HTMLElement = fixture.nativeElement;
    const links = el.querySelectorAll('a');

    expect(links.length).toBe(2);
    expect(links[0].textContent).toContain('Conciertos');
    expect(links[1].textContent).toContain('Teatro');
  });
});
