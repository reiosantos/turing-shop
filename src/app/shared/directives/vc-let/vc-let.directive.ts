import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

interface LetContext<T> {
  vcLet: T | null;
}

@Directive({
  selector: '[vcLet]'
})
export class VcLetDirective<T> {
  private letContext: LetContext<T> = { vcLet: null };

  constructor(
    private viewContainerRef: ViewContainerRef,
    private templateRef: TemplateRef<LetContext<T>>
  ) {
    this.viewContainerRef.createEmbeddedView(this.templateRef, this.letContext);
  }

  @Input()
  set vcLet(value: T) {
    this.letContext.vcLet = value;
  }
}
