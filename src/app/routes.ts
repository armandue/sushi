import {Component} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {MainComponent,
  HomeComponent,
  MenuComponent,
  CartComponent,
  LoginComponent,
  LoginGuard} from './component/index';

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
        redirectTo: 'home',
        pathMatch: 'full'
      },
    	{
    		path: 'home',
    		component: HomeComponent
    	},
      {
        path: 'menuOnline',
        component: MenuComponent
      },
      {
        path: 'cart',
        component: CartComponent,
        canActivate: [LoginGuard]
      },
      {
        path: 'login',
        component: LoginComponent
      }
    ]
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full'
  }
];

export const routing = RouterModule.forRoot(routes, {useHash: true});
