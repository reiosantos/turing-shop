import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import {
  PageNotFoundComponent
} from '@turing/shared/components/page-not-found/page-not-found.component';


const routes: Routes = [
  {
    path: 'v1',
    loadChildren: () => import('./modules/base.module').then(m => m.BaseModule)
  },
  {
    path: '**',
    component: PageNotFoundComponent,
    data: { title: '404 - Not Found' }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    onSameUrlNavigation: 'reload',
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
