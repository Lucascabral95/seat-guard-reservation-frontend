import { Injectable, signal, inject } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { CategoryAndGendersListHeader } from '../../shared/interfaces/header.interface';

@Injectable({ providedIn: 'root' })
export class ServiceNameService {
  private readonly title = inject(Title);
  private readonly meta = inject(Meta);

  readonly categories = signal<CategoryAndGendersListHeader[]>([
    { name: 'Conciertos', url: '/dentro/categories/conciertos' },
    { name: 'Ayuda', url: '/dentro/ayuda' },
  ]);

  readonly genders = signal<CategoryAndGendersListHeader[]>([
    { name: 'Rock', url: '/dentro/events/gender/rock' },
    { name: 'Pop', url: '/dentro/events/gender/pop' },
    { name: 'Jazz', url: '/dentro/events/gender/jazz' },
    { name: 'Teatro', url: '/dentro/events/gender/teatro' },
    { name: 'Metal', url: '/dentro/events/gender/metal' },
    { name: 'Varios', url: '/dentro/events/gender/varios' },
  ]);

  setSeo(config: {
    title: string;
    description: string;
    noIndex?: boolean;
  }): void {
    this.title.setTitle(`${config.title} | SeatGuard`);

    this.meta.updateTag({
      name: 'description',
      content: config.description,
    });

    this.meta.updateTag({
      name: 'robots',
      content: config.noIndex ? 'noindex, nofollow' : 'index, follow',
    });
  }
}
