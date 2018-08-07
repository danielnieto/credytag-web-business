import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class SessionService {
    
    endpoint = 'https://credytag-backend-dev.herokuapp.com/api/v1';
    jsonHeaders = new HttpHeaders({
        'Content-Type': 'application/json'
    });


    public session = {
        token: {
            jwt: "",
            refresh_token: ""
        },
        user: {
            firstname: null,
            lastname: null,
            email: null
        },
        business: null,
        branch: null
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

    constructor(private httpClient: HttpClient) {

    }

    getSession(){
        return JSON.parse(localStorage.getItem("session"));
    }

    async setSession(data){
        this.session.token = data.data.merchant.token;
        this.session.user.firstname = data.data.merchant.firstname;
        this.session.user.lastname = data.data.merchant.lastname;
        this.session.user.email = data.data.merchant.email;

        this.persistSession();

        try{
            const businessResponse = await this.getBusiness();
            this.session.business = businessResponse.data.business[0].id;
            const branchResponse = await this.getBranch();
            this.session.branch = branchResponse.data.branch[0].id;

            this.persistSession();

        }catch(err){
            console.log("cannot get business or branch", err);
        }


    }

    async getBusiness(){

        return this.httpClient.get(`${this.endpoint}/business`, {
            headers: this.jsonHeaders
        }).toPromise(); 
        
    }

    async getBranch(){

        return this.httpClient.get(`${this.endpoint}/business/${this.session.business}/branch`, {
            headers: this.jsonHeaders
        }).toPromise(); 
        
    }

    clearSession() {
        // clear all values from user
        for (let key in this.session) {
            this.session[key] = null;
        }

        localStorage.removeItem("session");

    }

    persistSession(){
        localStorage.setItem("session", JSON.stringify(this.session));        
    }
}
