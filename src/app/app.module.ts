import { BrowserModule } from '@angular/platform-browser';  // *ngFor & *ngIf
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ProductModule } from './products/product.module';
import { AppRoutingModule } from './shared/app-routing.module';
import { ProductRoutingModule } from './shared/product-routing.module';

@NgModule({
  declarations: [ 
    AppComponent
   ],
  imports: [ 
    BrowserModule,
    HttpClientModule,
    ProductModule, // It's required that ProductModule appears before RoutingModule to make accessible the routes of the products
    AppRoutingModule, ProductRoutingModule // The Router Modules always be the last in the imports array 
  ],
  bootstrap: [ AppComponent ] // bootstrap defines root component
})
export class AppModule { }
