import 'zone.js';
import 'zone.js/testing';

import { TestBed } from '@angular/core/testing';
import EventGender from './event-gender';
import { EventsService } from '../../service/events.service';
import { Gender } from '../../interfaces/filter-events.interface';
import { provideRouter } from '@angular/router';
import { createResourceMock } from '../../../../shared/testing/testing-utils';

describe('EventGender', () => {
  let serviceMock: any;

  beforeEach(async () => {
    serviceMock = {
      getEventsByFilter: jasmine.createSpy().and.returnValue(createResourceMock<{gender: Gender}>()),
    };

    await TestBed.configureTestingModule({
      imports: [EventGender],
      providers: [
        provideRouter([]),
        { provide: EventsService, useValue: serviceMock },
      ],
    }).compileComponents();
  });

  it('should create the component', () => {
    const fixture = TestBed.createComponent(EventGender);
    fixture.componentRef.setInput('gender', Gender.Rock);
    fixture.detectChanges();

    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should call getEventsByFilter when gender is valid', () => {
    const fixture = TestBed.createComponent(EventGender);
    fixture.componentRef.setInput('gender', Gender.Rock);
    fixture.detectChanges();

    expect(serviceMock.getEventsByFilter).toHaveBeenCalled();
  });
});
