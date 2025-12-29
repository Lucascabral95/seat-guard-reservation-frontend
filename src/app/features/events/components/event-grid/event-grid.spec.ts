import 'zone.js';
import 'zone.js/testing';

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EventGrid } from './event-grid';

function createResourceMock({
  loading = false,
  error = false,
  value = [],
} = {}) {
  return {
    isLoading: () => loading,
    status: () => (error ? 'error' : 'success'),
    value: () => value,
    reload: jasmine.createSpy('reload'),
  };
}

describe('EventGrid', () => {
  let component: EventGrid;
  let fixture: ComponentFixture<EventGrid>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EventGrid],
    }).compileComponents();

    fixture = TestBed.createComponent(EventGrid);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    component.eventsResource = createResourceMock() as any;
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  it('should render loading state', () => {
    component.eventsResource = createResourceMock({ loading: true }) as any;
    fixture.detectChanges();

    const el: HTMLElement = fixture.nativeElement;
    expect(el.querySelectorAll('.animate-pulse').length).toBeGreaterThan(0);
  });

  it('should render error state', () => {
    component.eventsResource = createResourceMock({ error: true }) as any;
    fixture.detectChanges();

    const el: HTMLElement = fixture.nativeElement;
    expect(el.textContent).toContain('No se pudieron cargar los eventos');
  });
});
