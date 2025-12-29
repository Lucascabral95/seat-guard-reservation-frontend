import 'zone.js';
import 'zone.js/testing';

import { TestBed } from '@angular/core/testing';
import Hero from './hero';

describe('Hero', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Hero],
    }).compileComponents();
  });

  it('should create the component', () => {
    const fixture = TestBed.createComponent(Hero);

    fixture.componentInstance.title = 'Eventos en Vivo';
    fixture.componentInstance.description = 'La mejor música en vivo';
    fixture.componentInstance.imageUrl = 'https://test-image.jpg';

    fixture.detectChanges();

    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should render title, description and image', () => {
    const fixture = TestBed.createComponent(Hero);

    fixture.componentInstance.title = 'Eventos en Vivo';
    fixture.componentInstance.description = 'La mejor música en vivo';
    fixture.componentInstance.imageUrl = 'https://test-image.jpg';

    fixture.detectChanges();

    const el: HTMLElement = fixture.nativeElement;

    expect(el.textContent).toContain('Eventos en Vivo');
    expect(el.textContent).toContain('La mejor música en vivo');

    const img = el.querySelector('img') as HTMLImageElement;
    expect(img).toBeTruthy();
    expect(img.src).toContain('https://test-image.jpg');
  });
});
