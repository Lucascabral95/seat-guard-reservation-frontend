import 'zone.js';
import 'zone.js/testing';

import { TestBed } from '@angular/core/testing';
import { SeatsService } from './SeatsService.service';
import { provideRouter } from '@angular/router';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('SeatsService', () => {
  let service: SeatsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
      ],
      providers: [
        SeatsService,
        provideRouter([]),
      ],
    });

    service = TestBed.inject(SeatsService);
  });

  it('should create seat resource by id', () => {
    let resource: any;

    TestBed.runInInjectionContext(() => {
      resource = service.getSeatById('seat-1');
    });

    expect(resource).toBeTruthy();
    expect(typeof resource.reload).toBe('function');
    expect(typeof resource.value).toBe('function');
  });

  it('should not throw when reloading seat resource', () => {
    TestBed.runInInjectionContext(() => {
      const resource = service.getSeatById('seat-1');
      expect(() => resource.reload()).not.toThrow();
    });
  });
});
