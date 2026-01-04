import 'zone.js';
import 'zone.js/testing';

import { ComponentFixture, TestBed } from '@angular/core/testing';
import FaqCollapse from './faq-collapse';
import { FAQ } from '../../../interfaces/components';

describe('FaqCollapse', () => {
  let fixture: ComponentFixture<FaqCollapse>;

  const faqs: FAQ[] = [
    { question: 'Pregunta 1', answer: 'Respuesta 1', isOpen: false },
    { question: 'Pregunta 2', answer: 'Respuesta 2', isOpen: false },
  ];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FaqCollapse],
    }).compileComponents();

    fixture = TestBed.createComponent(FaqCollapse);
    fixture.componentInstance.faqs = faqs;
    fixture.detectChanges();
  });

  it('should show answer only when faq is open', () => {
    const answers = fixture.nativeElement.querySelectorAll('.faq-answer');

    // cerrado
    expect(answers[0].style.maxHeight).toBe('0px');

    // abrir
    fixture.componentInstance.faqs[0].isOpen = true;
    fixture.detectChanges();

    expect(answers[0].style.maxHeight).toBe('200px');
  });
});
