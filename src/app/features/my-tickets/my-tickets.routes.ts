import { Routes } from "@angular/router";

const myTicketsRoutes: Routes = [
  {
    path: "",
    loadComponent: () => import("./pages/my-tickets-app/my-tickets-app")
  },
  {
    path: ":id",
    loadComponent: () => import("./pages/my-ticket-app/my-ticket-app")
  },
  {
    path: "**",
    redirectTo: "",
    pathMatch: "full"
  }
];

export default myTicketsRoutes;
