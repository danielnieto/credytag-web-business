import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from '../authentication.service';
import { SessionService } from '../session.service';
import { Router } from '@angular/router';
@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

    loginForm: FormGroup;

    constructor(private auth: AuthenticationService, private session: SessionService, private router: Router) {
        this.loginForm = new FormGroup({
            username: new FormControl('business@credytag.com', [Validators.required, Validators.email]),
            password: new FormControl('123456', [Validators.required]),
        });

    }

    ngOnInit() {}

    async onSubmit() {
        const username = this.loginForm.value.username;
        const password = this.loginForm.value.password;

        try {

            const response = await this.auth.login(username, password);

            console.log(JSON.stringify(response));
            this.session.setSession(response);
            this.router.navigate(['/cobros']);

        } catch (error) {
            alert('logged in failed:' + JSON.stringify(error));
        }

    }

}
