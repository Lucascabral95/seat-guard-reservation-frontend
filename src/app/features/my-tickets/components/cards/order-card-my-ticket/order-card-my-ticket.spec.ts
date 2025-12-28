import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderCardMyTicket } from './order-card-my-ticket';

describe('OrderCardMyTicket', () => {
  let component: OrderCardMyTicket;
  let fixture: ComponentFixture<OrderCardMyTicket>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrderCardMyTicket]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrderCardMyTicket);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
