import { Injectable } from '@angular/core';

@Injectable()
export class VerificationService{
    email: String;

    constructor(){
    }

    setEmail(val: String){
      this.email = val;
    }

    getEmail(){
      return this.email;
    }
}