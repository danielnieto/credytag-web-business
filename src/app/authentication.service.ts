import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class AuthenticationService {

    endpoint = 'https://credytag-backend-dev.herokuapp.com/api/v1';
    jsonHeaders = new HttpHeaders({
        'Content-Type': 'application/json'
    });

    constructor(private httpClient: HttpClient) {

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
                
                resolve(response);

            }, (error: any) => {

                reject(error);

            });

        });
    }
    
}
