import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SidebarComponent} from '@turing/modules/main/sidebar/sidebar.component';
import {ProductPanelComponent} from '@turing/modules/main/product-panel/product-panel.component';

const routes: Routes = [
  {
    path: '',
    data: { title: 'Shop Here' },
    component: SidebarComponent,
    children: [
      {
        path: '',
        component: ProductPanelComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BaseRoutingModule { }
