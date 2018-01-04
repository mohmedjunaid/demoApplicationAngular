import { AppSettings } from './app.settings';
import { Injectable } from '@angular/core';
import { Http,Headers,RequestOptions } from '@angular/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Cookie } from 'ng2-cookies/ng2-cookies';
import 'rxjs/Rx';
@Injectable()
export class WebService {

   constructor(private http: Http, private router: Router) {     
  }

  postRequest(serviceName, modelObj) {
    return this.http.post(this.getWebServiceUrl(serviceName), modelObj, { headers: this.getWebServiceHeaders() })
      .map(res => res.json())
      .catch(error => this.onWebServiceError(error));
  }

  getRequest(serviceName, params) {
    let options = new RequestOptions({ headers: this.getWebServiceHeaders(), search: params });
    
    return this.http.get(this.getWebServiceUrl(serviceName), options)
      .map(res => res.json())
      .catch(error => this.onWebServiceError(error));
  } 

  deleteRequest(serviceName) {
    let options = new RequestOptions({ headers: this.getWebServiceHeaders()});
    return this.http.delete(this.getWebServiceUrl(serviceName), options)
                    .map(res => res.json())
                    .catch(error => this.onWebServiceError(error));   
  }

  private getWebServiceUrl(serviceName) {
    return `${AppSettings.API_ENDPOINT}/` + serviceName;
  }

  private getWebServiceHeaders() {
    const headers = new Headers();
   // headers.append('Content-Type', 'application/json');
    
  // headers.append('Access-Control-Allow-Origin', '*');
    const authToken = Cookie.get(AppSettings.AUTH_TOKEN_KEY);
    if(authToken){
      headers.append('Authorization', `Bearer ${authToken}`);
    }
    return headers;
  }

  onWebServiceError(res) {
    console.log(res);
    if(!res.status) {
      AppSettings.error = "Require to login again.";
      return Observable.throw(this.router.navigate(['abbc']));
    } else {
      if(res._body) {
        AppSettings.errorDetails = JSON.parse(res._body);
        this.router.navigate(['error'])
      }
      return Observable.throw(res);
    }
  } 

}