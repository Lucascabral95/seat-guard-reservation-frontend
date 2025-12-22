import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadingCarousel } from './loading-carousel';

describe('LoadingCarousel', () => {
  let component: LoadingCarousel;
  let fixture: ComponentFixture<LoadingCarousel>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoadingCarousel]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoadingCarousel);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
