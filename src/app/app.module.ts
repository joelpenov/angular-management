import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { ProductListComponent } from './product/product_list/product-list.component';
import { RatingStartsComponent } from './shared/starts.component';
  
@NgModule({
  declarations: [
    AppComponent, 
    ProductListComponent,
    RatingStartsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
