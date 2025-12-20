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
        url: "/dentro/categories/conciertos",
      },
      {
        name: "Pop",
        url: "/dentro/categories/conciertos-pop",
      },
      {
        name: "Jazz",
        url: "/dentro/categories/conciertos-jazz",
      },
      {
        name: "Electrónica",
        url: "/dentro/categories/conciertos-jazz",
      },
      {
        name: "Clásica",
        url: "/dentro/categories/conciertos-clasica",
      },
      {
        name: "DJ",
        url: "/dentro/categories/dj",
      },
    ]);

}
