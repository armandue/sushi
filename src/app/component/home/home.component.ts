import {Component, OnInit} from '@angular/core';

import {GoogleMap} from './home.class';

import './home.component.less';

@Component({
	selector: 'home-component',
	template: require('./home.component.html')
})
export class HomeComponent extends OnInit {
	googleMap: GoogleMap;

	constructor () {
		super();
		this.googleMap = {
			longitude: 12.248395,
			latitude: 45.654279,
			zoom: 15,
			scrollwheel: false,
			marker: {
				longitude: 12.248395,
				latitude: 45.654279,
				title: 'Qing is great.'
			}
		};
	}

	ngOnInit () {
		$(document).ready(function() {
			$('.parallax').parallax();
		});
	}
}
