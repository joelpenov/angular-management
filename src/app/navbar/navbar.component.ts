import { Component } from "@angular/core";
import { SystemManagementConstants } from "../shared/systemManagement.model";

@Component({
    selector: 'sm-navbar',
    templateUrl:'./navbar.component.html',
    styleUrls:['./navbar.component.css']
})
export class NavBarComponent{
    menuItems:any[] = [
        {linkUrl: '/products', linkText:'Products'},
        {linkUrl: '/welcome', linkText:'Welcome'}
    ]
    
    ApplicationName:string=SystemManagementConstants.AppName; 
}