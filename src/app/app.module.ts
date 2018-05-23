import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { RouterModule } from '@angular/router';

import { ProductService } from './services/products.service';
import { NotFoundComponent } from './shared/error-codes/404.component';
import { ProductModule } from './product/product.module';
import { SharedModule } from './shared/shared/shared.module';
import { RatingStartsComponent } from './shared/starts.component';

const routes = [  
  {path: 'welcome', component: WelcomeComponent},
  {path: '', component: WelcomeComponent, pathMatch: 'full'},
  {path: '**', component: NotFoundComponent}
]
  
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    RouterModule.forRoot(routes), 
    ProductModule, 
    SharedModule
  ],
  providers: [],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { 
  
}
