import { HttpInterceptorFn } from '@angular/common/http';
import { inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { environment } from '../../../environments/environment';

const TOKEN_LS_KEY = environment.localStorage;
const SECRET_X_INTERNAL = environment.xInternalSecret

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const platformId = inject(PLATFORM_ID);
  const isBrowser = isPlatformBrowser(platformId);

  if (!isBrowser) {
    return next(req);
  }

  const token = localStorage.getItem(TOKEN_LS_KEY);

  if (token) {
    const clonedRequest = req.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`,
        'X-Internal-Secret': SECRET_X_INTERNAL,
      }
    });
    return next(clonedRequest);
  }

  return next(req);
};
