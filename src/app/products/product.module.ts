import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { ProductRoutingModule } from '../shared/product-routing.module';



@NgModule({
  imports: [
    SharedModule,
    ProductRoutingModule
  ]
})
export class ProductModule { }
