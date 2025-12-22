import { Injectable, signal } from '@angular/core';
import { CategoryAndGendersListHeader } from '../../shared/interfaces/header.interface';

@Injectable({providedIn: 'root'})
export class ServiceNameService {
   readonly categories = signal<CategoryAndGendersListHeader[]>([
      {
        name: "Conciertos",
        url: "/dentro/categories/conciertos",
      },
      {
        name: "Ayuda",
        url: "/dentro/ayuda",
      },
    ]);

    readonly genders = signal<CategoryAndGendersListHeader[]>([
      {
        name: "Rock",
        url: "/dentro/events/gender/rock",
      },
      {
        name: "Pop",
        url: "/dentro/events/gender/pop",
      },
      {
        name: "Jazz",
        url: "/dentro/events/gender/jazz",
      },
      {
        name: "Teatro",
        url: "/dentro/events/gender/teatro",
      },
      {
        name: "Metal",
        url: "/dentro/events/gender/metal",
      },
      {
        name: "Varios",
        url: "/dentro/events/gender/varios",
      },
    ]);

}
