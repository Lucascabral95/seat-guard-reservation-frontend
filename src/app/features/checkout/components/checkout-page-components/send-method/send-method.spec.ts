import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SendMethod } from './send-method';

describe('SendMethod', () => {
  let component: SendMethod;
  let fixture: ComponentFixture<SendMethod>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SendMethod]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SendMethod);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
