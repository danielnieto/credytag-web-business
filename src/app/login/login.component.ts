import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from '../authentication.service';
import { SessionService } from '../session.service';
import { Router } from '../../../node_modules/@angular/router';
@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

    loginForm: FormGroup;

    constructor(private auth: AuthenticationService, private SessionService: SessionService, private router: Router) {
        this.loginForm = new FormGroup({
            username: new FormControl("business@credytag.com", [Validators.required, Validators.email]),
            password: new FormControl("123456", [Validators.required]),
        });

    }

    ngOnInit() {}

    onSubmit() {
        const username = this.loginForm.value.username;
        const password = this.loginForm.value.password;

        this.auth.login(username, password).then(success => {
                console.log(JSON.stringify(success));
                this.router.navigate(["/cobros"]);
            },
            fail => {
                alert("logged in failed: " + JSON.stringify(fail));
            });
    }

}
