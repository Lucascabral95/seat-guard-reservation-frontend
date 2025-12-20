import { inject, Injectable, PLATFORM_ID, signal } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable, tap, throwError } from 'rxjs';
import { AuthLoginResponse, Credentials, PayloadJwtInterface } from '../interfaces';
import { Router } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';
import { AuthRegisterInterface, AuthRegisterResponse } from '../../register/interfaces';

const URL = environment.apiUrl
const TOKEN_LS_KEY = environment.localStorage
const REDIRECT_LOGIN_TIMEOUT = 1200

@Injectable({
  providedIn: 'root',
})
export class AuthLoginService {
  private router = inject(Router)
  private http = inject(HttpClient)
  private platformId = inject(PLATFORM_ID)
  private isBrowser = isPlatformBrowser(this.platformId)

  private isAuthenticatedSignal = signal<boolean>(this.checkInitialAuthState())

  readonly isAuthenticated = this.isAuthenticatedSignal.asReadonly()

  private checkInitialAuthState(): boolean {
    if (!this.isBrowser) return false
    const token = localStorage.getItem(TOKEN_LS_KEY)
    return !!token
  }

  login(credentials: Credentials): Observable<AuthLoginResponse> {
    return this.http.post<AuthLoginResponse>(`${URL}/auth/login`, credentials)
      .pipe(
        tap((response: AuthLoginResponse) => {
          const { access_token } = response

          if (this.isBrowser) {
            localStorage.setItem(TOKEN_LS_KEY, access_token)
          }

          this.isAuthenticatedSignal.set(true)
          this.router.navigate(["/dentro"])
        }),
        catchError(error => {
          console.error("Error al hacer el login", error)
          this.isAuthenticatedSignal.set(false)
          return throwError(() => error)
        })
      )
  }

  register(authRegister: AuthRegisterInterface): Observable<AuthRegisterResponse> {
    return this.http.post<AuthRegisterResponse>(`${URL}/auth/register`, authRegister)
      .pipe(
        tap((response: AuthRegisterResponse) => {
          console.log(`Registro exitoso`, response)
          setTimeout(() => {
            this.router.navigate(["/auth/login"])
          }, REDIRECT_LOGIN_TIMEOUT);
        }),
        catchError(error => {
          console.error("Error al hacer el registro", error)
          return throwError(() => error)
        })
      )
  }

  logout(): void {
    if (this.isBrowser) {
      localStorage.removeItem(TOKEN_LS_KEY)
    }
    this.isAuthenticatedSignal.set(false)
    this.router.navigate(["/auth/login"])
  }

  getPayloadJWT(): PayloadJwtInterface | null {
    if (!this.isBrowser) return null

    const token = this.getToken()
    if (!token) return null

    try {
      const payload = token.split(".")[1]
      const payloadDecoded = atob(payload)
      return JSON.parse(payloadDecoded) as PayloadJwtInterface
    } catch (error) {
      console.error("Error decodificando JWT:", error)
      return null
    }
  }

  getToken(): string | null {
    if (!this.isBrowser) return null
    return localStorage.getItem(TOKEN_LS_KEY)
  }

  checkAuth(): boolean {
    return this.isAuthenticatedSignal()
  }
}
