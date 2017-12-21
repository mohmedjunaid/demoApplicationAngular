import { Component } from '@angular/core';
import { AppComponent } from '../../../app.component';
import { Router } from '@angular/router';
import { AppSettings } from '../../app.settings';

@Component({
    selector: 'userdashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.css']
})

export class UserDashBoardComponent {
    
    constructor(private appComponent: AppComponent,private router: Router){
      //alert(localStorage.getItem(AppSettings.AUTH_TOKEN_KEY))
    }
  }