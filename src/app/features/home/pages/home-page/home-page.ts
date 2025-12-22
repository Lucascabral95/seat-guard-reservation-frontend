import { Component } from '@angular/core';
import Hero from '../../components/hero/hero';
import { BannerDataInterface } from '../../interfaces';

@Component({
  selector: 'app-home-page',
  imports: [Hero],
  templateUrl: './home-page.html',
  styleUrl: './home-page.scss',
})
export class HomePage {
    bannerHero: BannerDataInterface = {
      title: 'Eventos en Vivo',
      description: 'Descubrí los recitales más esperados del año. Asegurá tu lugar.',
      imageUrl: 'https://images.unsplash.com/photo-1553101497-d1cd9d74660b?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    }
}
