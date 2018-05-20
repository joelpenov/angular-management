import { Component } from '@angular/core';
import 'node_modules/bootstrap/dist/css/bootstrap.min.css'
import { SystemManagementConstants } from './shared/systemManagement.model';

@Component({  
  selector: 'sm-root',  
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  pageTitle:string = SystemManagementConstants.AppName;
}
