import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared/shared.module';
import { BrowserModule } from '@angular/platform-browser';
import { ProductService } from '../services/products.service';
import { ProductGuardServiceService } from '../services/product-guard.service.service';
import { RouterModule,  Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ToastrService } from '../services/toastr.service';
import { ProductResolver } from '../services/product.resolver.service';

import {
  IProduct,
  ProductListComponent,
  ProductDetailComponent
} from './product.index'

const productRoutes:Routes = [
  {path: 'products', component: ProductListComponent, resolve: {products:  ProductResolver}},
  {path: 'products/:id', component: ProductDetailComponent, 
    canActivate: [ProductGuardServiceService], 
    canDeactivate: ['canDeactivateProductDetail']
  }
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
    ProductGuardServiceService,
    ToastrService,
    {
      provide:'canDeactivateProductDetail', useValue:checkDirtyState
    },
    ProductResolver
  ]
})
export class ProductModule { 

}

export function checkDirtyState(currentProduct:ProductDetailComponent):boolean{
  return currentProduct.hasMoreThanThreeStars();
}