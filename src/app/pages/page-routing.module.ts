import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PagecomComponent } from './pagecom.component';
const routes: Routes = [
  {
    path: '',
    component: PagecomComponent,
    children: [
      { path: '', redirectTo: 'list', pathMatch: 'full' },
      {
        path: 'list',
        loadChildren: () =>
          import('./list/list.module').then((n) => n.ListModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PageRoutingModule {}
