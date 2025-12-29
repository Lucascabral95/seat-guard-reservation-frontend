import 'zone.js';
import 'zone.js/testing';

import { TestBed } from '@angular/core/testing';
import SeatsMyTicket from './seats';
import { CommonModule } from '@angular/common';

describe('SeatsMyTicket', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SeatsMyTicket, CommonModule],
    }).compileComponents();
  });

  function createComponent(order: any) {
    const fixture = TestBed.createComponent(SeatsMyTicket);
    fixture.componentInstance.order = order;
    fixture.detectChanges();
    return fixture;
  }

  it('should create', () => {
    const fixture = createComponent({
      items: [],
    });

    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should render seat section and number', () => {
    const fixture = createComponent({
      items: [
        {
          id: 'seat-1',
          section: 'A',
          number: '1',
          price: 1000,
          status: 'sold',
          updatedAt: new Date(),
        },
      ],
    });

    const el: HTMLElement = fixture.nativeElement;

    expect(el.textContent).toContain('A · 1');
  });

  it('should render formatted price and status', () => {
    const fixture = createComponent({
      items: [
        {
          id: 'seat-1',
          section: 'A',
          number: '1',
          price: 1000,
          status: 'sold',
          updatedAt: new Date(),
        },
        {
          id: 'seat-2',
          section: 'A',
          number: '2',
          price: 2000,
          status: 'reserved',
          updatedAt: new Date(),
        },
      ],
    });

    const el: HTMLElement = fixture.nativeElement;

    expect(el.textContent).toContain('$1,000');
    expect(el.textContent).toContain('$2,000');

    expect(el.textContent).toContain('sold');
    expect(el.textContent).toContain('reserved');
  });
});
