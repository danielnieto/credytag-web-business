import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { SessionService } from './session.service';

@Injectable({
    providedIn: 'root'
})
export class AuthenticationService {

    endpoint = 'https://credytag-backend-dev.herokuapp.com/api/v1';
    jsonHeaders = new HttpHeaders({
        'Content-Type': 'application/json'
    });

    constructor(private httpClient: HttpClient, private session: SessionService) {

    }

    login(username: string, password: string) {

        const payload = {
            merchant: {
                username: username,
                password: password
            }
        };

        return new Promise((resolve, reject) => {

            this.httpClient.post(`${this.endpoint}/businesslogin`, payload, {
                headers: this.jsonHeaders
            }).subscribe((response: any) => {
                
                this.session.token = response.data.merchant.token;
                this.session.user.firstname = response.data.merchant.firstname;
                this.session.user.lastname = response.data.merchant.lastname;
                this.session.user.email = response.data.merchant.email;

                this.session.isLoggedIn = true;

                resolve(response);

            }, (error: any) => {

                reject(error);

            });

        });
    }

    logout(){
        this.session.clearSession();
    }
    
}
