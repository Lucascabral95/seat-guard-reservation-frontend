import { Component} from '@angular/core';
import { Header } from "../components/header/header";
import { Footer } from "../components/footer/footer";
import { RouterOutlet } from '@angular/router';
import { HomePage } from "../../../features/home/pages/home-page/home-page";
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-main-layout',
  imports: [FormsModule, Header, RouterOutlet, Footer],
  templateUrl: './main-layout.html',
  styleUrl: './main-layout.scss',
})
export default class MainLayout {
}
