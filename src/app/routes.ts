import {Component} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {MainComponent,
  HomeComponent,
  MenuComponent,
  CartComponent} from './component/index';

@Component({
  selector: 'app-root',
  template: '<router-outlet></router-outlet>'
})
export class RootComponent {}

export const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
    	{
    		path: '',
    		component: HomeComponent
    	},
      {
        path: 'menuOnline',
        component: MenuComponent
      },
      {
        path: 'cart',
        component: CartComponent
      }
    ]
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full'
  }
];

export const routing = RouterModule.forRoot(routes);
