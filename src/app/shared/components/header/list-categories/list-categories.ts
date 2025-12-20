import { Component, inject, signal } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { ServiceNameService } from '../../../../core/services/header.service';
import { AuthLoginService } from '../../../../auth/login/service/auth-login-service';
import SearchEvent from '../search-event/search-event';

@Component({
  selector: 'list-categories',
  imports: [RouterLink, SearchEvent],
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
