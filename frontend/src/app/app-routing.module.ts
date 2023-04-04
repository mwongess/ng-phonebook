import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
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
        },
        {
          path: 'contact/:id/edit',
          loadComponent: ()=> import('./edit-contact/edit-contact.component').then(ec => ec.EditContactComponent)
        }
        ,
        {
          path: 'contact/details/:id',
          loadComponent: ()=> import('./contact-details/contact-details.component').then(cd=>cd.ContactDetailsComponent)
        }
      ]
  },
  {
    path: 'error',
    loadComponent: () =>
      import('./page-not-found/page-not-found.component').then(
        (n) => n.PageNotFoundComponent
      ),
    data: { error: '404', message: 'Route not yet implemented!' },
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
