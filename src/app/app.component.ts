import { Component } from '@angular/core';
import { Cookie } from 'ng2-cookies/src/services/cookie';
import { Router } from '@angular/router';
import { AppSettings } from './files/app.settings';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public error : string = '';
  title = 'Java';
  myCookie = Cookie.get(AppSettings.AUTH_TOKEN_KEY);
 
  constructor(private router: Router){
    console.log("called");

}
  logout(){
    window.location.reload();
    localStorage.clear();
    Cookie.deleteAll();
    this.router.navigate(['']);
}  
login(){
  window.location.reload();
  this.router.navigate(['login']);
}
onSearchChange(searchValue : string ) {  
  console.log(searchValue);
  localStorage.setItem("searchItem",searchValue);
  window.location.reload();
}
}
