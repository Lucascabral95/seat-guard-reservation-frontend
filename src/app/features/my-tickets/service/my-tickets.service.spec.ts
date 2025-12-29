import 'zone.js';
import 'zone.js/testing';

import { TestBed } from '@angular/core/testing';
import { MyTicketsService } from './my-tickets.service';
import { AuthLoginService } from '../../../auth/login/service/auth-login-service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('MyTicketsService', () => {
  let service: MyTicketsService;

  const authServiceMock = {
    getPayloadJWT: jasmine.createSpy().and.returnValue({ id: 'user-1' }),
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        MyTicketsService,
        { provide: AuthLoginService, useValue: authServiceMock },
      ],
    });

    service = TestBed.inject(MyTicketsService);
  });

  it('should create my tickets resource', () => {
    let resource: any;

    TestBed.runInInjectionContext(() => {
      resource = service.getMyTickets();
    });

    expect(resource).toBeTruthy();
    expect(typeof resource.reload).toBe('function');
  });

  it('should create ticket-by-id resource', () => {
    let resource: any;

    TestBed.runInInjectionContext(() => {
      resource = service.getMyTicketById(() => 'order-1');
    });

    expect(resource).toBeTruthy();
    expect(typeof resource.reload).toBe('function');
  });

  it('should not throw when reloading ticket resource', () => {
    let resource: any;

    TestBed.runInInjectionContext(() => {
      resource = service.getMyTicketById(() => 'order-1');
      expect(() => resource.reload()).not.toThrow();
    });
  });
});
