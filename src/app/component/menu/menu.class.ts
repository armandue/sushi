import {ISushi} from './sushi/sushi.class';

export class Order {
	price: number;
	orderedSushies: ISushi[];

	constructor() {
		this.price = 0;
		this.orderedSushies = null;
	};
}
