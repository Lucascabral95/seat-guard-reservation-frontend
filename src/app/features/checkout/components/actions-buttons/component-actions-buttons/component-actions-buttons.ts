import { Component, EventEmitter, Input, Output, signal } from '@angular/core';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'component-actions-buttons',
  imports: [RouterLink],
  templateUrl: './component-actions-buttons.html',
  styleUrl: './component-actions-buttons.scss',
})
export default class ComponentActionsButtons {
     @Input({ required: true }) order_id!: string;
     @Input({ required: true }) isLoadingPdf = signal<boolean>(false);
     @Output() viewTicket = new EventEmitter<void>();
}
