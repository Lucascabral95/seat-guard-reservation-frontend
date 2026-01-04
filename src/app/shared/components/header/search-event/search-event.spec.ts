// import 'zone.js';
// import 'zone.js/testing';

// import { Component } from '@angular/core';
// import { TestBed } from '@angular/core/testing';

// import SearchEvent from './search-event';
// import { EventsService } from '../../../../features/events/service/events.service';

// /* 🔹 Stub del hijo */
// @Component({
//   selector: 'component-search-events',
//   standalone: true,
//   template: '',
// })
// class SearchEventsStub {}

// /* 🔹 Mock del servicio */
// class EventsServiceMock {
//   getEventsByFilter() {
//     return {} as any;
//   }
// }

// describe('SearchEvent', () => {
//   beforeEach(async () => {
//     await TestBed.configureTestingModule({
//       imports: [SearchEvent],
//       providers: [
//         { provide: EventsService, useClass: EventsServiceMock },
//       ],
//     })
//       .overrideComponent(SearchEvent, {
//         set: {
//           imports: [SearchEventsStub], // 🔥 reemplaza hijo real
//         },
//       })
//       .compileComponents();
//   });

//   it('should create the component', () => {
//     const fixture = TestBed.createComponent(SearchEvent);
//     expect(fixture.componentInstance).toBeTruthy();
//   });

//   it('should update searchText and visible on input', () => {
//     const fixture = TestBed.createComponent(SearchEvent);
//     const component = fixture.componentInstance;

//     component.onInput('ab');

//     expect(component.searchText()).toBe('ab');
//     expect(component.visible()).toBeTrue();
//   });

//   it('should hide results when input length < 2', () => {
//     const fixture = TestBed.createComponent(SearchEvent);
//     const component = fixture.componentInstance;

//     component.onInput('a');

//     expect(component.visible()).toBeFalse();
//   });

//   it('should compute filters only when input length >= 2', () => {
//     const fixture = TestBed.createComponent(SearchEvent);
//     const component = fixture.componentInstance;

//     component.onInput('a');
//     expect(component.filters()).toBeUndefined();

//     component.onInput('rock');
//     expect(component.filters()).toEqual({ name: 'rock' });
//   });

//   it('should close results', () => {
//     const fixture = TestBed.createComponent(SearchEvent);
//     const component = fixture.componentInstance;

//     component.onInput('test');
//     component.closeResults();

//     expect(component.visible()).toBeFalse();
//   });
// });
