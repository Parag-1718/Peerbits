import {Directive, OnInit, ElementRef} from '@angular/core'
@Directive({
  selector: `[highLightText]`
})
export class HighlightTextDirectives implements OnInit{

  constructor(private element:ElementRef){

  }
  ngOnInit(): void {
     (this.element.nativeElement as HTMLElement).style.backgroundColor = 'lightgreen'
  }
}
