import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RatingStartsComponent } from '../starts.component';
import { WelcomeComponent } from '../../welcome/welcome.component';
import { NotFoundComponent } from '../error-codes/404.component';
import { NavBarComponent } from '../../navbar/navbar.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule
  ],
  declarations: [
    RatingStartsComponent,
    WelcomeComponent,
    NotFoundComponent, 
    NavBarComponent  
  ],
  exports:[
    RatingStartsComponent,
    WelcomeComponent,
    NotFoundComponent, 
    NavBarComponent  
  ]
})
export class SharedModule { }
