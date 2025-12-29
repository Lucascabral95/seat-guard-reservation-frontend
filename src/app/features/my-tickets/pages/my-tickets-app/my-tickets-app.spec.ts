import 'zone.js';
import 'zone.js/testing';

import { TestBed } from '@angular/core/testing';
import { provideRouter, Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

import MyTicketsApp from './my-tickets-app';
import { MyTicketsService } from '../../service/my-tickets.service';
import { BuyStatus } from '../../interfaces';
import { createResourceMock } from '../../../../shared/testing/testing-utils';

describe('MyTicketsApp', () => {
  let serviceMock: any;

  const mockTickets = [
    { id: '1', status: BuyStatus.COMPLETED },
    { id: '2', status: BuyStatus.PENDING },
    { id: '3', status: BuyStatus.FAILED },
  ];

  beforeEach(async () => {
    serviceMock = {
      getMyTickets: jasmine.createSpy().and.returnValue(
        createResourceMock({
          value: mockTickets,
        })
      ),
    };

    await TestBed.configureTestingModule({
      imports: [MyTicketsApp],
      providers: [
        provideRouter([]),
        {
          provide: ActivatedRoute,
          useValue: {
            queryParamMap: {
              subscribe: (fn: any) =>
                fn({
                  get: () => null,
                }),
            },
          },
        },
        {
          provide: MyTicketsService,
          useValue: serviceMock,
        },
      ],
    }).compileComponents();
  });

  function createComponent() {
    const fixture = TestBed.createComponent(MyTicketsApp);
    fixture.detectChanges();
    return fixture;
  }

  it('should create the component', () => {
    const fixture = createComponent();
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should load tickets from service', () => {
    createComponent();
    expect(serviceMock.getMyTickets).toHaveBeenCalled();
  });

  it('should show all tickets by default', () => {
    const fixture = createComponent();
    const component = fixture.componentInstance;

    expect(component.filteredTickets().length).toBe(3);
  });

  it('should filter tickets by status', () => {
    const fixture = createComponent();
    const component = fixture.componentInstance;

    component.onFilterChange(BuyStatus.COMPLETED);

    expect(component.filteredTickets().length).toBe(1);
    expect(component.filteredTickets()[0].status).toBe(BuyStatus.COMPLETED);
  });

  it('should reset filter when selecting all', () => {
    const fixture = createComponent();
    const component = fixture.componentInstance;

    component.onFilterChange(BuyStatus.PENDING);
    component.onFilterChange('all');

    expect(component.filteredTickets().length).toBe(3);
  });

  it('should update selectedStatus from query params', () => {
    TestBed.overrideProvider(ActivatedRoute, {
      useValue: {
        queryParamMap: {
          subscribe: (fn: any) =>
            fn({
              get: () => BuyStatus.FAILED,
            }),
        },
      },
    });

    const fixture = TestBed.createComponent(MyTicketsApp);
    fixture.detectChanges();

    expect(fixture.componentInstance.selectedStatus()).toBe(BuyStatus.FAILED);
  });

  it('should navigate when filter changes', () => {
    const fixture = createComponent();
    const component = fixture.componentInstance;
    const router = TestBed.inject<any>(Router);

    spyOn(router, 'navigate');

    component.onFilterChange(BuyStatus.PENDING);

    expect(router.navigate).toHaveBeenCalled();
  });
});
