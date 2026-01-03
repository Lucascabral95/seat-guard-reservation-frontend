import 'zone.js';
import 'zone.js/testing';

import { TestBed } from '@angular/core/testing';
import { Meta, Title } from '@angular/platform-browser';
import { ServiceNameService } from './header.service';

describe('ServiceNameService', () => {
  let service: ServiceNameService;
  let title: Title;
  let meta: Meta;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ServiceNameService],
    });

    service = TestBed.inject(ServiceNameService);
    title = TestBed.inject(Title);
    meta = TestBed.inject(Meta);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should expose categories', () => {
    const categories = service.categories();
    expect(categories.length).toBe(2);
    expect(categories[0].name).toBe('Conciertos');
  });

  it('should expose genders', () => {
    const genders = service.genders();
    expect(genders.length).toBe(6);
    expect(genders[0].url).toContain('/rock');
  });

  it('should set title and description SEO', () => {
    service.setSeo({
      title: 'Conciertos de Rock',
      description: 'Rock en vivo',
    });

    expect(title.getTitle()).toBe('Conciertos de Rock | SeatGuard');

    const description = meta.getTag('name="description"');
    expect(description?.content).toBe('Rock en vivo');
  });

  it('should set robots index when noIndex is false or undefined', () => {
    service.setSeo({
      title: 'Home',
      description: 'Desc',
    });

    const robots = meta.getTag('name="robots"');
    expect(robots?.content).toBe('index, follow');
  });

  it('should set robots noindex when noIndex is true', () => {
    service.setSeo({
      title: 'Private',
      description: 'Private page',
      noIndex: true,
    });

    const robots = meta.getTag('name="robots"');
    expect(robots?.content).toBe('noindex, nofollow');
  });
});
