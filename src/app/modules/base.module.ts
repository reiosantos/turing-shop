import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AppMaterialModule } from '@turing/app-material.module';
import { BaseRoutingModule } from '@turing/modules/base-routing.module';
import { SharedModule } from '@turing/shared/shared.module';

@NgModule({
  declarations: [],
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
