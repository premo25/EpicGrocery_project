import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
token:string = '';
user:any;
  constructor(private router: Router){

      this.token = JSON.stringify(sessionStorage.getItem('token'));
      this.user = (sessionStorage.getItem('user'));
      console.log(this.user)
  }


  logout(){
    sessionStorage.clear();
     this.router.navigateByUrl('/sign-in');
  }
}
