import { Component } from '@angular/core';
import { Header } from "../components/header/header";
import { Footer } from "../components/footer/footer";
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-main-layout',
  imports: [Header, RouterOutlet, Footer],
  templateUrl: './main-layout.html',
  styleUrl: './main-layout.scss',
})
export default class MainLayout {

}
