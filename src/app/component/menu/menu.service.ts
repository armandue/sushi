import {Injectable} from '@angular/core';
import {Resource, ResourceParams, ResourceAction, ResourceMethod} from 'ngx-resource';
import {RequestMethod} from '@angular/http';

import {ISushi} from './sushi/sushi.class';

@Injectable()
@ResourceParams({
	url: 'http://localhost:3000/home/cin/WEBaby/Sushi/src/app/component/menu/menu.data.json'
})
export class SushiService extends Resource {
	@ResourceAction({
		isArray: true,
		method: RequestMethod.Get
	})
	geySushies: ResourceMethod<{}, ISushi[]>;
}
