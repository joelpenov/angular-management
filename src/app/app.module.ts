import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { ProductListComponent } from './product/product_list/product-list.component';
import { RatingStartsComponent } from './shared/starts.component';
import { ProductService } from './services/products.service';
import { HttpClientModule } from '@angular/common/http';
  
@NgModule({
  declarations: [
    AppComponent, 
    ProductListComponent,
    RatingStartsComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    FormsModule
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
