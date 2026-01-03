import 'zone.js';
import 'zone.js/testing';

import { TestBed } from '@angular/core/testing';
import { Meta, Title } from '@angular/platform-browser';
import { SeoService } from './seo.service';

describe('SeoService', () => {
  let service: SeoService;
  let metaSpy: jasmine.SpyObj<Meta>;
  let titleSpy: jasmine.SpyObj<Title>;

  beforeEach(() => {
    const metaMock = jasmine.createSpyObj('Meta', ['updateTag', 'addTag', 'removeTag']);
    const titleMock = jasmine.createSpyObj('Title', ['setTitle']);

    TestBed.configureTestingModule({
      providers: [
        SeoService,
        { provide: Meta, useValue: metaMock },
        { provide: Title, useValue: titleMock },
      ],
    });

    service = TestBed.inject(SeoService);
    metaSpy = TestBed.inject(Meta) as jasmine.SpyObj<Meta>;
    titleSpy = TestBed.inject(Title) as jasmine.SpyObj<Title>;
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('setPageMeta', () => {
    it('should set title with suffix', () => {
      service.setPageMeta({
        title: 'Test Page',
        description: 'Test description',
      });

      expect(titleSpy.setTitle).toHaveBeenCalledWith('Test Page | SeatGuard');
    });

    it('should update description meta tag', () => {
      service.setPageMeta({
        title: 'Test',
        description: 'Test description',
      });

      expect(metaSpy.updateTag).toHaveBeenCalledWith({
        name: 'description',
        content: 'Test description',
      });
    });

    it('should set noindex when noIndex is true', () => {
      service.setPageMeta({
        title: 'Private Page',
        description: 'Private content',
        noIndex: true,
      });

      expect(metaSpy.updateTag).toHaveBeenCalledWith({
        name: 'robots',
        content: 'noindex, nofollow',
      });
    });

    it('should set index when noIndex is false or undefined', () => {
      service.setPageMeta({
        title: 'Public Page',
        description: 'Public content',
      });

      expect(metaSpy.updateTag).toHaveBeenCalledWith({
        name: 'robots',
        content: 'index, follow',
      });
    });

    it('should update Open Graph tags', () => {
      service.setPageMeta({
        title: 'OG Test',
        description: 'OG description',
        image: '/og-image.jpg',
      });

      expect(metaSpy.updateTag).toHaveBeenCalledWith({
        property: 'og:title',
        content: 'OG Test',
      });
      expect(metaSpy.updateTag).toHaveBeenCalledWith({
        property: 'og:description',
        content: 'OG description',
      });
      expect(metaSpy.updateTag).toHaveBeenCalledWith({
        property: 'og:image',
        content: '/og-image.jpg',
      });
    });

    it('should update Twitter Card tags', () => {
      service.setPageMeta({
        title: 'Twitter Test',
        description: 'Twitter description',
      });

      expect(metaSpy.updateTag).toHaveBeenCalledWith({
        name: 'twitter:card',
        content: 'summary_large_image',
      });
      expect(metaSpy.updateTag).toHaveBeenCalledWith({
        name: 'twitter:title',
        content: 'Twitter Test',
      });
      expect(metaSpy.updateTag).toHaveBeenCalledWith({
        name: 'twitter:description',
        content: 'Twitter description',
      });
    });
  });
});
