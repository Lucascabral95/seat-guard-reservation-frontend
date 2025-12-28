import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyTicketApp } from './my-ticket-app';

describe('MyTicketApp', () => {
  let component: MyTicketApp;
  let fixture: ComponentFixture<MyTicketApp>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyTicketApp]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyTicketApp);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
