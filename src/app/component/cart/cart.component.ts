import {Component, OnInit} from '@angular/core';

import {OrderService} from '../main.service';
import {LoginService} from '../login/login.service';
import {SUSHIES} from '../menu/menu.data';

import {Order} from '../menu/menu.class';
import {ISushi} from '../menu/sushi/sushi.class';
import {Account} from '../login/login.class';

import './cart.component.less';

@Component({
  selector: 'cart-component',
  template: require('./cart.component.html')
})
export class CartComponent extends OnInit {
	order: Order;
	account: Account;

	constructor (private orderService: OrderService,
		private loginSerivce: LoginService) {
		super();
	};

	ngOnInit () {
		this.account = new Account();

		if (this.loginSerivce.getAuthority) {
			this.account = this.loginSerivce.getAccount();
		}

		this.order = this.orderService.get();

		$('.timepicker').pickatime({
			default: 'now',
			fromnow: 0,
			twelvehour: true,
			donetext: 'Consegna',
			cleartext: 'Clear',
			canceltext: 'Cancel',
			autoclose: false,
			ampmclickable: true
		});

		$('select').material_select();
	}

	deleteSushi (deletedsushi: ISushi) {
		this.order.orderedSushies = this.order.orderedSushies
			.filter(sushi => sushi.id !== deletedsushi.id );
		this.order.price = getTotalPrice(this.order);
	}

	emptyOrder () {
		this.order = new Order();
		this.orderService.set(this.order);
	}

	sendOrder () {
		this.emptyOrder();
		var $toastContent = $('<p>Qing is great at 2017.</p>');
		Materialize.toast($toastContent, 4000);
	}
}

function getTotalPrice (order: Order): number {
	if (order.orderedSushies.length === 0) {
		return 0;
	} else {
		return order.orderedSushies
			.map(sushi => {return sushi.price * sushi.order; })
			.reduce(function (sum: number, value: number) {
					return sum + value;
			}
		);
	}
}
