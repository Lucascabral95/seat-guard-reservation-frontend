import 'zone.js';
import 'zone.js/testing';

import { ComponentFixture, TestBed } from '@angular/core/testing';
import BannerSponsor from './banner-sponsor';

describe('BannerSponsor', () => {
  let fixture: ComponentFixture<BannerSponsor>;
  let nativeElement: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BannerSponsor],
    }).compileComponents();

    fixture = TestBed.createComponent(BannerSponsor);
    nativeElement = fixture.nativeElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should render sponsor title', () => {
    const title = nativeElement.querySelector('h3');
    expect(title?.textContent).toContain('Clientes Santander');
  });

  it('should render exclusive partner label', () => {
    expect(nativeElement.textContent).toContain('Exclusive Partner');
  });

  it('should render benefit description', () => {
    expect(nativeElement.textContent).toContain('3 cuotas sin interés');
  });

  it('should render CTA button', () => {
    const button = nativeElement.querySelector('button');
    expect(button).toBeTruthy();
    expect(button?.textContent).toContain('Ver Beneficios');
  });

  it('should render sponsor icon svg', () => {
    const svg = nativeElement.querySelector('svg');
    expect(svg).toBeTruthy();
  });
});
