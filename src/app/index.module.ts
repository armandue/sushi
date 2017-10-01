import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import {ResourceModule} from 'ngx-resource';
import {routing, RootComponent} from './routes';
import {AgmCoreModule} from '@agm/core';

import 'materialize-css';

import {SushiFilterPipe} from './pipe/SushiFilterPipe';
import {MainComponent,
  HomeComponent,
  MenuComponent,
  SushiComponent,
  TagComponent,
  CartComponent,
  OrderService,
  LoginComponent,
  LoginService} from './component/index';

import {NonNegativeValidatorDirective} from './validator/nonNegativeNumberDirective';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    routing,
    ResourceModule.forRoot(),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyB6pQBK5mqqHfF-FxNP1L4f3oYT7R9y098'
    })
  ],
  declarations: [
    SushiFilterPipe,
    CartComponent,
    TagComponent,
    SushiComponent,
    HomeComponent,
    MenuComponent,
    MainComponent,
    RootComponent,
    LoginComponent,
    NonNegativeValidatorDirective
  ],
  providers: [
    OrderService,
    LoginService
  ],
  bootstrap: [RootComponent]
})
export class AppModule {}
