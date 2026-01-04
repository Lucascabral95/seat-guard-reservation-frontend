import 'zone.js';
import 'zone.js/testing';

import { ComponentFixture, TestBed } from '@angular/core/testing';
import SantanderLegal from './santander-legal';

describe('SantanderLegal', () => {
  let fixture: ComponentFixture<SantanderLegal>;
  let component: SantanderLegal;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SantanderLegal],
    }).compileComponents();

    fixture = TestBed.createComponent(SantanderLegal);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render legal section title and content', () => {
    const el: HTMLElement = fixture.nativeElement;

    expect(el.textContent).toContain('Legales y Condiciones');
    expect(el.textContent).toContain('Banco Santander Argentina');
    expect(el.textContent).toContain('Promoción válida');
  });
});
