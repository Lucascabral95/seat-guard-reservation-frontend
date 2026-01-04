import 'zone.js';
import 'zone.js/testing';

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Router, UrlTree } from '@angular/router';
import SantanderCta from './santander-cta';

describe('SantanderCta', () => {
  let fixture: ComponentFixture<SantanderCta>;
  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule.withRoutes([]), SantanderCta],
    }).compileComponents();

    router = TestBed.inject(Router);

    fixture = TestBed.createComponent(SantanderCta);
    fixture.componentInstance.label = 'Volver a Cartelera';
    fixture.componentInstance.link = '/dentro/events';

    fixture.detectChanges();
  });

  it('should navigate to correct route when clicked', () => {
    const spy = spyOn(router, 'navigateByUrl');

    const button: HTMLButtonElement =
      fixture.nativeElement.querySelector('button');

    button.click();

    expect(spy).toHaveBeenCalled();

    const [arg] = spy.calls.mostRecent().args;

    expect(
      arg instanceof UrlTree
        ? router.serializeUrl(arg)
        : arg
    ).toBe('/dentro/events');
  });
});
