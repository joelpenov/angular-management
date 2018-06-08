import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthenticateUserService } from '../services/user.authentication.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  profileForm:FormGroup
  firstName:FormControl
  lastName:FormControl
  constructor(private _router:Router,public authService:AuthenticateUserService) {
   }

  ngOnInit() {

    let isAuthenticated = this.authService.isAuthenticated();
    let initialFirtsName = isAuthenticated ? this.authService.currentUser.firstName : '';
    let initialLastName = isAuthenticated ? this.authService.currentUser.lastName : '';
    let startWithLetterPattern = '[a-zA-Z].*';

    this.firstName=new FormControl(initialFirtsName, [Validators.required, Validators.pattern(startWithLetterPattern)]);
    this.lastName=new FormControl(initialLastName, [Validators.required, Validators.pattern(startWithLetterPattern)]);
    this.profileForm = new FormGroup({
      firstName: this.firstName,
      lastName: this.lastName
    });
  }

  save(formValues):void{
    if(formValues === undefined || this.profileForm.invalid) return;
    this.authService.updateUserProfile(formValues.firstName, formValues.lastName)
    this.navigateToProductsList()
  }

  cancel():void{
    this.navigateToProductsList()
  }

  navigateToProductsList():void{
    this._router.navigate(['/products'])
  }

  firstNameIsInvalid():boolean{
    return this.fieldIsInvalid(this.firstName);
  }

  lastNameIsInvalid():boolean{
    return this.fieldIsInvalid(this.lastName);
  }

  fieldIsInvalid(targetField:FormControl):boolean{
    return targetField.invalid && targetField.touched;
  }

}