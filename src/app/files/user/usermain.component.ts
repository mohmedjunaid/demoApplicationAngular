import { Component } from '@angular/core';
import { AppComponent } from '../../app.component';
import { Router } from '@angular/router';
import { rootRoute } from '@angular/router/src/router_module';

@Component({
    selector: 'usermain',
    templateUrl: './usermain.component.html',
    styleUrls: ['./usermain.component.css'],
})

export class UserMainComponent {
    
    constructor(private appComponent: AppComponent,private router: Router){
        console.log("called");
    }
    
     logout(){
         localStorage.clear();
         this.router.navigate(['login']);
     }   
   
  }