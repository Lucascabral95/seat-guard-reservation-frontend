import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorEventCarousel } from './error-event-carousel';

describe('ErrorEventCarousel', () => {
  let component: ErrorEventCarousel;
  let fixture: ComponentFixture<ErrorEventCarousel>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ErrorEventCarousel]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ErrorEventCarousel);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
