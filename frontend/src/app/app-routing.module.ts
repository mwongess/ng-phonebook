import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'contacts',
    loadComponent: () =>
      import('./home/home.component').then((h) => h.HomeComponent),
      children: [
        {
          path: '',
          loadComponent: ()=> import('./contact-list/contact-list.component').then(cl => cl.ContactListComponent)
        },
        {
          path: 'add/new',
          loadComponent: ()=> import('./contact-form/contact-form.component').then(cf => cf.ContactFormComponent)
        }
      ]
  },
  {
    path: 'error',
    loadComponent: () =>
      import('./page-not-found/page-not-found.component').then(
        (n) => n.PageNotFoundComponent
      ),
    data: { error: '404', message: 'Page cannot be found' },
  },
  {
    path: '**',
    redirectTo: '/error',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
