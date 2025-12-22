import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventId } from './event-id';

describe('EventId', () => {
  let component: EventId;
  let fixture: ComponentFixture<EventId>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EventId]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EventId);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
