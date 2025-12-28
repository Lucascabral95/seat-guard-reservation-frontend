import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { ServiceNameService } from '../../../../core/services/header.service';
import { AuthLoginService } from '../../../../auth/login/service/auth-login-service';
import SearchEvent from '../search-event/search-event';
import MenuOpenComponent from './menu-open-component/menu-open-component';
import UtilityBarComponent from './utility-bar-component/utility-bar-component';
import NavBarComponent from './nav-bar-component/nav-bar-component';

@Component({
  selector: 'list-categories',
  imports: [
    RouterLink,
    SearchEvent,
    MenuOpenComponent,
    UtilityBarComponent,
    NavBarComponent,
  ],
  templateUrl: './list-categories.html',
  styleUrl: './list-categories.scss',
})
export default class ListCategories {
  headerService = inject(ServiceNameService);
  private router = inject(Router);
  private authService = inject(AuthLoginService);

  isMenuOpen = false;
  authenticated = this.authService.isAuthenticated();

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  logout() {
    this.authService.logout();
  }

  goToLogin() {
    this.router.navigate(['/auth/login']);
  }
}
