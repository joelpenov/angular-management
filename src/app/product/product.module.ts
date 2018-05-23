import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductDetailComponent } from './product_detail/product-detail.component';
import { ProductListComponent } from './product_list/product-list.component';
import { SharedModule } from '../shared/shared/shared.module';
import { BrowserModule } from '@angular/platform-browser';
import { ProductService } from '../services/products.service';
import { ProductGuardServiceService } from '../services/product-guard.service.service';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

const productRoutes = [
  {path: 'products', component: ProductListComponent},
  {path: 'products/:id', component: ProductDetailComponent, canActivate: [ProductGuardServiceService]}
]

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(productRoutes),
  ],
  declarations: [
    ProductDetailComponent,
    ProductListComponent 
  ], 
  providers:[
    ProductService,
    ProductGuardServiceService
  ]
})
export class ProductModule { 

}
