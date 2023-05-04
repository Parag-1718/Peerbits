import { Directive, Input, OnChanges, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appPgIf]'
})
export class PgIfDirective implements OnChanges {

  // @Input() appPgIf?:boolean
  
  @Input() set appPgIf(value: boolean) {
        if(value){
          this.vcref.createEmbeddedView(this.templateref)
        }
        else{
          this.vcref.clear()
        }
  }

  constructor(
    private templateref: TemplateRef<any>,
    private vcref: ViewContainerRef
  ) { }

  // ngOnChanges() {
  //   if (this.appPgIf) {
  //     this.vcref.createEmbeddedView(this.templateref);
  //   }
  //   else{
  //     this.vcref.clear();
  //   }
  //  }
  ngOnChanges(){}
}
