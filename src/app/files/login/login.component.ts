import { AppComponent } from '../../app.component';
import { AppSettings } from '../app.settings';
import { LoginService } from './login.service';
import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'login-root',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  title = 'Java';
  loginForm: FormGroup;
  model: any = {};
  
  constructor(private loginService: LoginService, private appComponent: AppComponent,private router: Router){
    localStorage.clear();
  }
  onLogin() {
    this.loginService.loginUser(this.model).subscribe((result) => {
      if (result.status === AppSettings.SUCCESS_STATUS) {
        this.appComponent.error = '';
        if(result.role === "USER"){
          //localStorage.setItem('currentUser', JSON.stringify({ userId: result.userId, token: result.token }));
          localStorage.setItem(AppSettings.AUTH_TOKEN_KEY, result.token);
          localStorage.setItem(AppSettings.ROLE_KEY, result.role);
          localStorage.setItem("userId", result.userId);
          this.router.navigate(['usermain']);
        }else if(result.role === "ADMIN"){
          this.router.navigate(['adminmain']);
        }
        
      } else {
        this.router.navigate(['login']);
        this.appComponent.error = AppSettings.getHtmlMessages(result.messages);
      }
      //        this.registrationForm.submitted = false;
    });
  }
}
