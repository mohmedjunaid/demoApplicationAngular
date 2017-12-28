import { Component } from '@angular/core';
import { Cookie } from 'ng2-cookies/src/services/cookie';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public error : string = '';
  title = 'Java';
  constructor(private router: Router){
    console.log("called");
}
  logout(){
    localStorage.clear();
    Cookie.deleteAll();
    this.router.navigate(['login']);
}   
}
