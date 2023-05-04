
import { Directive, ElementRef, OnInit,Renderer2, HostBinding, HostListener, Input} from '@angular/core';
import { elementAt } from 'rxjs';

@Directive({
  selector: '[appRendererTextBg]'
})
export class RendererTextBgDirective implements OnInit{

  @Input() bgColor: string = 'yellow';

  @HostBinding('style.backgroundColor') color?:string;
  constructor(private element:ElementRef, private renderer:Renderer2) { }

  ngOnInit(): void {
    // (this.element.nativeElement as HTMLElement).style.backgroundColor = 'pink'
    this.renderer.setStyle(this.element.nativeElement, 'backgroundColor', 'pink')
  }

  @HostListener('mouseenter') onmouseover(event:Event){
    // this.renderer.setStyle(this.element.nativeElement, 'backgroundColor', 'lightblue')
    this.color = this.bgColor
  }

  @HostListener('mouseleave') onmouselave(event:Event){
    // this.renderer.setStyle(this.element.nativeElement, 'backgroundColor', 'lightgray')
    this.color = 'lightgray'
  }
}





