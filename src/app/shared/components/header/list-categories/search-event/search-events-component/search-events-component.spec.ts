import 'zone.js';
import 'zone.js/testing';

import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import SearchEventsComponent from './search-events-component';

function createResourceMock(options: {
  loading?: boolean;
  value?: any[];
}) {
  return {
    isLoading: () => options.loading ?? false,
    value: () => options.value ?? [],
  };
}

describe('SearchEventsComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        SearchEventsComponent,
      ],
    }).compileComponents();
  });

  it('should create the component', () => {
    const fixture = TestBed.createComponent(SearchEventsComponent);
    fixture.componentInstance.visible = false;
    fixture.componentInstance.resource = createResourceMock({});
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should not render anything when visible is false', () => {
    const fixture = TestBed.createComponent(SearchEventsComponent);
    const component = fixture.componentInstance;

    component.visible = false;
    component.resource = createResourceMock({});

    fixture.detectChanges();

    const el: HTMLElement = fixture.nativeElement;
    expect(el.textContent?.trim()).toBe('');
  });

  it('should render loading state', () => {
    const fixture = TestBed.createComponent(SearchEventsComponent);
    const component = fixture.componentInstance;

    component.visible = true;
    component.resource = createResourceMock({ loading: true });

    fixture.detectChanges();

    const el: HTMLElement = fixture.nativeElement;
    expect(el.textContent).toContain('Buscando eventos');
  });

  it('should render empty state when no events are found', () => {
    const fixture = TestBed.createComponent(SearchEventsComponent);
    const component = fixture.componentInstance;

    component.visible = true;
    component.resource = createResourceMock({ value: [] });

    fixture.detectChanges();

    const el: HTMLElement = fixture.nativeElement;
    expect(el.textContent).toContain('No se encontraron eventos');
  });

  it('should render list of events when resource has values', () => {
    const fixture = TestBed.createComponent(SearchEventsComponent);
    const component = fixture.componentInstance;

    component.visible = true;
    component.resource = createResourceMock({
      value: [
        {
          id: '1',
          name: 'Evento Test',
          location: 'Buenos Aires',
          date: new Date(),
          posterUrl: 'test.jpg',
        },
      ],
    });

    fixture.detectChanges();

    const el: HTMLElement = fixture.nativeElement;
    expect(el.textContent).toContain('Evento Test');
    expect(el.querySelectorAll('a').length).toBe(1);
  });

  it('should emit close event when selecting an item', () => {
    const fixture = TestBed.createComponent(SearchEventsComponent);
    const component = fixture.componentInstance;

    component.visible = true;
    component.resource = createResourceMock({
      value: [
        {
          id: '1',
          name: 'Evento Test',
          location: 'Buenos Aires',
          date: new Date(),
          posterUrl: 'test.jpg',
        },
      ],
    });

    spyOn(component.close, 'emit');

    fixture.detectChanges();

    const link = fixture.nativeElement.querySelector('a') as HTMLElement;
    link.click();

    expect(component.close.emit).toHaveBeenCalled();
  });
});
