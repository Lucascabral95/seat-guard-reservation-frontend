import { Routes } from "@angular/router";

const eventsRoutes: Routes = [
  {
    path: "",
    loadComponent: () => import("./pages/event-list/events"),
  },
  {
    path: "id/:id",
    loadComponent: () => import("./pages/event-id/event-id"),
  },
  {
    path: "gender/:gender",
    loadComponent: () => import("./pages/event-gender/event-gender"),
  },
  {
    path: "**",
    redirectTo: "",
  }
]

export default eventsRoutes;
