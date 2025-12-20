import { Routes } from '@angular/router';
import MainLayout from './shared/layouts/main-layout/main-layout';
import { NoAuthGuard } from './core/guards/no-auth.guard';
import { AuthGuard } from './core/guards/auth.guard';

export const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.routes'),
    canActivate: [NoAuthGuard]
  },
  {
    path: "dentro",
    component: MainLayout,
    canActivate: [AuthGuard],
    children: [ ]
  },
  {
    path: "",
    redirectTo: "auth/login",
    pathMatch: "full",
  },
  {
    path: "**",
    redirectTo: "auth/login",
  }
];
