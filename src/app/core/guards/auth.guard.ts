import { inject, PLATFORM_ID } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivateFn,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { isPlatformBrowser } from '@angular/common';
import { AuthLoginService } from '../../auth/login/service/auth-login-service';

export const AuthGuard: CanActivateFn = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
) => {
  const router = inject(Router);
  const authService = inject(AuthLoginService);
  const platformId = inject(PLATFORM_ID)
  const isBrowser = isPlatformBrowser(platformId)

  if(!isBrowser) {
    return true;
  }

  if (authService.checkAuth()) {
    return true;
  }

  router.navigate(['/auth/login']);
  return false;
};
