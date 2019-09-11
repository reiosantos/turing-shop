import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    data: { title: 'Shop Here' },
    children: [
      // {
      //   path: '/v1',
      //   loadChildren: () => import('./angularjs.module').then(m => m.AngularJSModule)
      // },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BaseRoutingModule { }
