import { Routes } from '@angular/router';

export const routes: Routes = [

  {
    path: 'pages',
    loadChildren: () => import('./pages/pages-routing.module').then(m => m.PagesRoutingModule)
  },
];
