import { Component, OnInit } from '@angular/core';
import { AuthenticateUserService } from '../services/user.authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  mouseIsOverLoginButton:boolean
  constructor(private _authenticationService:AuthenticateUserService,private _router:Router) { }

  ngOnInit() {
  }

  login(formValues){
    this._authenticationService.loginUser(formValues.userName, formValues.pasword);
    this._router.navigate(['/'])
  }
  cancel(){
    this._router.navigate(['/'])
  }
   
}
