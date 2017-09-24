import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

import {ISushi, TAGS, CATEGORY} from './sushi.class';

import './sushi.component.less';

@Component({
	selector: '<sushi-component>',
	template: require('./sushi.component.html')
})
export class SushiComponent extends OnInit {
	@Input()
	sushi: ISushi;
	imgPath: string;

	@Output()
	openModal: EventEmitter<any> = new EventEmitter();

	ngOnInit() {
		this.imgPath = require('./../../../images/sushi/' + this.sushi.id + '.jpg');
	}

	openOrderModal () {
		this.openModal.emit(this.sushi);
	}

	getCategory (category: CATEGORY): string {
		switch (category) {
			case 0:
				return 'Starter';
			case 1:
				return 'Mixed';
			case 2:
				return 'Salads';
			case 3:
				return 'Sashimi';
			case 4:
				return 'Hot dishes';
			case 5:
				return 'Maki';
			case 6:
				return 'Barche mix';
			default:
				return '';
		}
	}
}
