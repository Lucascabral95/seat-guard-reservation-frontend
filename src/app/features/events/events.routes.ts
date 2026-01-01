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
    path: "id/:id/seats",
    loadComponent: () => import("../seats/pages/all-seats-pages/all-seats-pages"),
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
