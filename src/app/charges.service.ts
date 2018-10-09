import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { SessionService } from './session.service';

@Injectable()
export class ChargesService {

    jsonHeaders = new HttpHeaders({
        'Content-Type': 'application/json'
    });
    endpoint = 'https://credytag-backend-dev.herokuapp.com/api/v1';
    business: string;
    branch: string;

    constructor(private httpClient: HttpClient, private session: SessionService) {

        this.business = this.session.business;
        this.branch = this.session.branch;

    }

    async getCharges(date: string): Promise<{ data: { purchases } }> {

        return this.httpClient.get<{ data: { purchases } }>(`${this.endpoint}/business/${this.business}/branch/${this.branch}/purchase?start=${date}`, {
                headers: this.jsonHeaders
        }).toPromise();

    }

}
