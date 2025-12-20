import { Component } from '@angular/core';
import ListCategories from '../../../components/header/list-categories/list-categories';

@Component({
  selector: 'app-header',
  imports: [ListCategories],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {

}
