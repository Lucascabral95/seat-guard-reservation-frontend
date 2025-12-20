import { Component, inject, signal } from '@angular/core';
import { NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { AuthLoginService } from '../../service/auth-login-service';
import { Credentials } from '../../interfaces';

@Component({
  selector: 'app-auth-login',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './auth-login.html',
  styleUrl: './auth-login.scss',
})
export default class AuthLogin {
  private fb = inject(NonNullableFormBuilder);
  private authService = inject(AuthLoginService);

  isLoading = signal(false);
  errorMessage = signal<string | null>(null);

  myForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [
      Validators.required,
      Validators.minLength(6)
    ]]
  });

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
