import 'zone.js';
import 'zone.js/testing';

import { ComponentFixture, TestBed } from '@angular/core/testing';
import EventIdAbout from './event-id-about';

describe('EventIdAbout', () => {
  let component: EventIdAbout;
  let fixture: ComponentFixture<EventIdAbout>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EventIdAbout],
    }).compileComponents();

    fixture = TestBed.createComponent(EventIdAbout);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render description input', () => {
    component.description = 'Descripción de prueba';
    fixture.detectChanges();

    const el: HTMLElement = fixture.nativeElement;
    expect(el.textContent).toContain('Descripción de prueba');
  });
});
