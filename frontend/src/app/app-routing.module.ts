import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'error',
    loadComponent: () =>
      import('./page-not-found/page-not-found.component').then(
        (n) => n.PageNotFoundComponent
      ),data: {message: 'Page cannot be found'}
  },
  {
    path: '**',
    redirectTo: "/error"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
