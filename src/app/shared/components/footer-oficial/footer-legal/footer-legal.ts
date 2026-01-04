import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NavFooterInterface } from '../../../interfaces';

@Component({
  selector: 'component-footer-legal',
  imports: [RouterLink],
  templateUrl: './footer-legal.html',
  styleUrl: './footer-legal.scss',
})
export default class FooterLegal {
    @Input({ required: true }) nav!: NavFooterInterface[];
}
