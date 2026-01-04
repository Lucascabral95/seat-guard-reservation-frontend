import 'zone.js';
import 'zone.js/testing';

import { ComponentFixture, TestBed } from '@angular/core/testing';
import HeaderMinimalist from './header-minimalist';
import { signal } from '@angular/core';

describe('HeaderMinimalist', () => {
  let fixture: ComponentFixture<HeaderMinimalist>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderMinimalist],
    }).compileComponents();

    fixture = TestBed.createComponent(HeaderMinimalist);

    fixture.componentInstance.lastUpdated = signal(new Date(2026, 0, 1));

    fixture.detectChanges();
  });

  it('should render last updated year', () => {
    expect(fixture.nativeElement.textContent).toContain('2026');
  });
});
