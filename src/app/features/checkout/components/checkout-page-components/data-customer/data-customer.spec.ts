import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataCustomer } from './data-customer';

describe('DataCustomer', () => {
  let component: DataCustomer;
  let fixture: ComponentFixture<DataCustomer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DataCustomer]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DataCustomer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
