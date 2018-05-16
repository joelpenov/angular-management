import { Component } from '@angular/core';
import 'node_modules/bootstrap/dist/css/bootstrap.min.css'

@Component({  
  selector: 'ms-root',  
  templateUrl: './app.component.html',  
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  pageTitle = 'Management System';
}
