import {Injectable} from '@angular/core';
import {Registration} from '../model/registration';
import { WebService } from '../web.service';
import { Http } from '@angular/http';
import { Router } from '@angular/router';

@Injectable()
export class RegistrationService {
  constructor(private webService : WebService, private http: Http, private router: Router) {
  }
  addUser(registration : Registration){
    return this.webService.postRequest('registration', registration);
  }
}