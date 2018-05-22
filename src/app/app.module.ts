import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ProductListComponent } from './product/product_list/product-list.component';
import { RatingStartsComponent } from './shared/starts.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { RouterModule } from '@angular/router';

import { ProductService } from './services/products.service';
import { NotFoundComponent } from './shared/error-codes/404.component';
import { NavBarComponent } from './navbar/navbar.component';
import { ProductDetailComponent } from './product/product_detail/product-detail.component';

const routes = [
  {path: 'products', component: ProductListComponent},
  {path: 'products/:id', component: ProductDetailComponent},
  {path: 'welcome', component: WelcomeComponent},
  {path: '', component: WelcomeComponent, pathMatch: 'full'},
  {path: '**', component: NotFoundComponent}
]
  
@NgModule({
  declarations: [
    AppComponent, 
    ProductListComponent,
    RatingStartsComponent,
    WelcomeComponent,
    NotFoundComponent, 
    NavBarComponent,
    ProductDetailComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    FormsModule, 
    RouterModule.forRoot(routes)
  ],
  providers: [
    ProductService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { 
  
}
