import 'zone.js';
import 'zone.js/testing';

import { TestBed } from '@angular/core/testing';
import { ComponentLoading } from './component-loading';

describe('ComponentLoading', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComponentLoading],
    }).compileComponents();
  });

  it('should create the component', () => {
    const fixture = TestBed.createComponent(ComponentLoading);
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should render loading text', () => {
    const fixture = TestBed.createComponent(ComponentLoading);
    fixture.detectChanges();

    const el: HTMLElement = fixture.nativeElement;
    expect(el.textContent).toContain('component-loading works!');
  });
});
