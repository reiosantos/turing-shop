import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppMaterialModule } from '@turing/app-material.module';
import { ToCamelCasePipe } from './pipes/to-camel-case/to-camel-case.pipe';
import { VcLetDirective } from './directives/vc-let/vc-let.directive';
import { DialogComponent } from './components/dialog/dialog.component';

@NgModule({
  declarations: [ToCamelCasePipe, VcLetDirective, DialogComponent],
  imports: [
    CommonModule,
    AppMaterialModule
  ],
  providers: [
    ToCamelCasePipe
  ],
  exports: [
    ToCamelCasePipe,
    VcLetDirective,
    DialogComponent
  ]
})
export class SharedModule {
}
