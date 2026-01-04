import { Component } from '@angular/core';
import CardCollection from '../card-collection/card-collection';
import { ContainerCardProps } from '../../../../interfaces/components';

@Component({
  selector: 'component-container-card',
  imports: [ CardCollection ],
  templateUrl: './container-card.html',
  styleUrl: './container-card.scss',
})
export default class ContainerCard {
   cardContainer: ContainerCardProps[] = [
      {
        urlImage: 'https://res.cloudinary.com/dywcuco2r/image/upload/v1767481235/Adele-HD-Photos-03866_j6yoqd.jpg',
        title: 'Intimo & Jazz',
        caption: 'Date Night.',
        description: 'Veladas exclusivas para compartir en pareja.',
        url: '',
        styleSpan: "px-2 py-1 bg-white/20 backdrop-blur-md text-white text-[10px] font-bold uppercase rounded mb-2 inline-block"
      },
      {
        urlImage: 'https://res.cloudinary.com/dywcuco2r/image/upload/v1767480948/Taylor-Swift-wallpaper-HD-photo-Eras-Tour-concert-1920-x-1080-pixels-laptop_johzfh.jpg',
        title: 'Tendencia Global',
        caption: 'World Tours.',
        description: 'Los estadios sold-out de la temporada.',
        url: '',
        styleSpan: "px-2 py-1 bg-white/20 backdrop-blur-md text-white text-[10px] font-bold uppercase rounded mb-2 inline-block"
      },
      {
        urlImage: 'https://res.cloudinary.com/dywcuco2r/image/upload/v1767481004/tomorrowland-carnival-set-up-6zto43czxfims05e_vyzwjc.jpg',
        title: 'Open Air',
        caption: 'Festivales.',
        description: 'Electrónica, amigos y aire libre.',
        url: '',
        styleSpan: "px-2 py-1 bg-blue-600 text-white text-[10px] font-bold uppercase rounded mb-2 inline-block"
      }
    ]
}
