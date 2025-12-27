import { Routes } from "@angular/router";

const checkoutRoutes: Routes = [
  {
    path: "success",
    loadComponent: () => import('./pages/checkout-success-page/checkout-success-page')
  },
  {
    path: "error",
    loadComponent: () => import('./pages/checkout-error-page/checkout-error-page')
  },
  {
    path: ":id",
    loadComponent: () => import('./pages/checkout-page/checkout-page')
  },
  {
    path: "",
    loadComponent: () => import('./pages/checkout-page/checkout-page')
  },
]

export default checkoutRoutes;
