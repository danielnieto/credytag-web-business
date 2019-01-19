import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators, ValidatorFn, AbstractControl } from '@angular/forms';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { SessionService } from '../../session.service';
import { UserSession } from '../../user-session';

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
  branchDetails: any;
  session: UserSession;

  modalRef: BsModalRef;

  @ViewChild('templateChangePassword') templateChangePassword: TemplateRef<any>;

  constructor(private modalService: BsModalService, private sessionService: SessionService) {
    this.session = this.sessionService.getSession();
    this.branchDetails = this.session.branchDetails;

    const fullname = `${this.session.user.firstname} ${this.session.user.lastname}`;
    const personType = parseInt(this.branchDetails.person_type, 10) === 1 ? 'Moral' : 'Física';
    const usage = parseInt(this.branchDetails.person_type, 10) === 1 ? 'Otros' : 'Gastos en general';

    this.userForm = new FormGroup({
      fullName: new FormControl(fullname, [Validators.required]),
      email: new FormControl(this.session.user.email, [Validators.required, Validators.email]),
      phone: new FormControl(this.session.user.mobile, [Validators.required])
    });

    this.userForm.disable();

    this.companyForm = new FormGroup({
      name: new FormControl(this.branchDetails.name, [Validators.required]),
      phone: new FormControl(this.branchDetails.mobile, [Validators.required]),
      website: new FormControl(this.branchDetails.website),
      email: new FormControl(this.branchDetails.email, [Validators.email]),
      type: new FormControl(this.branchDetails.type),
      billingInformation: new FormControl(null, [Validators.required]),
    });

    this.companyForm.disable();

    this.billingForm = new FormGroup({
      personType: new FormControl(personType, [Validators.required]),
      name: new FormControl(this.branchDetails.legal_name, [Validators.required]),
      rfc: new FormControl(this.branchDetails.rfc, [Validators.required]),
      zipCode: new FormControl(this.branchDetails.cp, [Validators.email]),
      usage: new FormControl(usage, [Validators.required])
    });

    this.billingForm.disable();

    this.bankForm = new FormGroup({
      bank: new FormControl(this.branchDetails.bank, [Validators.required]),
      spei: new FormControl(this.branchDetails.spei, [Validators.required]),
      beneficiary: new FormControl(this.branchDetails.bank_account_name, [Validators.required])
    });

    this.bankForm.disable();

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
