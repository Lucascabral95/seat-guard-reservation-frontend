import 'zone.js';
import 'zone.js/testing';

import { TestBed } from '@angular/core/testing';
import { RouterOutlet } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-layout',
  imports: [RouterOutlet],
  template: `
    <div class="min-h-screen w-full flex justify-center items-center bg-gray-100 p-0 sm:p-4">
      <div class="w-full max-w-3xl">
        <router-outlet></router-outlet>
      </div>
    </div>
  `,
})
class LayoutComponent {}

describe('LayoutComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LayoutComponent],
    }).compileComponents();
  });

  function createComponent() {
    const fixture = TestBed.createComponent(LayoutComponent);
    fixture.detectChanges();
    return fixture;
  }

  it('should create', () => {
    const fixture = createComponent();
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should render router-outlet', () => {
    const fixture = createComponent();
    const element: HTMLElement = fixture.nativeElement;

    expect(element.querySelector('router-outlet')).not.toBeNull();
  });

  it('should apply layout container classes', () => {
    const fixture = createComponent();
    const element: HTMLElement = fixture.nativeElement;

    const container = element.querySelector('.min-h-screen');

    expect(container).not.toBeNull();
    expect(container?.classList).toContain('bg-gray-100');
    expect(container?.classList).toContain('flex');
  });

  it('should center content and limit width', () => {
    const fixture = createComponent();
    const element: HTMLElement = fixture.nativeElement;

    const content = element.querySelector('.max-w-3xl');

    expect(content).not.toBeNull();
  });
});
