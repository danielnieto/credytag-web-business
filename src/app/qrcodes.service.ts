import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class QrcodesService {

    headers: HttpHeaders;
    endpoint = 'https://credytag-backend-dev.herokuapp.com/api/v1';
    business = '9817834a-f9fe-4246-bff3-c7014cb7cee8';
    branch = '7e1e1ba8-321b-46b4-be14-c9a987ca3b45';
    token = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJJZCI6IjUwNTVhN2FlLTI4OTUtNGJ' +
        'mNC05ZmU5LTMzYzdmYzQyOTZiYyIsImV4cCI6MTg3NjM4MTMzN30.ZLlLfp6NWfQl3HYxi2Dm1InvCZfsuKXZQI-eM1OLmyE';

    constructor(private httpClient: HttpClient) {

        this.headers = new HttpHeaders({
            'Authorization': this.token,
            'Content-Type': 'application/json'
        });

    }

    register(name: string, description: string, phone: string): any {

        const payload = {
            code: {
                name: name,
                description: description,
                mobile: phone
            }
        };

        const promise = new Promise((resolve, reject) => {

            this.httpClient.post(`${this.endpoint}/business/${this.business}/branch/${this.branch}/code`, payload, {
                headers: this.headers,
                responseType: 'text'
            }).subscribe((response: any) => {

                resolve(response);

            }, (error: any) => {

                reject(error);

            });
        });


        return promise;

    }

}
