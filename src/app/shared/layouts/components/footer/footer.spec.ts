import 'zone.js';
import 'zone.js/testing';

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';

import { Footer } from './footer';
import FooterBrand from '../../../components/footer-oficial/footer-brand/footer-brand';
import FooterLegal from '../../../components/footer-oficial/footer-legal/footer-legal';
import FooterSocial from '../../../components/footer-oficial/footer-social/footer-social';
import FooterBottom from '../../../components/footer-oficial/footer-bottom/footer-bottom';

describe('Footer', () => {
  let fixture: ComponentFixture<Footer>;
  let component: Footer;
  let element: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule, // 👈 CLAVE
        Footer,
        FooterBrand,
        FooterLegal,
        FooterSocial,
        FooterBottom,
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(Footer);
    component = fixture.componentInstance;
    element = fixture.nativeElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render footer element', () => {
    expect(element.querySelector('footer')).toBeTruthy();
  });

  it('should render FooterBrand component', () => {
    expect(
      element.querySelector('component-footer-brand')
    ).toBeTruthy();
  });

  it('should render FooterLegal component', () => {
    expect(
      element.querySelector('component-footer-legal')
    ).toBeTruthy();
  });

  it('should render FooterSocial component', () => {
    expect(
      element.querySelector('component-footer-social')
    ).toBeTruthy();
  });

  it('should render FooterBottom component', () => {
    expect(
      element.querySelector('component-footer-bottom')
    ).toBeTruthy();
  });

  it('should pass navigation list to FooterLegal', () => {
    const footerLegalDebug = fixture.debugElement.query(
      By.directive(FooterLegal)
    );

    const footerLegalInstance =
      footerLegalDebug.componentInstance as FooterLegal;

    expect(footerLegalInstance.nav).toEqual(component.listNav);
    expect(footerLegalInstance.nav.length).toBe(5);
  });
});
