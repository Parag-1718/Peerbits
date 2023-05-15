import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-alert-model',
  templateUrl: './alert-model.component.html',
  styleUrls: ['./alert-model.component.css']
})
export class AlertModelComponent {

  @Input() message!: string;
  @Output() closeBox: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }
  closeModal(){
    this.closeBox.emit(this.message);
  }
}
