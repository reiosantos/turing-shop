import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {AppMaterialModule} from '@turing/app-material.module';
import {BaseRoutingModule} from '@turing/modules/base-routing.module';
import {SharedModule} from '@turing/shared/shared.module';
import {ToolbarComponent} from '@turing/modules/main/toolbar/toolbar.component';
import {SidebarComponent} from '@turing/modules/main/sidebar/sidebar.component';
import {FilterPanelComponent} from './main/filter-panel/filter-panel.component';
import {ProductPanelComponent} from './main/product-panel/product-panel.component';

@NgModule({
            declarations: [ToolbarComponent, SidebarComponent, FilterPanelComponent, ProductPanelComponent],
  imports: [
    CommonModule,
    RouterModule,
    AppMaterialModule,
    SharedModule,
    BaseRoutingModule
  ],
  exports: []
})
export class BaseModule {
}
