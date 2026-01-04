import { Component, Input, Output, EventEmitter } from '@angular/core';
import { LegalSection } from '../../../interfaces/components';

@Component({
  selector: 'component-sidebar-content-legal',
  standalone: true,
  templateUrl: './sidebar-content-legal.html',
  styleUrl: './sidebar-content-legal.scss',
})
export default class SidebarContentLegal {
  @Input({ required: true }) sections!: LegalSection[];

  @Input() title = 'Tabla de Contenidos';
  @Input() stickyTop = 'top-24';
  @Input() showPrint = true;

  @Output() navigate = new EventEmitter<string>();
  @Output() print = new EventEmitter<void>();
}
