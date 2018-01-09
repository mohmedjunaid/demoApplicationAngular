import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ImageUploadModule } from 'angular2-image-upload';
import { AppComponent } from './app.component';
import { LoginComponent } from './files/login/login.component';
import { LoginService } from './files/login/login.service';
import { PageNotFoundComponent } from './files/pagenotfound/pagenotfound.component';
import { RegistrationComponent } from './files/registration/registration.component';
import { RegistrationService } from './files/registration/registration.service';
import { WebService } from './files/web.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { UserMainComponent } from './files/user/usermain.component';
import { AdminMainComponent } from './files/admin/adminmain.component';
import { UserDashBoardComponent } from './files/dashboard/dashboard.component';
import { AuthGuard } from './security/auth.guard';
import { from } from 'rxjs/observable/from';
import { ProductDetailsComponent } from './files/productdetails/productdetails.component';
import { AppService } from './files/service/appservice.service';
import { VerificationService } from './files/service/verification.service';
import { VerificationComponent } from './files/verification/verification.component';
import { VerificationApiService } from './files/verification/verificationapi.service';



const appRoutes: Routes = [
  { path: '', component: UserMainComponent ,
    children: [
    { path: '', component: UserDashBoardComponent},
    { path: 'product-details', component: ProductDetailsComponent}
    ]},
  { path: 'registration', component: RegistrationComponent },
  { path: 'verification', component: VerificationComponent },
  { path: 'login', component: LoginComponent},
  { path: 'usermain', component: UserMainComponent,  
    children: [
      { path: '', component: UserDashBoardComponent,canActivate: [AuthGuard]},
      { path: 'product-details', component: ProductDetailsComponent,canActivate: [AuthGuard]}
  ]},
  { path: 'adminmain', component: AdminMainComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    LoginComponent,
    UserMainComponent,
    AdminMainComponent,
    UserDashBoardComponent,
    ProductDetailsComponent,
    VerificationComponent
  ],
  imports: [
    ImageUploadModule.forRoot(),
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true }
    )
  ],
  providers: [RegistrationService,WebService, LoginService, AuthGuard, AppService,VerificationService, VerificationApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
