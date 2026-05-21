import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  {
    path: ':lang/menu',
    renderMode: RenderMode.Client,
  },
  // {
  //   path: ':lang/contact',
  //   renderMode: RenderMode.Prerender,
  //   getPrerenderParams: async () => [{ lang: 'en' }, { lang: 'ar' }],
  // },
  {
    path: '**',
    renderMode: RenderMode.Server,
  },
];
