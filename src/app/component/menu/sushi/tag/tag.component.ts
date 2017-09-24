import {Component, Input, OnInit} from '@angular/core';

import {TAGS} from '../sushi.class';

import './tag.component.less';

@Component({
	selector: 'tag-component',
	template: require('./tag.component.html')
})
export class TagComponent extends OnInit {
	@Input()
	tags: TAGS[];

	ngOnInit () {
		$(document).ready(function(){
		    $('.tooltipped').tooltip({delay: 50});
		});
	}

	ifTagsContain (tag: TAGS): boolean {
		return this.tags.indexOf(tag) !== -1;
	}
}
