import 'zone.js';
import 'zone.js/testing';

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import FooterLegal from './footer-legal';
import { NavFooterInterface } from '../../../interfaces';

describe('FooterLegal', () => {
  let fixture: ComponentFixture<FooterLegal>;
  let element: HTMLElement;

  const navMock: NavFooterInterface[] = [
    { title: 'Términos y Condiciones', redirection: '/terms' },
    { title: 'Política de Privacidad', redirection: '/privacy' },
    { title: 'Centro de Ayuda', redirection: '/help' },
  ];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FooterLegal, RouterTestingModule],
    }).compileComponents();

    fixture = TestBed.createComponent(FooterLegal);
    fixture.componentInstance.nav = navMock;
    element = fixture.nativeElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should render section title', () => {
    expect(element.textContent).toContain('Legal & Ayuda');
  });

  it('should render all navigation items', () => {
    navMock.forEach(item => {
      expect(element.textContent).toContain(item.title);
    });
  });

  it('should render correct number of links', () => {
    const links = element.querySelectorAll('a');
    expect(links.length).toBe(navMock.length);
  });
});
