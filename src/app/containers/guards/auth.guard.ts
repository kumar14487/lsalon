import { Injectable } from '@angular/core';
import {
    Router,
    CanActivate,
    ActivatedRouteSnapshot,
    RouterStateSnapshot
} from '@angular/router';
import { LoginService } from '../services/login.service';

// import { AuthenticationService } from '@/_services';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
    constructor(private router: Router, private loginService: LoginService) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        const currentUser = this.loginService.currentUserValue;
        if (currentUser) {
            //   if (
            //     route.data.screenName &&
            //     currentUser.menuAuthorization[route.data.screenName] === false
            //   ) {
            // role not authorised so redirect to home page
            // this.router.navigate(['/error'], {
            //   queryParams: { returnUrl: state.url }
            // });
            //     return false;
            //   }
            // console.log(currentUser);

            return true;
        }
        this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
        return false;
    }
}
