import 'zone.js';
import 'zone.js/testing';

import { ComponentFixture, TestBed } from '@angular/core/testing';
import CookiesAuditory from './cookies-auditory';
import { CookieType } from '../../../interfaces/components';

describe('CookiesAuditory', () => {
  let fixture: ComponentFixture<CookiesAuditory>;
  let component: CookiesAuditory;

  const cookiesMock: CookieType[] = [
    {
      name: 'tokenAccess',
      provider: 'SeatGuard',
      duration: 'Session',
      purpose: 'Auth',
      category: 'necessary',
    },
  ];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CookiesAuditory],
    }).compileComponents();

    fixture = TestBed.createComponent(CookiesAuditory);
    component = fixture.componentInstance;

    component.cookies = cookiesMock;
    component.filteredCookies = cookiesMock;
    component.activeFilter = 'all';
    component.definitions = {
      Session: 'Cookie de sesión',
    };

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render title', () => {
    const el: HTMLElement = fixture.nativeElement;
    expect(el.textContent).toContain('Auditoría de Cookies Activas');
  });

  it('should render cookie rows', () => {
    const el: HTMLElement = fixture.nativeElement;
    expect(el.querySelectorAll('tbody tr').length).toBe(1);
    expect(el.textContent).toContain('tokenAccess');
  });

  it('should emit filterChange when clicking filter button', () => {
    spyOn(component.filterChange, 'emit');

    const button: HTMLButtonElement =
      fixture.nativeElement.querySelector('button');

    button.click();

    expect(component.filterChange.emit).toHaveBeenCalledWith('all');
  });

  it('should show empty state when no cookies', () => {
    component.filteredCookies = [];
    fixture.detectChanges();

    const el: HTMLElement = fixture.nativeElement;
    expect(el.textContent).toContain(
      'No hay cookies en esta categoría actualmente.'
    );
  });
});
