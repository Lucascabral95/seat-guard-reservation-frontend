import 'zone.js';
import 'zone.js/testing';

import { TestBed } from '@angular/core/testing';
import MyTicketLoading from './my-ticket-loading';

describe('MyTicketLoading', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyTicketLoading],
    }).compileComponents();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(MyTicketLoading);
    fixture.detectChanges();

    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should render loading skeleton', () => {
    const fixture = TestBed.createComponent(MyTicketLoading);
    fixture.detectChanges();

    const el: HTMLElement = fixture.nativeElement;

    const container = el.querySelector('.animate-pulse');
    expect(container).toBeTruthy();

    const blocks = container!.children;
    expect(blocks.length).toBe(3);
  });
});
