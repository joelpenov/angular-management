import { Component } from "@angular/core";
import { SystemManagementConstants } from "../shared/systemManagement.model";
import { AuthenticateUserService } from "../user/services/user.authentication.service";

@Component({
    selector: 'sm-navbar',
    templateUrl:'./navbar.component.html',
    styleUrls:['./navbar.component.css']
})
export class NavBarComponent{
    constructor(public authenticationService:AuthenticateUserService) {
        
    }
    menuItems:any[] = [
        {linkUrl: '/products', linkText:'Products'},
        {linkUrl: '/welcome', linkText:'Welcome'}
    ]


    
    ApplicationName:string=SystemManagementConstants.AppName; 
}