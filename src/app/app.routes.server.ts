import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  {
    path: 'dentro/events/id/:id',
    renderMode: RenderMode.Server,
  },
  {
    path: 'dentro/events/id/:id/seats',
    renderMode: RenderMode.Server,
  },
  {
    path: 'dentro/events/gender/:gender',
    renderMode: RenderMode.Server,
  },
  {
    path: 'dentro/events/gender/:gender',
    renderMode: RenderMode.Server,
  },
  {
    path: 'dentro/checkout/:id',
    renderMode: RenderMode.Server,
  },
  {
    path: 'dentro/my-tickets/:id',
    renderMode: RenderMode.Server,
  },
  {
    path: '**',
    renderMode: RenderMode.Prerender,
  },
];
