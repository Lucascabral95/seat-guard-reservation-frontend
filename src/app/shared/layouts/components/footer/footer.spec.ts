import 'zone.js';
import 'zone.js/testing';

import { TestBed } from '@angular/core/testing';
import { Footer } from './footer';

describe('Footer', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Footer],
    }).compileComponents();
  });

  it('should create the footer component', () => {
    const fixture = TestBed.createComponent(Footer);
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should render footer element', () => {
    const fixture = TestBed.createComponent(Footer);
    fixture.detectChanges();

    const element: HTMLElement = fixture.nativeElement;
    expect(element.querySelector('footer')).toBeTruthy();
  });

  it('should render SeatGuard branding', () => {
    const fixture = TestBed.createComponent(Footer);
    fixture.detectChanges();

    const element: HTMLElement = fixture.nativeElement;
    expect(element.textContent).toContain('SeatGuard');
  });

  it('should render external links', () => {
    const fixture = TestBed.createComponent(Footer);
    fixture.detectChanges();

    const element: HTMLElement = fixture.nativeElement;

    const links = Array.from(element.querySelectorAll('a')).map(
      (a) => a.getAttribute('href')
    );

    expect(links).toContain('https://www.linkedin.com/in/lucas-gast%C3%B3n-cabral/');
    expect(links).toContain('https://github.com/Lucascabral95');
    expect(links).toContain(
      'https://portfolio-web-dev-git-main-lucascabral95s-projects.vercel.app/'
    );
  });
});
