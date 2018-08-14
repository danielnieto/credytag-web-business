import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss', '../../content/page-title.scss']
})
export class SettingsComponent implements OnInit {

  userForm: FormGroup;
  companyForm: FormGroup;
  billingForm: FormGroup;
  bankForm: FormGroup;


  constructor() {

    this.userForm = new FormGroup({
      fullName: new FormControl(null, [Validators.required]),
      email: new FormControl(null, [Validators.required, Validators.email]),
      phone: new FormControl(null, [Validators.required])
    });

    this.companyForm = new FormGroup({
      name: new FormControl(null, [Validators.required]),
      phone: new FormControl(null, [Validators.required]),
      website: new FormControl(),
      email: new FormControl(null, [Validators.email]),
      type: new FormControl(),
      billingInformation: new FormControl(null, [Validators.required]),
    });

    this.billingForm = new FormGroup({
      personType: new FormControl(null, [Validators.required]),
      name: new FormControl(null, [Validators.required]),
      rfc: new FormControl(null, [Validators.required]),
      zipCode: new FormControl(null, [Validators.email]),
      usage: new FormControl(null, [Validators.required])
    });

    this.bankForm = new FormGroup({
      bank: new FormControl(null, [Validators.required]),
      spei: new FormControl(null, [Validators.required]),
      beneficiary: new FormControl(null, [Validators.required])
    });

  }

  ngOnInit() {
  }

}
