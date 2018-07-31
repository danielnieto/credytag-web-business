import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { SessionService } from '../session.service';


@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    constructor(private session: SessionService){
        
    }

    intercept(req: HttpRequest<any>,
              next: HttpHandler): Observable<HttpEvent<any>> {

        const jwt = this.session.jwt;

        if (jwt) {
            const cloned = req.clone({
                headers: req.headers.set("Authorization",
                    "Bearer " + jwt)
            });

            return next.handle(cloned);
        }
        else {
            return next.handle(req);
        }
    }
}