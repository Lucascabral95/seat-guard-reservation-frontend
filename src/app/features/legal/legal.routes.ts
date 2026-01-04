import { Routes } from "@angular/router";

const legalRoutes: Routes = [
  {
    path: "privacy-policy",
    loadComponent: () => import("./pages/privacy-policy-page/privacy-policy-page"),
  },
  {
    path: "terms-conditions",
    loadComponent: () => import("./pages/terms-conditions-page/terms-conditions-page"),
  },
  {
    path: "help-center",
    loadComponent: () => import("./pages/help-center-page/help-center-page"),
  },
  {
    path: "cookies-policy",
    loadComponent: () => import("./pages/cookies-policy-page/cookies-policy-page"),
  },
  {
    path: "promotions",
    loadComponent: () => import("./pages/promotions-page/promotions-page"),
  },
  {
    path: "**",
    redirectTo: "privacy-policy",
    pathMatch: "full"
  }
]

export default legalRoutes;
