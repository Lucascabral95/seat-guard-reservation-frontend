import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyTicketsApp } from './my-tickets-app';

describe('MyTicketsApp', () => {
  let component: MyTicketsApp;
  let fixture: ComponentFixture<MyTicketsApp>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyTicketsApp]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyTicketsApp);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
