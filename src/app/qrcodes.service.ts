import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { QrCode } from './qrCode';
import { SessionService } from './session.service';

@Injectable()
export class QrcodesService {

    jsonHeaders = new HttpHeaders({
        'Content-Type': 'application/json'
    });
    endpoint = 'https://credytag-backend-staging.herokuapp.com/api/v1';
    business: string;
    branch: string;

    constructor(private httpClient: HttpClient, private session: SessionService) {

        this.business = this.session.business;
        this.branch = this.session.branch;

    }

    createQr(name: string, description: string, phone: string): any {

        const payload = {
            code: {
                name: name,
                description: description,
                mobile: phone
            }
        };

        return this.httpClient.post(`${this.endpoint}/business/${this.business}/branch/${this.branch}/code`, payload, {
            headers: this.jsonHeaders
        }).toPromise();

    }

    updateQr(editQrData: { id: string, name: string, phone: string, description: string, readonly qr: string }): any {

        const payload = {
            code: {
                name: editQrData.name,
                description: editQrData.description,
                mobile: editQrData.phone
            }
        };

        return this.httpClient.put(`${this.endpoint}/business/${this.business}/branch/${this.branch}/code/${editQrData.id}`, payload, {
            headers: this.jsonHeaders
        }).toPromise();

    }

    getCodes(): Promise<QrCode[]> {

        const promise = new Promise<QrCode[]>((resolve, reject) => {

            this.httpClient.get(`${this.endpoint}/business/${this.business}/branch/${this.branch}/code`, {
                headers: this.jsonHeaders
            }).subscribe((response: any) => {

                const codes: QrCode[] = [];

                if (response.data !== null) {

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
