import { Component, HostBinding , HostListener, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  public isCollapsed = true;

  navbg:any;
  scrollbar:any;
  @HostListener('document:scroll') scrollover(){
    console.log(document.body.scrollTop,'scrolllength#');

    if(document.body.scrollTop > 0 || document.documentElement.scrollTop > 0)
    {
      this.scrollbar = true;
      this.navbg = {
        'background-color':'#000000'
      }
    }else
    {
        this.scrollbar = false;
        this.navbg = {}
    }
  }
}
