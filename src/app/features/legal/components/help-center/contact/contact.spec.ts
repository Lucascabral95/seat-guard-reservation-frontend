import 'zone.js';
import 'zone.js/testing';

import { ComponentFixture, TestBed } from '@angular/core/testing';
import Contact from './contact';

describe('Contact', () => {
  let fixture: ComponentFixture<Contact>;
  let component: Contact;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Contact],
    }).compileComponents();

    fixture = TestBed.createComponent(Contact);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render title and description', () => {
    const el: HTMLElement = fixture.nativeElement;

    expect(el.textContent).toContain('¿No encuentras tu respuesta?');
    expect(el.textContent).toContain('escríbenos');
  });

  it('should render support email link', () => {
    const el: HTMLElement = fixture.nativeElement;
    const link = el.querySelector('a');

    expect(link).toBeTruthy();
    expect(link?.getAttribute('href')).toBe('mailto:support@seatguard.com');
    expect(link?.textContent).toContain('support@seatguard.com');
  });
});
