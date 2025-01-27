import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from '../authentication.service'; import { SessionService } from '../session.service';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

    loginForm: FormGroup;
    loginError: boolean;
    @ViewChild('errorMessage') errorMessage: ElementRef;

    constructor(private auth: AuthenticationService, private session: SessionService, private router: Router, private spinner: NgxSpinnerService) {
        this.loginForm = new FormGroup({
            username: new FormControl('', [Validators.required, Validators.email]),
            password: new FormControl('', [Validators.required]),
        });

    }

    ngOnInit() {}

    async onSubmit() {
        const username = this.loginForm.value.username;
        const password = this.loginForm.value.password;

        this.spinner.show();

        try {

            const response = await this.auth.login(username, password);

            await this.session.setSession(response);
            this.router.navigate(['/cobros']);

        } catch (error) {
            this.loginError = true;
            this.errorMessage.nativeElement.classList.add('shake');
            setTimeout(() => {
                this.errorMessage.nativeElement.classList.remove('shake');
            }, 500);
        } finally {
            this.spinner.hide();
        }

    }

}
