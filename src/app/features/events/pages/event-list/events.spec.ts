import 'zone.js';
import 'zone.js/testing';

import { TestBed } from '@angular/core/testing';
import EventList from './events';
import { EventsService } from '../../service/events.service';
import { provideRouter } from '@angular/router';
import { createResourceMock } from '../../../../shared/testing/testing-utils';

describe('EventList', () => {
  let serviceMock: any;

  beforeEach(async () => {
    serviceMock = {
      getEvents: jasmine.createSpy().and.returnValue(createResourceMock()),
      getEventsByFilter: jasmine.createSpy().and.returnValue(createResourceMock()),
    };

    await TestBed.configureTestingModule({
      imports: [EventList],
      providers: [
        provideRouter([]),
        { provide: EventsService, useValue: serviceMock },
      ],
    }).compileComponents();
  });

  it('should create the page', () => {
    const fixture = TestBed.createComponent(EventList);
    fixture.detectChanges();

    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should render event grid', () => {
    const fixture = TestBed.createComponent(EventList);
    fixture.detectChanges();

    const el: HTMLElement = fixture.nativeElement;
    expect(el.querySelector('component-event-grid')).toBeTruthy();
  });

  it('should render 3 event carousels', () => {
    const fixture = TestBed.createComponent(EventList);
    fixture.detectChanges();

    const el: HTMLElement = fixture.nativeElement;
    expect(el.querySelectorAll('component-event-carousel').length).toBe(3);
  });

  it('should request events with limit', () => {
    TestBed.createComponent(EventList);
    expect(serviceMock.getEvents).toHaveBeenCalledWith(9);
  });
});
