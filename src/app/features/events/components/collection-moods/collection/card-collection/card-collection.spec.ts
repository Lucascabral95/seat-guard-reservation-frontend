
import 'zone.js';
import 'zone.js/testing';

import { ComponentFixture, TestBed } from '@angular/core/testing';
import CardCollection from './card-collection';
import { ContainerCardProps } from '../../../../interfaces/components';

describe('CardCollection', () => {
  let fixture: ComponentFixture<CardCollection>;
  let nativeElement: HTMLElement;

  const mockItem: ContainerCardProps = {
    urlImage: 'test.jpg',
    title: 'Test Title',
    caption: 'Test Caption',
    description: 'Test Description',
    url: '',
    styleSpan: 'test-class',
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardCollection],
    }).compileComponents();

    fixture = TestBed.createComponent(CardCollection);
    fixture.componentInstance.item = mockItem;
    fixture.detectChanges();

    nativeElement = fixture.nativeElement;
  });

  it('should create', () => {
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should render image with correct src', () => {
    const img = nativeElement.querySelector('img') as HTMLImageElement;
    expect(img.src).toContain('test.jpg');
  });

  it('should render title span', () => {
    const span = nativeElement.querySelector('span');
    expect(span?.textContent).toContain('Test Title');
  });

  it('should render caption', () => {
    const h3 = nativeElement.querySelector('h3');
    expect(h3?.textContent).toContain('Test Caption');
  });

  it('should render description', () => {
    const p = nativeElement.querySelector('p');
    expect(p?.textContent).toContain('Test Description');
  });
});
