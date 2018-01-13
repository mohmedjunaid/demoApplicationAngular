import {Injectable} from '@angular/core';
import {Registration} from '../model/registration';
import { WebService } from '../web.service';
import { Http } from '@angular/http';
import { Router } from '@angular/router';

@Injectable()
export class VerificationApiService {
  constructor(private webService : WebService, private http: Http, private router: Router) {
  }
  verifyUser(verificaion){
    return this.webService.postRequest('verification',verificaion);
  }
  reSendOtp(email){
    return this.webService.getRequest('resendOtp',"email=" +email);
  }
}