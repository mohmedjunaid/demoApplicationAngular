import {AppComponent} from '../../app.component';
import {AppSettings} from '../app.settings';
import {Registration} from '../model/registration';
import {WebService} from '../web.service';
import {RegistrationService} from './registration.service';
import {Component} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'registration-component',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
  url: any;
  title = 'Java';
  registrationForm: FormGroup;
  model: any = {};
  loading = false;


  minDate = new Date(1900, 5, 10);
  maxDate = new Date(2018, 9, 15);

  bsValue: Date = new Date();
  bsRangeValue: any = [new Date(1900, 7, 4), new Date(2010, 7, 20)];

  selectedEntry;

  onSelectionChange(entry) {
    if (entry === "male") {
      this.model.gender = "male";
    } else if (entry === "female") {
      this.model.gender = "female";
    } else {
      this.model.gender = "male";
    }

    this.selectedEntry = entry;
  }

  readUrl(event: any) {
    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader();

      reader.onload = (event: any) => {
        this.url = event.target.result;
      };

      reader.readAsDataURL(event.target.files[0]);
    }
  }
  constructor(private registrationService: RegistrationService, private appComponent: AppComponent,
    private router: Router, private webService: WebService) {
    this.loading = true;
    this.model.gender = "male";
  }
  onSubmit() {
    this.model.profile = this.url;
    this.webService.postRequest('registration', this.model).subscribe((result) => {
      if (result.status === AppSettings.SUCCESS_STATUS) {
        console.log(result);
        this.appComponent.error = '';
        this.router.navigate(['login']);
      } else {
        alert(result.messages);
        this.appComponent.error = AppSettings.getHtmlMessages(result.messages);
      }
      //        this.registrationForm.submitted = false;
    });
  }
}