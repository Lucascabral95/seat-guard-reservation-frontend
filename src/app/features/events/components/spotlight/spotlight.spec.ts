import 'zone.js';
import 'zone.js/testing';

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { By } from '@angular/platform-browser';
import { Router, RouterLink } from '@angular/router';
import { signal } from '@angular/core';

import Spotlight from './spotlight';
import { EventsService } from '../../service/events.service';
import { Gender } from '../../interfaces/filter-events.interface';

describe('Spotlight', () => {
  let fixture: ComponentFixture<Spotlight>;
  let router: Router;

  const mockEvent = {
    id: '1',
    createdAt: new Date(),
    updatedAt: new Date(),
    name: 'Dua Lipa',
    description: 'Live concert',
    location: 'Buenos Aires',
    date: new Date(),
    price: 100,
    posterUrl: 'poster.jpg',
    gender: Gender.Pop,
    availability: 'AVAILABLE',
    seats: [],
  };

  const eventsResourceMock = {
    value: signal([mockEvent]),
    isLoading: () => false,
    error: () => null,
  };

  const eventsServiceMock = {
    getEventsByFilter: () => eventsResourceMock,
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Spotlight, RouterTestingModule],
      providers: [
        { provide: EventsService, useValue: eventsServiceMock },
      ],
    }).compileComponents();

    router = TestBed.inject(Router);

    fixture = TestBed.createComponent(Spotlight);
    fixture.detectChanges();
  });

  it('should generate correct routerLink', () => {
    const debugEl = fixture.debugElement.query(
      By.directive(RouterLink)
    );

    const routerLink = debugEl.injector.get(RouterLink);

    expect(routerLink.urlTree).not.toBeNull();

    const url = router.serializeUrl(routerLink.urlTree!);

    expect(url).toBe('/dentro/events/id/1');
  });
});
