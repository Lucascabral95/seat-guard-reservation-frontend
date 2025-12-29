import 'zone.js';
import 'zone.js/testing';

import { TestBed } from '@angular/core/testing';
import LoadingCarousel from './loading-carousel';

describe('LoadingCarousel', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoadingCarousel],
    }).compileComponents();
  });

  it('should create the component', () => {
    const fixture = TestBed.createComponent(LoadingCarousel);
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should render empty state message', () => {
    const fixture = TestBed.createComponent(LoadingCarousel);
    fixture.detectChanges();

    const el: HTMLElement = fixture.nativeElement;

    expect(el.textContent).toContain(
      'No hay eventos disponibles en esta categoría.'
    );
  });
});
