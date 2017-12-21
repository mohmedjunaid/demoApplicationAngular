import { Component } from '@angular/core';
import { AppComponent } from '../../app.component';
import { Router } from '@angular/router';

@Component({
    selector: 'adminmain',
    templateUrl: './adminmain.component.html',
    styleUrls: ['./adminmain.component.css']
})

export class AdminMainComponent {
    
    constructor(private appComponent: AppComponent,private router: Router){
      
    }
  }