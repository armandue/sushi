import {Pipe, PipeTransform} from '@angular/core';

import {ISushi, TAGS} from '../component/menu/sushi/sushi.class';

@Pipe({
	name: 'sushiFilter',
	pure: false
})
export class SushiFilterPipe implements PipeTransform {

	transform(sushies: ISushi[], tags: any): ISushi[] {
		return sushies.filter(sushi => {
			var ifContain = true;
			sushi.tags.forEach(tag => {
				if (!tags[TAGS[tag]]) {
					ifContain = false;
				}
			});
			return ifContain;
		});
	}
}
