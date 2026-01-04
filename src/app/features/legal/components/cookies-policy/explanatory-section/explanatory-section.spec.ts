import 'zone.js';
import 'zone.js/testing';

import { ComponentFixture, TestBed } from '@angular/core/testing';
import ExplanatorySection from './explanatory-section';

describe('ExplanatorySection', () => {
  let fixture: ComponentFixture<ExplanatorySection>;
  let component: ExplanatorySection;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExplanatorySection],
    }).compileComponents();

    fixture = TestBed.createComponent(ExplanatorySection);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render explanatory title', () => {
    const el: HTMLElement = fixture.nativeElement;
    expect(el.textContent).toContain('¿Qué es una cookie?');
  });

  it('should render commitment message', () => {
    const el: HTMLElement = fixture.nativeElement;
    expect(el.textContent).toContain('no vendemos tus datos');
  });
});
