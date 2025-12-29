import 'zone.js';
import 'zone.js/testing';

import { TestBed } from '@angular/core/testing';
import LoadingSuccessPage from './loading-success-page';

describe('LoadingSuccessPage', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoadingSuccessPage],
    }).compileComponents();
  });

  it('should create the component', () => {
    const fixture = TestBed.createComponent(LoadingSuccessPage);
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should render loading skeleton', () => {
    const fixture = TestBed.createComponent(LoadingSuccessPage);
    fixture.detectChanges();

    const el: HTMLElement = fixture.nativeElement;

    expect(el.querySelector('div')).toBeTruthy();

    const blocks = el.querySelectorAll('div div');
    expect(blocks.length).toBeGreaterThan(0);
  });
});
