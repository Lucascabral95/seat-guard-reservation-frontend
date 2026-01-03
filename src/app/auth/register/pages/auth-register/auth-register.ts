import { Component, inject, OnInit, signal } from '@angular/core';
import { NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import {  RouterLink } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { AuthRegisterInterface } from '../../interfaces';
import { AuthLoginService } from '../../../login/service/auth-login-service';
import { SeoService } from '../../../../core/services/seo.service';

@Component({
  selector: 'app-auth-register',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './auth-register.html',
  styleUrl: './auth-register.scss',
})
export default class AuthRegister implements OnInit {
  private fb = inject(NonNullableFormBuilder);
  private authService = inject(AuthLoginService);
  private seo = inject(SeoService);

  isLoading = signal<boolean>(false);
  errorMessage = signal<string | null>(null);

  myForm = this.fb.group({
    email: ["", [Validators.required, Validators.email]],
    password: ["", [
      Validators.required,
      Validators.minLength(8),
      Validators.pattern(/(?=.*[A-Z])(?=.*[^\w\s])/)
    ]],
    name: ["", [
      Validators.required,
      Validators.pattern(/^\S+\s+\S+.*$/)
    ]]
  });

  ngOnInit(): void {
    this.seo.setPageMeta({
      title: 'Crear Cuenta',
      description: 'Regístrate en SeatGuard y empieza a reservar tus eventos favoritos',
      image: 'https://seatguard.com/assets/images/register-og.jpg',
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

    const dataUser: AuthRegisterInterface = this.myForm.getRawValue();

    this.authService.register(dataUser).subscribe({
      next: () => {
        this.isLoading.set(false);
      },
      error: (error: HttpErrorResponse) => {
        this.isLoading.set(false);
        this.myForm.enable();
        const msg = error.error?.message || 'Error al conectar con el servidor.';
        this.errorMessage.set(msg);
      }
    });
  }
}
