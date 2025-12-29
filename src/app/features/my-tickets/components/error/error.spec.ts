import 'zone.js';
import 'zone.js/testing';

import { TestBed } from '@angular/core/testing';
import MyTicketsError from './error';

describe('MyTicketsError', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyTicketsError],
    }).compileComponents();
  });

  function createComponent() {
    const fixture = TestBed.createComponent(MyTicketsError);
    fixture.componentInstance.retry = jasmine.createSpy('retry');
    fixture.detectChanges();
    return fixture;
  }

  it('should create', () => {
    const fixture = createComponent();
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should render error message', () => {
    const fixture = createComponent();
    const el: HTMLElement = fixture.nativeElement;

    expect(el.textContent).toContain('Error al cargar tus tickets');
    expect(el.textContent).toContain('Intenta nuevamente');
  });

  it('should call retry when clicking button', () => {
    const fixture = createComponent();
    const button: HTMLButtonElement =
      fixture.nativeElement.querySelector('button');

    button.click();

    expect(fixture.componentInstance.retry).toHaveBeenCalled();
  });
});
