import { Component } from '@angular/core';
import { AppComponent } from '../../app.component';
import { Router } from '@angular/router';
import { AppSettings } from '../app.settings';
import { Cookie } from 'ng2-cookies/ng2-cookies';
import { WebService } from '../web.service';
import { AppService } from '../service/appservice.service';

@Component({
  selector: 'userdashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class UserDashBoardComponent {
  products: any;
  searchItem: String;
  
  constructor(private appComponent: AppComponent, private router: Router, private webService: WebService, private appService:AppService) {
    let myCookie = Cookie.get(AppSettings.AUTH_TOKEN_KEY);

    this.getProduct();
    this.searchItem = localStorage.getItem("searchItem");
  }
  getProduct() {
    this.searchItem = localStorage.getItem("searchItem");

    this.webService.getRequest('getProducts', "text=" + this.searchItem).subscribe((result) => {
      if (result.status === AppSettings.SUCCESS_STATUS) {
        this.products = result.products;
      } else {

      }
    });
  }
  getProductDetail(product) {
    this.appService.setUrl(product.productURL);
    this.router.navigate(['product-details']);
  }
}