import {Injectable} from '@angular/core';
import {Router, CanActivate} from '@angular/router';
import {LoginService} from './login.service';

@Injectable()
export class LoginGuard implements CanActivate {
	constructor (private loginSerivce: LoginService, private router: Router) {};

	canActivate () {
		if (!this.loginSerivce.getAuthority()) {
			this.router.navigate(['login']);
		}
		return this.loginSerivce.getAuthority();
	}
}
