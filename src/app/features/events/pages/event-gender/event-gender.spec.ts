import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventGender } from './event-gender';

describe('EventGender', () => {
  let component: EventGender;
  let fixture: ComponentFixture<EventGender>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EventGender]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EventGender);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
