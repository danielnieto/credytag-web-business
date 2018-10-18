import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UserSession } from './user-session';
import { environment } from '../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class SessionService {

    endpoint = environment.apiUrl;
    jsonHeaders = new HttpHeaders({
        'Content-Type': 'application/json'
    });

    public session: UserSession;

    public get isLoggedIn() {
        return this.jwt;
    }

    public get jwt(): string {

        const session = this.getSession();

        if (session) {

            try {
                const jwt = session.token.jwt;
                return jwt;

            } catch (error) {
                return null;
            }

        } else {
            return null;
        }

    }

    public get business(): string {

        const session = this.getSession();

        if (session) {
            return session.business;
        } else {
            return null;
        }

    }

    public get branch(): string {

        const session = this.getSession();

        if (session) {
            return session.branch;
        } else {
            return null;
        }

    }

    constructor(private httpClient: HttpClient) { }

    getSession(): UserSession {

        const sessionString = localStorage.getItem('session');

        if (!sessionString) {
            return null;
        }

        const session: UserSession = JSON.parse(sessionString) as UserSession;

        return session;
    }

    async setSession(data) {

        this.session = new UserSession();

        this.session.token = data.data.merchant.token;
        this.session.user.firstname = data.data.merchant.firstname;
        this.session.user.lastname = data.data.merchant.lastname;
        this.session.user.email = data.data.merchant.email;

        this.persistSession();

        try {
            const businessResponse = await this.getBusiness();
            this.session.business = businessResponse.data.business[0].id;
            const branchResponse = await this.getBranch();
            this.session.branch = branchResponse.data.branch[0].id;

            this.persistSession();

        } catch (error) {
            console.log('cannot get business or branch', error);
        }


    }

    async getBusiness(): Promise<{ data: any }> {

        return this.httpClient.get<any>(`${this.endpoint}/business`, {
            headers: this.jsonHeaders
        }).toPromise();

    }

    async getBranch(): Promise<{ data: any }> {

        return this.httpClient.get<any>(`${this.endpoint}/business/${this.session.business}/branch`, {
            headers: this.jsonHeaders
        }).toPromise();

    }

    clearSession() {

        // clear all values from user
        this.session = null;

        localStorage.removeItem('session');

    }

    persistSession() {
        localStorage.setItem('session', JSON.stringify(this.session));
    }
}
