import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, CanActivateChild } from '@angular/router';
import { Observable } from 'rxjs';
import { SessionService } from './session.service';

@Injectable()
export class AuthGuard implements CanActivate, CanActivateChild {

    constructor(private session: SessionService, private router: Router) {}

    canActivate( next: ActivatedRouteSnapshot, state: RouterStateSnapshot ): Observable<boolean> | Promise<boolean> | boolean {
        return this.activateIfLoggedIn();
    }

    canActivateChild( next: ActivatedRouteSnapshot, state: RouterStateSnapshot ): Observable<boolean> | Promise<boolean> | boolean {
        return this.activateIfLoggedIn();
    }

    activateIfLoggedIn() {
        if (!this.session.isLoggedIn) {
            this.router.navigate(['/login']);
            return false;
        }

        return true;
    }
}
