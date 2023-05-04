import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, ContentChild, DoCheck, ElementRef, Input, OnChanges, OnDestroy, OnInit, SimpleChange, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements
OnInit, OnChanges,
DoCheck,AfterContentInit,AfterContentChecked,
AfterViewInit,AfterViewChecked,
OnDestroy
{

  @Input() userName!:string
  @Input() name!:string
  @ContentChild('getPeragraph') peraValue?:ElementRef

  constructor(){
    console.log("constructor called");
  }
  ngOnInit(): void {
    console.log("ngOnInit called");
    console.log(this.peraValue);
  }
  ngOnChanges(element:SimpleChanges): void {
    console.log("ngOnChanges called");
    console.log(element);
  }
  ngDoCheck(): void {
    console.log('ngDoCheck called');
  }
  ngAfterContentInit(): void {
    console.log("ngAfterContentInit called");
    console.log(this.peraValue?.nativeElement.innerHTML);
  }
  ngAfterContentChecked(): void {
    console.log("after content changed");
  }
  ngAfterViewInit(): void {
    console.log("after view init");
  }
  ngAfterViewChecked(): void {
    console.log("after view changed");
  }
  ngOnDestroy(): void {
    console.log('onDestroy called');
  }
}
