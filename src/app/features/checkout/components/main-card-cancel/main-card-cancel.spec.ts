import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainCardCancel } from './main-card-cancel';

describe('MainCardCancel', () => {
  let component: MainCardCancel;
  let fixture: ComponentFixture<MainCardCancel>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MainCardCancel]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainCardCancel);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
