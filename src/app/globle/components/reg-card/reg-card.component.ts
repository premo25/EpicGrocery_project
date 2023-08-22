import { Component } from '@angular/core';
import { Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
@Component({
  selector: 'app-reg-card',
  templateUrl: './reg-card.component.html',
  styleUrls: ['./reg-card.component.scss']
})
export class RegCardComponent {

  childData: string = " ";
  @Output()
  dataString!: EventEmitter<string>;

  addToCart(){
    this.dataString.emit(this.childData);
  }
}



  




