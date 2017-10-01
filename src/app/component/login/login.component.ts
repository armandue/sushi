import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {LoginService} from './login.service';

import {Account} from './login.class';

import './login.component.less';

@Component({
	selector: 'login-component',
	template: require('./login.component.html')
})
export class LoginComponent implements OnInit {
	account: Account;
	username: string;
	password: string;

	constructor (private loginSerivce: LoginService, private router: Router) {}

	ngOnInit () {
		this.account = this.loginSerivce.getAccount();
	}

	login () {
		if (this.username === this.account.username
			&& this.password === this.account.password) {
			this.account = this.loginSerivce.setAuthority();
			this.router.navigate(['cart']);
		} else {
			Materialize.toast('Username or password is not correct.', 4000);
			Materialize.toast('Please try qing && great!', 4000);
			this.username = '';
			this.password = '';
		}
	}
}
