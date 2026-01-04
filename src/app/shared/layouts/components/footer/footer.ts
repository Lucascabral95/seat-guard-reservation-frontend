import { Component } from '@angular/core';
import FooterBrand from '../../../components/footer-oficial/footer-brand/footer-brand';
import FooterLegal from '../../../components/footer-oficial/footer-legal/footer-legal';
import FooterSocial from '../../../components/footer-oficial/footer-social/footer-social';
import FooterBottom from '../../../components/footer-oficial/footer-bottom/footer-bottom';
import { NavFooterInterface } from '../../../interfaces';

@Component({
  selector: 'app-footer',
  imports: [FooterBrand, FooterLegal, FooterSocial, FooterBottom],
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
})
export class Footer {
    listNav: NavFooterInterface[] = [
      {
        title: "Términos y Condiciones",
        redirection: "/dentro/legal/terms-conditions"
      },
      {
        title: "Política de Privacidad",
        redirection: "/dentro/legal/privacy-policy"
      },
      {
        title: "Política de Cookies",
        redirection: "/dentro/legal/cookies-policy"
      },
      {
        title: "Centro de Ayuda",
        redirection: "/dentro/legal/help-center"
      },
      {
        title: "Gestión de Compra",
        redirection: "/dentro/legal/promotions"
      }
    ]
}
