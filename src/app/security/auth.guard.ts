import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AppSettings } from '../files/app.settings';

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private router: Router) { }

    canActivate() {
        if (localStorage.getItem(AppSettings.AUTH_TOKEN_KEY)) {
            // logged in so return true
            return true;
        }

        // not logged in so redirect to login page
        this.router.navigate(['/login']);
        return false;
    }
}