import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AppSettings } from '../files/app.settings';
import { Cookie } from 'ng2-cookies/ng2-cookies';

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private router: Router) { }

    canActivate() {
        //if (localStorage.getItem(AppSettings.AUTH_TOKEN_KEY)) {
            // logged in so return true
          //  return true;
        //}
        //window.location.reload();
        let myCookie = Cookie.get(AppSettings.AUTH_TOKEN_KEY);
        if(myCookie){
            return true;
        }
        this.router.navigate(['/login']);
        return false;
    }
}