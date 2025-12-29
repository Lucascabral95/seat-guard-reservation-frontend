import 'zone.js';
import 'zone.js/testing';

import { TestBed } from '@angular/core/testing';
import LoadingMyTickets from './loading';

describe('LoadingMyTickets', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoadingMyTickets],
    }).compileComponents();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(LoadingMyTickets);
    fixture.detectChanges();

    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should render loading skeletons', () => {
    const fixture = TestBed.createComponent(LoadingMyTickets);
    fixture.detectChanges();

    const el: HTMLElement = fixture.nativeElement;

    // skeleton grid
    expect(el.querySelector('.animate-pulse')).toBeTruthy();

    // 6 cards
    const cards = el.querySelectorAll('.border');
    expect(cards.length).toBe(6);
  });
});
