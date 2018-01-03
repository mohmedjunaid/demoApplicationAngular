import { Component } from '@angular/core';
import { AppComponent } from '../../app.component';
import { Router } from '@angular/router';
import { AppSettings } from '../app.settings';
import { Cookie } from 'ng2-cookies/ng2-cookies';

@Component({
    selector: 'userdashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.css']
})

export class UserDashBoardComponent {
    
    constructor(private appComponent: AppComponent,private router: Router){
      let myCookie = Cookie.get('token');
    }
  }