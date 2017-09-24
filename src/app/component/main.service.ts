import {Injectable} from '@angular/core';

import {Order} from './menu/menu.class';

@Injectable()
export class OrderService {

	private order: Order = new Order();

	set (order: Order) {
		this.order = order;
	}

	get (): Order {
		return this.order;
	}
}
