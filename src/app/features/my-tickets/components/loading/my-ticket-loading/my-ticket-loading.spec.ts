import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyTicketLoading } from './my-ticket-loading';

describe('MyTicketLoading', () => {
  let component: MyTicketLoading;
  let fixture: ComponentFixture<MyTicketLoading>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyTicketLoading]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyTicketLoading);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
