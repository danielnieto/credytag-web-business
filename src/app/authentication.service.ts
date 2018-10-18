import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { SessionService } from './session.service';
import { environment } from '../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class AuthenticationService {

    endpoint = environment.apiUrl;
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

        return this.httpClient.post(`${this.endpoint}/businesslogin`, payload, {
            headers: this.jsonHeaders
        }).toPromise();

    }

    logout() {
        this.session.clearSession();
    }

}
