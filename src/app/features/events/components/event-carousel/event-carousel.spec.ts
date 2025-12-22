import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventCarousel } from './event-carousel';

describe('EventCarousel', () => {
  let component: EventCarousel;
  let fixture: ComponentFixture<EventCarousel>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EventCarousel]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EventCarousel);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
