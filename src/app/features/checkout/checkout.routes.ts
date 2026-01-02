import { Routes } from "@angular/router";

const checkoutRoutes: Routes = [
  {
    path: "success",
    loadComponent: () => import('./pages/checkout-success-page/checkout-success-page').then(m => m.default)
  },
  {
    path: "error",
    loadComponent: () => import('./pages/checkout-error-page/checkout-error-page').then(m => m.default)
  },
  {
    path: ":id",
    loadComponent: () => import('./pages/checkout-page/checkout-page').then(m => m.default)
  },
  {
    path: "",
    loadComponent: () => import('./pages/checkout-page/checkout-page').then(m => m.default)
  },
]

export default checkoutRoutes;
