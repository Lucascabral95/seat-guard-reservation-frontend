import { Component } from '@angular/core';
import SantanderHero from '../../components/promotions/santander-hero/santander-hero';
import SantanderBenefits from '../../components/promotions/santander-benefits/santander-benefits';
import SantanderSteps from '../../components/promotions/santander-steps/santander-steps';
import SantanderLegal from '../../components/promotions/santander-legal/santander-legal';

@Component({
  selector: 'app-promotions-page',
  imports: [
     SantanderHero,
      SantanderBenefits,
       SantanderSteps,
        SantanderLegal,
      ],
  templateUrl: './promotions-page.html',
  styleUrl: './promotions-page.scss',
})
export default class PromotionsPage {

}
