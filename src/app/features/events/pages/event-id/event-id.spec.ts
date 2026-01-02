import { TestBed } from '@angular/core/testing';
import EventId from './event-id';
import { EventsService } from '../../service/events.service';
import { provideRouter } from '@angular/router';
import { createResourceMock } from '../../../../shared/testing/testing-utils';
import { SectionEventId } from '../../interfaces';

describe('EventId', () => {
  let serviceMock: any;

  beforeEach(async () => {
    serviceMock = {
      getEventByIdNew: jasmine.createSpy().and.returnValue(
        createResourceMock({ loading: true })
      ),
    };

    await TestBed.configureTestingModule({
      imports: [EventId],
      providers: [
        provideRouter([]),
        { provide: EventsService, useValue: serviceMock },
      ],
    }).compileComponents();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(EventId);
    fixture.componentRef.setInput('id', 'event-1');
    fixture.detectChanges();

    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should render loading state', () => {
    serviceMock.getEventByIdNew.and.returnValue(
      createResourceMock({ loading: true })
    );

    const fixture = TestBed.createComponent(EventId);
    fixture.componentRef.setInput('id', 'event-1');
    fixture.detectChanges();

    const el: HTMLElement = fixture.nativeElement;
    // Asegúrate que tu componente realmente tenga un elemento con esta clase
    // o el test fallará si el HTML no coincide.
    expect(el.innerHTML).toContain('animate-pulse');
  });

  it('should change section when calling changeSectionEventId', () => {
    const fixture = TestBed.createComponent(EventId);
    fixture.componentRef.setInput('id', 'event-1');
    fixture.detectChanges();

    fixture.componentInstance.changeSectionEventId(SectionEventId.about);

    expect(fixture.componentInstance.sectionEventId()).toBe(SectionEventId.about);
  });
});
