import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppMaterialModule } from '@turing/app-material.module';
import { ToCamelCasePipe } from './pipes/to-camel-case/to-camel-case.pipe';
import { VcLetDirective } from './directives/vc-let/vc-let.directive';

@NgModule({
  declarations: [ToCamelCasePipe, VcLetDirective],
  imports: [
    CommonModule,
    AppMaterialModule
  ],
  providers: [
    ToCamelCasePipe
  ],
  exports: [
    ToCamelCasePipe,
    VcLetDirective
  ]
})
export class SharedModule {
}
