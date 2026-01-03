import { Component, inject, OnInit, signal } from '@angular/core';
import { NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { AuthLoginService } from '../../service/auth-login-service';
import { Credentials } from '../../interfaces';
import { SeoService } from '../../../../core/services/seo.service';

@Component({
  selector: 'app-auth-login',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './auth-login.html',
  styleUrl: './auth-login.scss',
})
export default class AuthLogin implements OnInit {
  private fb = inject(NonNullableFormBuilder);
  private authService = inject(AuthLoginService);
  private seo = inject(SeoService);

  isLoading = signal(false);
  errorMessage = signal<string | null>(null);

  myForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [
      Validators.required,
      Validators.minLength(6)
    ]]
  });

  ngOnInit(): void {
    this.seo.setPageMeta({
      title: 'Iniciar Sesión',
      description: 'Accede a tu cuenta de SeatGuard para gestionar tus reservas de eventos',
      image: 'https://seatguard.com/assets/images/login-og.jpg',
    });
  }

  onSubmit() {
    if (this.myForm.invalid) {
      this.myForm.markAllAsTouched();
      return;
    }

    this.isLoading.set(true);
    this.errorMessage.set(null);
    this.myForm.disable();

    const credentials: Credentials = this.myForm.getRawValue();

    this.authService.login(credentials).subscribe({
      next: () => {
        console.log("Login exitoso!")
      },
      error: (error: HttpErrorResponse) => {
        this.isLoading.set(false);
        this.myForm.enable();
        this.errorMessage.set(error.error?.message || 'Ocurrió un error inesperado.');
      }
    });
  }
}
