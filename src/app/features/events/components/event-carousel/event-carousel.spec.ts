import 'zone.js';
import 'zone.js/testing';

import { TestBed } from '@angular/core/testing';
import EventCarousel from './event-carousel';
import { EventsService } from '../../service/events.service';
import { Gender } from '../../interfaces/filter-events.interface';
import { provideRouter } from '@angular/router';
import { createResourceMock } from '../../../../shared/testing/testing-utils';

describe('EventCarousel', () => {
  let serviceMock: any;

  beforeEach(async () => {
    serviceMock = {
      getEventsByFilter: jasmine
        .createSpy()
        .and.returnValue(createResourceMock()),
    };

    await TestBed.configureTestingModule({
      imports: [EventCarousel],
      providers: [
        provideRouter([]),
        { provide: EventsService, useValue: serviceMock },
      ],
    }).compileComponents();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(EventCarousel);

    fixture.componentRef.setInput('title', 'Rock');
    fixture.componentRef.setInput('gender', Gender.Rock);

    fixture.detectChanges();

    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should call EventsService.getEventsByFilter', () => {
    const fixture = TestBed.createComponent(EventCarousel);

    fixture.componentRef.setInput('title', 'Rock');
    fixture.componentRef.setInput('gender', Gender.Rock);

    fixture.detectChanges();

    expect(serviceMock.getEventsByFilter).toHaveBeenCalled();
  });
});
