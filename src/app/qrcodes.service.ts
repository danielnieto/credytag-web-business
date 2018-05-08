import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { QrCode } from './qrCode';

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

    createQr(name: string, description: string, phone: string): any {

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
    
    updateQr(editQrData: { id: string, name: string, phone: string, description: string, readonly qr: string }): any {

        const payload = {
            code: {
                name: editQrData.name,
                description: editQrData.description,
                mobile: editQrData.phone
            }
        };

        const promise = new Promise((resolve, reject) => {

            this.httpClient.put(`${this.endpoint}/business/${this.business}/branch/${this.branch}/code/${editQrData.id}`, payload, {
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

    getCodes(): Promise<QrCode[]> {

        const promise = new Promise<QrCode[]>((resolve, reject) => {

            this.httpClient.get(`${this.endpoint}/business/${this.business}/branch/${this.branch}/code`, {
                headers: this.headers
            }).subscribe((response: any) => {

                const codes: QrCode[] = [];

                if (response !== null) {

                    response.data.code.forEach((code: any) => {

                        codes.push({
                            name: code.name,
                            qr: code.qr,
                            phone: code.mobile,
                            description: code.description,
                            id: code.id,
                            enabled: true
                        });
                    });

                }

                resolve(codes);

            }, (error: any) => {

                reject(error);

            });

        });

        return promise;

    }

}
