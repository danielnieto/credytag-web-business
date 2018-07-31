import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class SessionService {


    public session = {
        token: {
            jwt: "",
            refresh_token: ""
        },
        user: {
            firstname: null,
            lastname: null,
            email: null
        }
    }

    public get isLoggedIn(){
        return localStorage.getItem("session");
    }

    public get jwt(){
        const session = this.getSession();
        
        if(session){
            return session.token.jwt;
        }else{
            return null;
        }
        
    }

    constructor() {}

    getSession(){
        return JSON.parse(localStorage.getItem("session"));
    }

    setSession(data){
        this.session.token = data.data.merchant.token;
        this.session.user.firstname = data.data.merchant.firstname;
        this.session.user.lastname = data.data.merchant.lastname;
        this.session.user.email = data.data.merchant.email;

        localStorage.setItem("session", JSON.stringify(this.session));

    }

    clearSession() {
        // clear all values from user
        for (let key in this.user) {
            this.user[key] = null;
        }

        localStorage.removeItem("session");

    }
}
