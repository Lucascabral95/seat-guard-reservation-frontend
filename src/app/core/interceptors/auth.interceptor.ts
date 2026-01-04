import { HttpInterceptorFn, HttpParams } from '@angular/common/http';
import { inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { environment } from '../../../environments/environment';

const TOKEN_LS_KEY = environment.localStorage;
const SECRET_X_INTERNAL = environment.xInternalSecret;

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const platformId = inject(PLATFORM_ID);
  const isBrowser = isPlatformBrowser(platformId);

  let headers = req.headers.set('X-Internal-Secret', SECRET_X_INTERNAL);
  let url = req.url;

  if (isBrowser) {
    const token = localStorage.getItem(TOKEN_LS_KEY);

    if (token) {
      headers = headers.set('Authorization', `Bearer ${token}`);
    }

    if (
      environment.production &&
      (url.startsWith('http://') || url.startsWith('https://')) &&
      !url.includes('localhost') &&
      !url.includes('127.0.0.1') &&
      !url.startsWith('/proxy')
    ) {
      const target = req.urlWithParams;
      url = `/proxy?target=${encodeURIComponent(target)}`;
    }
  }

  return next(
    req.clone({
      url,
      headers,
      params: url.startsWith('/proxy') ? new HttpParams() : req.params,
    })
  );
};
