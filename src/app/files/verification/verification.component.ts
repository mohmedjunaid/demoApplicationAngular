import { AppComponent } from '../../app.component';
import { AppSettings } from '../app.settings';
import { WebService } from '../web.service';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { VerificationService } from '../service/verification.service';
import { VerificationApiService } from './verificationapi.service';
import { Observable } from 'rxjs/Observable';

@Component({
    selector: 'verification',
    templateUrl: './verification.component.html',
    styleUrls: ['./verification.component.css']
})
export class VerificationComponent {
    loading = false;
    model: any = {};
    countDown;
    counter = 5;

    constructor(private appComponent: AppComponent, private router: Router, private webService: WebService, private verificationService: VerificationService, private verificationApiService: VerificationApiService) {
        this.loading = true;
        this.model.email = verificationService.getEmail();
        this.countDown = Observable.timer(0, 1000).take(this.counter).map(() => --this.counter);
        //Observable.timer(0, 1000).takeWhile(() => true).subscribe(() => this.func());


    }
    func(){
alert("fv");
    }
    onVerification() {
        this.verificationApiService.verifyUser(this.model).subscribe((result) => {
            if (result.status === AppSettings.SUCCESS_STATUS) {
                if (result.verified === true) {
                    window.location.reload;
                    this.router.navigate(['usermain']);
                } else {
                    this.router.navigate(['login']);
                }
            } else {
            }
        });
    }
}