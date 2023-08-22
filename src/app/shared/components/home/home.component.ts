import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  receiveData!: string;

  receive(data: string) {
    this.receiveData= data;
  }
}
