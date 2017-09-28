import {Component, OnInit, OnDestroy} from '@angular/core';

import {ISushi, CATEGORY} from './sushi/sushi.class';
import {Order} from './menu.class';
import {SUSHIES} from './menu.data';
import {OrderService} from '../main.service';

import './menu.component.less';

@Component({
	selector: 'menu-component',
	template: require('./menu.component.html')
})
export class MenuComponent implements OnInit, OnDestroy {
	sushies: ISushi[];
	selectedImage: string;
	order: Order;
	orderedSushiNumber: number;

	selectedSushi: ISushi = {
		id: 0,
		name: '',
		price: 0,
		ingredient: '',
		unit: 0,
		tags: null,
		order: 0,
		category: null,
		avaiable: false
	};

	constructor (private orderSerivce: OrderService) {};

	ngOnInit(): any {
		this.sushies = SUSHIES;
		this.orderedSushiNumber = 0;
		this.order = this.orderSerivce.get();

		$(document).ready(function(){
		    $('.modal').modal();
		});

		$('.button-collapse').sideNav({
			menuWidth: 400
		});
	}

	openOrderModal (sushi: ISushi) {
		this.selectedSushi = sushi;
		this.orderedSushiNumber = sushi.order;
		this.selectedImage = require('./../../images/sushi/' + this.selectedSushi.id + '.jpg');
		$('#selectedSushi').modal('open');
	}

	cancelOrder () {
		this.selectedSushi.order = 0;
	}

	addOrder () {
		this.selectedSushi.order = this.orderedSushiNumber;
	}

	getOrderList () {
		this.order.orderedSushies = this.sushies.filter(
			sushi => sushi.order !== 0
		);

		if (this.order.orderedSushies.length) {
			this.order.price = this.order.orderedSushies.map(
				sushi => {return sushi.price * sushi.order; }
			).reduce(function (sum: number, value: number) {
				return sum + value;
			});
		} else {
			this.order.price = 0;
		}
	}

	getCategory (category: CATEGORY): string {
		return CATEGORY[category];
	}

	emptyOrder () {
		this.order = new Order();
		this.sushies.forEach(
			sushi => {
				sushi.order = 0;
			}
		);
		$('.button-collapse').sideNav('hide');
	}

	ngOnDestroy () {
		this.getOrderList();
		this.orderSerivce.set(this.order);
	}
}
