import 'zone.js';
import 'zone.js/testing';

import { TestBed } from '@angular/core/testing';
import Toasts from './toasts';

describe('Toasts', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Toasts], // standalone
    }).compileComponents();
  });

  it('should create the component', () => {
    const fixture = TestBed.createComponent(Toasts);
    const component = fixture.componentInstance;

    expect(component).toBeTruthy();
  });

  it('should render default error message', () => {
    const fixture = TestBed.createComponent(Toasts);
    fixture.detectChanges();

    const el: HTMLElement = fixture.nativeElement;

    expect(el.textContent).toContain('Internal Server Error');
  });

  it('should render success state when type is success', () => {
    const fixture = TestBed.createComponent(Toasts);
    const component = fixture.componentInstance;

    component.type = 'success';
    component.message = 'Operation successful';
    fixture.detectChanges();

    const el: HTMLElement = fixture.nativeElement;

    expect(el.textContent).toContain('Operation successful');
  });

  it('should render error state when type is error', () => {
    const fixture = TestBed.createComponent(Toasts);
    const component = fixture.componentInstance;

    component.type = 'error';
    component.message = 'Something went wrong';
    fixture.detectChanges();

    const el: HTMLElement = fixture.nativeElement;

    expect(el.textContent).toContain('Something went wrong');
  });
});
