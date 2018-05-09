import { Injectable } from '@angular/core';
import { Charge } from './charge';
import { Purchase } from './purchase';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class ChargesService {

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

    getCharges(date: string): any {

        return Observable.create((observer) => {

            this.httpClient.get(`${this.endpoint}/business/${this.business}/branch/${this.branch}/purchase?start=${date}`, {
                headers: this.headers
            }).subscribe((response: any) => {

                const purchases: Charge[] = [];

                if (response !== null) {

                    response.data.purchases.forEach((purchase: Purchase) => {

                        purchases.push({
                            id: purchase.transaction,
                            client: `${purchase.buyer.firstname} ${purchase.buyer.lastname}`,
                            timestamp: purchase.created_at,
                            sell: purchase.total,
                            comission: 0,
                            map: purchase.map_url,
                            sms: 0,
                            paidWith: `${purchase.payment.brand} x-${purchase.payment.last4}`,
                            qrCode: purchase.code.qr,
                            qrName: purchase.code.name,
                            status: purchase.order_status,
                            collapsed: true
                        });
                    });

                }

                observer.next(purchases);
                observer.complete();

            }, (error: any) => {

                observer.error(error);
                observer.complete();

            });

        });

    }

}
