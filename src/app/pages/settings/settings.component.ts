import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators, ValidatorFn, AbstractControl } from '@angular/forms';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';

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
  changePasswordForm: FormGroup;

  modalRef: BsModalRef;

  @ViewChild('templateChangePassword') templateChangePassword: TemplateRef<any>;

  constructor(private modalService: BsModalService) {

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

    this.changePasswordForm = new FormGroup({
      current: new FormControl(null, [Validators.required]),
      newPassword: new FormControl(null, [Validators.required, this.uppercaseLetterValidator, this.specialCharacterValidator, this.minLengthValidator(8)]),
      newPasswordConfirmation: new FormControl(null, {validators: [Validators.required], updateOn: 'blur'})
    }, this.matchValidator('newPassword', 'newPasswordConfirmation'));

  }

  ngOnInit() {
  }

  uppercaseLetterValidator(control: AbstractControl): { [key: string]: boolean } | null {

    const value = control.value || '';

    const atLeastOne = value.split('').some(char => {

      if (/[a-zA-Z]/.test(char)) {
        return char.toUpperCase() === char;
      }

    });

    if (atLeastOne) {
      return null;
    }

    return { 'uppercaseLetter': true };

  }

  specialCharacterValidator(control: AbstractControl): { [key: string]: boolean } | null {

    const value = control.value || '';

    if (value.search(/[ !"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/) !== -1) {
      return null;
    }

    return { 'specialCharacter': true };

  }

  minLengthValidator(minLength: number): ValidatorFn {
    return (control: AbstractControl): { [key: string]: boolean } | null => {

      const length = control.value ? control.value.length : 0;

      if (length < minLength) {
        return {'minLength': true};
      }

      return null;

    };
  }

  matchValidator(controlName1: string, controlName2: string): ValidatorFn {
    return (formGroup: FormGroup) => {
      if (!formGroup.get(controlName1).value || !formGroup.get(controlName2).value) { return null; }
      return formGroup.get(controlName1).value === formGroup.get(controlName2).value
        ? null : { 'match': true };
    };
  }

  openModal(template: TemplateRef<any>) {

    this.modalRef = this.modalService.show(template, Object.assign({},
      { class: 'modal-credytag', animated: false, keyboard: true, ignoreBackdropClick: true, show: true }
    ));

  }

  closeModal() {
    this.modalRef.hide();
  }

  showChangePasswordModal() {

    this.openModal(this.templateChangePassword);

  }

}
