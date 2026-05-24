import { Routes } from '@angular/router';
import { langGuard } from './core/guards/lang.guard';
import { HomeComponent } from './features/home/home';
import { contactDoneGuard } from './core/guards/contact-done.guard';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/en',
  },
  {
    path: ':lang',
    canActivate: [langGuard],
    children: [
      {
        path: '',
        component: HomeComponent,
      },
      {
        path: 'about',
        loadComponent: () => import('./features/about/about').then((m) => m.AboutComponent),
      },
      {
        path: 'menu',
        loadComponent: () => import('./features/menu/menu').then((m) => m.MenuComponent),
      },
      {
        path: 'branches',
        loadComponent: () =>
          import('./features/branches/branches').then((m) => m.BranchesComponent),
      },
      {
        path: 'contact',
        loadComponent: () => import('./features/contact/contact').then((m) => m.ContactComponent),
        children: [
          {
            path: 'done',
            loadComponent: () => import('./features/contact/done/done').then((m) => m.ContactDoneComponent),
            canActivate: [contactDoneGuard],
          }
        ]
      },
      {
        path: 'privacy',
        loadComponent: () => import('./features/privacy/privacy').then((m) => m.PrivacyComponent),
      },
    ],
  },
  {
    path: '**',
    redirectTo: '/en',
  },
];
