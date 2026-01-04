import { Component, Input } from '@angular/core';
import { ContainerCardProps } from '../../../../interfaces/components';

@Component({
  selector: 'component-card-collection',
  imports: [],
  templateUrl: './card-collection.html',
  styleUrl: './card-collection.scss',
})
export default class CardCollection {
   @Input({ required: true }) item!: ContainerCardProps;
}
