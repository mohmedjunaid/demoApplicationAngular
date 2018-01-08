import { Component } from '@angular/core';
import { AppComponent } from '../../app.component';
import { Router } from '@angular/router';
import { rootRoute } from '@angular/router/src/router_module';
import { Cookie } from 'ng2-cookies/src/services/cookie';
import { AppService } from '../service/appservice.service';
import { WebService } from '../web.service';
import { AppSettings } from '../app.settings';

@Component({
    selector: 'product-details',
    templateUrl: './productdetails.component.html',
    styleUrls: ['./productdetails.component.css'],
})

export class ProductDetailsComponent {
    url: String;
    productDetail:any;
    constructor(private appComponent: AppComponent,private router: Router, private appService:AppService,private webService: WebService){
        this.getProductDetail(appService.getUrl());
    }
    
     logout(){
         localStorage.clear();
         Cookie.deleteAll();
         this.router.navigate(['']);
     }   
     getProductDetail(url) {
        this.webService.getRequest('getProductDetail', "url=" + url).subscribe((result) => {
          if (result.status === AppSettings.SUCCESS_STATUS) {
            this.productDetail=result;
          } else {
         
          }
        });
      }
  }