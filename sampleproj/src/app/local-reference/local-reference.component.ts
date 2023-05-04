import { Component } from '@angular/core';

@Component({
  selector: 'app-local-reference',
  templateUrl: './local-reference.component.html',
  styleUrls: ['./local-reference.component.css']
})
export class LocalReferenceComponent {

  
  showlist:boolean = false;
  selectedItem!:HTMLElement
  items:string[] = ['item1','item2','item3']

  onToggle(){
    this.showlist = !this.showlist
  }

  onItemClick(item:HTMLElement){
    console.log(item.innerHTML);
    this.selectedItem = item
  }
}
