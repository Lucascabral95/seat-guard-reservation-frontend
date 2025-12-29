import 'zone.js';
import 'zone.js/testing';

import { TestBed } from '@angular/core/testing';
import { ErrorEventCarousel } from './error-event-carousel';

describe('ErrorEventCarousel', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ErrorEventCarousel],
    }).compileComponents();
  });

  it('should create the component', () => {
    const fixture = TestBed.createComponent(ErrorEventCarousel);
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should render error message', () => {
    const fixture = TestBed.createComponent(ErrorEventCarousel);
    fixture.detectChanges();

    const el: HTMLElement = fixture.nativeElement;
    expect(el.textContent).toContain('No se pudieron cargar los eventos.');
  });

  it('should emit retry event when button is clicked', () => {
    const fixture = TestBed.createComponent(ErrorEventCarousel);
    const component = fixture.componentInstance;

    const spy = jasmine.createSpy('retry');
    component.retry.subscribe(spy);

    fixture.detectChanges();

    const button = fixture.nativeElement.querySelector('button') as HTMLButtonElement;
    button.click();

    expect(spy).toHaveBeenCalled();
  });
});
