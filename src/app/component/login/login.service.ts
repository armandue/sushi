import {Injectable} from '@angular/core';

import {Account} from './login.class';

@Injectable()
export class LoginService {
	private account: Account = new Account();

	getAccount () : Account {
		return this.account;
	}

	getAuthority () : boolean {
		return this.account.authority;
	}

	setAuthority () : Account {
		this.account.authority = true;
		return this.account;
	}
}
