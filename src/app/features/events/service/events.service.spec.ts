import 'zone.js';
import 'zone.js/testing';

import { TestBed } from '@angular/core/testing';
import { EventsService } from './events.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('EventsService', () => {
  let service: EventsService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [EventsService],
    });

    service = TestBed.inject(EventsService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should fetch event by id and update signals', () => {
    service.getEventById('event-1').subscribe();

    const req = httpMock.expectOne(
      'http://localhost:4000/api/v1/events/event-1'
    );

    req.flush({
      id: 'event-1',
      name: 'Test Event',
      date: new Date().toISOString(),
    });

    expect(service.selectedEvent()).toBeTruthy();
  });
});
