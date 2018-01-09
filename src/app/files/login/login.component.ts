import { AppComponent } from '../../app.component';
import { AppSettings } from '../app.settings';
import { LoginService } from './login.service';
import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Cookie } from 'ng2-cookies/ng2-cookies';
import { VerificationService } from '../service/verification.service';

@Component({
  selector: 'login-root',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  title = 'Java';
  loginForm: FormGroup;
  model: any = {};
  loginfailed=false;
  constructor(private loginService: LoginService, private appComponent: AppComponent,private router: Router, private verificationService : VerificationService){
    localStorage.clear();
    Cookie.deleteAll();
  }
  onLogin() {
    this.loginService.loginUser(this.model).subscribe((result) => {
      if (result.status === AppSettings.SUCCESS_STATUS) {
        this.appComponent.error = '';
        if(result.role === "USER"){
       
          Cookie.set(AppSettings.AUTH_TOKEN_KEY, result.token, 1);
          Cookie.set(AppSettings.ROLE_KEY, result.role, 1);
          Cookie.set('userId', result.userId, 1);
          
          if(result.active===true){
            window.location.reload();
            this.router.navigate(['usermain']);
          }else if(result.active===false){
            this.verificationService.setEmail(result.email);
            this.router.navigate(['verification']);
          }
          
        }else if(result.role === "ADMIN"){
          window.location.reload();
          this.router.navigate(['adminmain']);
        }
        
      } else {
       this.loginfailed=true;
        this.router.navigate(['login']);
        this.appComponent.error = AppSettings.getHtmlMessages(result.messages);
      }
      //        this.registrationForm.submitted = false;
    });
  }
}
