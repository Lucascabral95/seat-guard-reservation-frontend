import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllSeatsPages } from './all-seats-pages';

describe('AllSeatsPages', () => {
  let component: AllSeatsPages;
  let fixture: ComponentFixture<AllSeatsPages>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AllSeatsPages]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllSeatsPages);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
