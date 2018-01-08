import { Injectable } from '@angular/core';

@Injectable()
export class AppService{
    url: String;

    constructor(){
    }

    setUrl(val: String){
      this.url = val;
    }

    getUrl(){
      return this.url;
    }
}