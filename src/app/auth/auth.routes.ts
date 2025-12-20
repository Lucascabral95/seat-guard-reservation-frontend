import { Routes } from "@angular/router";

const authRoutes: Routes = [
  {
    path: "",
    loadComponent: () => import("./components/structure-children/structure-children"),
    children: [
      {
        path: "login",
        loadComponent: () => import("./login/pages/auth-login/auth-login")
      },
       {
        path: "register",
        loadComponent: () => import("./register/pages/auth-register/auth-register")
       },
       {
        path: "**",
        redirectTo: "login"
       }
    ]
  }
]

export default authRoutes;
