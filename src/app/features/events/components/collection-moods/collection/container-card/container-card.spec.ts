import 'zone.js';
import 'zone.js/testing';

import { ComponentFixture, TestBed } from '@angular/core/testing';
import ContainerCard from './container-card';
import CardCollection from '../card-collection/card-collection';

describe('ContainerCard', () => {
  let fixture: ComponentFixture<ContainerCard>;
  let nativeElement: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContainerCard, CardCollection],
    }).compileComponents();

    fixture = TestBed.createComponent(ContainerCard);
    nativeElement = fixture.nativeElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should render section title', () => {
    const title = nativeElement.querySelector('h2');
    expect(title?.textContent).toContain('Conciertos destacados');
  });

  it('should render three card collections', () => {
    const cards = nativeElement.querySelectorAll('component-card-collection');
    expect(cards.length).toBe(3);
  });
});
