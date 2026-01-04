import 'zone.js';
import 'zone.js/testing';

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import SidebarContentLegal from './sidebar-content-legal';
import { LegalSection } from '../../../interfaces/components';

describe('SidebarContentLegal', () => {
  let fixture: ComponentFixture<SidebarContentLegal>;
  let component: SidebarContentLegal;

  const sectionsMock: LegalSection[] = [
    {
      id: 'acceptance',
      title: 'Aceptación',
      content: ['Texto 1', 'Texto 2'],
    },
    {
      id: 'payments',
      title: 'Pagos',
      content: ['Texto pagos'],
    },
  ];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SidebarContentLegal],
    }).compileComponents();

    fixture = TestBed.createComponent(SidebarContentLegal);
    component = fixture.componentInstance;

    component.sections = sectionsMock;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render table of contents', () => {
    const el: HTMLElement = fixture.nativeElement;

    expect(el.textContent).toContain('Tabla de Contenidos');
    expect(el.textContent).toContain('Aceptación');
    expect(el.textContent).toContain('Pagos');
  });

  it('should emit navigate event when clicking a section', () => {
    spyOn(component.navigate, 'emit');

    const buttons = fixture.debugElement.queryAll(By.css('aside button'));
    buttons[0].nativeElement.click();

    expect(component.navigate.emit).toHaveBeenCalledWith('acceptance');
  });

  it('should emit print event when clicking print button', () => {
  component.showPrint = true;
  fixture.detectChanges();

  spyOn(component.print, 'emit');

  const buttons = fixture.debugElement.queryAll(By.css('button'));
  const printButton = buttons.find(btn =>
    btn.nativeElement.textContent.includes('Descargar / Imprimir')
  );

  expect(printButton).toBeTruthy();

  printButton!.nativeElement.click();

  expect(component.print.emit).toHaveBeenCalled();
});

});
