import 'zone.js';
import 'zone.js/testing';

import { TestBed } from '@angular/core/testing';
import ListMyTickets from './list';
import { BuyStatus } from '../../interfaces';
import { provideRouter } from '@angular/router';

describe('ListMyTickets', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListMyTickets],
      providers: [provideRouter([])],
    }).compileComponents();
  });

  function createComponent() {
    const fixture = TestBed.createComponent(ListMyTickets);

    fixture.componentInstance.myTicketsResource = [
      {
        id: 'order-1',
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: 'user-1',
        amount: 10000,
        status: BuyStatus.COMPLETED,
        seatIds: ['seat-1'],
        eventName: 'Rock Festival',
        eventHour: '21:00',
        items: [
          {
            id: 'item-1',
            section: 'A',
            number: '1',
            price: 100,
            status: 'sold',
            createdAt: new Date(),
            updatedAt: new Date(),
            lockedBy: '',
            lockedAt: new Date(),
            eventId: 'event-1',
          },
        ],
      },
    ] as any;

    fixture.detectChanges();
    return fixture;
  }

  it('should create', () => {
    const fixture = createComponent();
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should render ticket card', () => {
    const fixture = createComponent();
    const el: HTMLElement = fixture.nativeElement;

    expect(el.textContent).toContain('Rock Festival');
    expect(el.textContent).toContain('Ver detalle');
  });
});
