import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  {
    path: '**',
    renderMode: RenderMode.Prerender,
  },
  {
    path: 'menu/category/:id',
    renderMode: RenderMode.Client,
  },
  {
    path: 'menu/:id',
    renderMode: RenderMode.Client,
  },
];
