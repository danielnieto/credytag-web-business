import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class SessionService {

    public user = {
        firstname: null,
        lastname: null,
        email: null
    };

    public token: {
        jwt: string,
        refresh_token: string
    };

    public isLoggedIn = false;

    constructor() {}

    clearSession() {
        // clear all values from user
        for (let key in this.user) {
            this.user[key] = null;
        }

        this.isLoggedIn = false;

    }
}
